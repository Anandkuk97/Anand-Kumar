'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 192;
const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.041s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload all images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // All images loaded
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Frame index mapped to scroll progress
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (!canvasRef.current || images.length !== FRAME_COUNT) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const img = images[Math.round(latest)];
    if (!img) return;

    // Draw with object-fit: cover logic
    const canvas = canvasRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      
      // Trigger a re-draw on resize if images are ready
      if (images.length === FRAME_COUNT) {
        frameIndex.set(frameIndex.get() + 0.0001); // trigger motion value change to redraw
      }
    };
    
    // Initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
            <div className="text-white text-lg tracking-widest animate-pulse font-light">
              LOADING EXPERIENCES...
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="h-full w-full block"
        />
        {/* We place Overlay as a child/sibling later, but typically it acts globally or as a sibling */}
      </div>
    </div>
  );
}
