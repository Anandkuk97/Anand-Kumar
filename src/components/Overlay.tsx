'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% scroll (Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.12], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: 30% scroll (Left)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -100]);

  // Section 3: 60% scroll (Right)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.85], [50, -100]);

  return (
    <div className="pointer-events-none absolute left-0 top-0 h-[500vh] w-full z-10">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mix-blend-difference">
            Anand Kumar.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/80 font-light tracking-wide uppercase">
            Consultant & Supply Chain Strategist
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 inset-y-0 flex flex-col justify-center max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight text-white drop-shadow-2xl">
            I drive transformational <br/><span className="italic font-light text-white/70">change.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 inset-y-0 flex flex-col justify-center text-right max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight leading-tight text-white drop-shadow-2xl">
            Bridging raw operations <br/><span className="text-white/70 font-light">& strategic insight.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
