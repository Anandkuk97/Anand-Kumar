'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CountUp({ 
  value, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  decimals = 0 
}: CountUpProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / (duration * 1000);

      if (progress < 1) {
        setCurrentValue(value * easeOutCubic(progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCurrentValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{currentValue.toFixed(decimals)}{suffix}
    </span>
  );
}
