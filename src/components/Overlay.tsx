'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';

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
            Operations Manager | Supply Chain | Data Analytics
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 inset-y-0 flex flex-col justify-center max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-2xl">
            I eliminated <CountUp value={1.2} duration={2} prefix="€" suffix="M" decimals={1} /> in manufacturing waste <br/><span className="italic font-light text-white/70">at a rubber & plastics plant in India.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 inset-y-0 flex flex-col justify-center text-right max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-2xl">
            Now I’m building the strategic toolkit <br/><span className="text-white/70 font-light">to do it at scale. | MBA, University of Essex</span>
          </h2>
        </motion.div>

        {/* Persistent bottom elements */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6 px-4 pointer-events-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {['Six Sigma Black Belt', 'PMP', 'MBA', 'SQL', 'Data Analytics', '7+ Years Operations'].map((pill, idx) => (
              <motion.div
                key={pill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/80 font-medium"
              >
                {pill}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex gap-4"
          >
            <button onClick={() => window.scrollTo({ top: window.innerHeight * 5, behavior: 'smooth'})} className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider block">
              View My Work <ArrowRight size={16} />
            </button>
            <a href="https://www.linkedin.com/in/anand-kumar-067662190/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-transparent border border-white text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
              Go to LinkedIn <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
