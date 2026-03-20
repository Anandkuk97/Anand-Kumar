'use client';

import { motion } from 'framer-motion';
import { ChevronUp, Mail, Quote, Target, Briefcase, GraduationCap, ShieldCheck, Award, Phone, MapPin, Linkedin, Clock } from 'lucide-react';
import CountUp from './CountUp';
import React, { useState, useRef } from 'react';

const achievements = [
  { value: 1.2, prefix: "€", suffix: "M", label: "Waste Eliminated", decimals: 1, desc: "From a 90-day audit nobody believed was needed, to the biggest cost saving in the plant’s history." },
  { value: 62, prefix: "", suffix: "%", label: "Defect Rate Reduction", decimals: 0, desc: "Injection moulding rejections dropped from 8.2% to 3.1%. Sigma level: 2.9 → 3.9." },
  { value: 37, prefix: "", suffix: "%", label: "Faster Fulfilment", decimals: 0, desc: "Order-to-dispatch went from 11.2 days to 7.1 days. 66% of the old process was waiting, not working." },
  { value: 50, prefix: "", suffix: "+", label: "People Coached", decimals: 0, desc: "Across production, warehousing, quality, and dispatch. Two operators became Kaizen leads." },
  { value: 96, prefix: "", suffix: "%", label: "On-Time Delivery", decimals: 0, desc: "Up from 78%. Client penalties eliminated entirely in Year 2." },
  { value: 50, prefix: "", suffix: "%", label: "MBA Scholarship", decimals: 0, desc: "Dean’s Award at the University of Essex. Proof that the academic world values what the shop floor taught me." },
];

const featuredProjects = [
  {
    title: "Eliminating €1.2M in Manufacturing Waste",
    tags: ["Lean Six Sigma", "DMAIC", "Rubber & Plastics Manufacturing"],
    desc: "A comprehensive 90-day waste audit revealed €1.2M in hidden costs across injection moulding scrap, inventory waste, and fulfilment delays. By spearheading three parallel DMAIC projects over 3+ years, the entire plant operations were transformed. Rejection rates plummeted, on-time delivery skyrocketed, and the stigma of inefficiency was permanently erased.",
    stats: "Rejection rate 8.2% → 3.1% | On-time delivery 78% → 96% | Sigma 2.9 → 3.9",
    learned: "People do not resist change - they resist being changed.",
    isFlagship: true
  },
  {
    title: "NutriFlow - Strategic Marketing Plan",
    tags: ["MBA Coursework (BE880)", "Strategic Marketing", "UK Market Entry"],
    desc: "Developed a full go-to-market strategy for a premium wellness subscription service. Applied PESTEL, Blue Ocean ERRC, STP segmentation, 7Ps, and an integrated marketing communications plan.",
    learned: "Built the entire strategy from scratch for a market I had no prior experience in. Forced me to think beyond operations into customer psychology and brand positioning.",
    isFlagship: false
  },
  {
    title: "NVIDIA Strategic Expansion Report",
    tags: ["MBA Coursework (BE882)", "Financial Strategy", "Data Centre & AI Markets"],
    desc: "Strategic financial analysis of NVIDIA’s expansion into data centre and AI computing. Evaluated capital structure, ROI, competitive threats, and long-term market positioning.",
    learned: "Connecting the dots between a semiconductor company’s financials and the AI revolution. The analysis went through four major iterations before I was satisfied with the depth.",
    isFlagship: false
  },
  {
    title: "ShieldOps - Security Guard Management SaaS",
    tags: ["Entrepreneurship", "SaaS Product Design", "Pilot Stage"],
    desc: "Designing a mobile-first platform for security companies to manage guard deployments, check-ins, and compliance. Currently piloting with a UK-based security firm.",
    learned: "My first time building a product from zero. Learning to separate the MVP from the vision, and negotiating IP and equity with a pilot partner, taught me more about business than any textbook.",
    cta2: "In Development - Updates Coming Soon",
    isFlagship: false
  },
  {
    title: "Depth Psychology in Organisational Consultancy",
    tags: ["MBA Coursework (BE872)", "Critical Essay", "Organisational Behaviour"],
    desc: "A 2,500-word critical essay exploring how unconscious dynamics shape consultant-client relationships, using my own manufacturing experience as a case study through Armstrong’s meaning-making frameworks.",
    learned: "Applying psychoanalytic theory to the resistance I experienced from operators during the standardisation programme at SS Industries. The academic lens gave me language for something I had already lived.",
    isFlagship: false
  }
];

const journey = [
  {
    type: "education",
    title: "MBA",
    org: "University of Essex, UK",
    date: "Oct 2025 - Sep 2026",
    details: "Dean’s Award scholarship (50%). Focus: Operations, Supply Chain Management, Digital Transformation, and ESG."
  },
  {
    type: "work",
    title: "Operations & Supply Chain Manager",
    org: "SS Industries",
    date: "Jun 2020 - Sep 2025",
    details: "Led €1.2M waste elimination programme. Cut fulfilment time 15%, improved inventory accuracy 20%. Managed 50+ vendor relationships. Coached 50+ staff in Lean Six Sigma."
  },
  {
    type: "work",
    title: "Logistics & Inventory Specialist",
    org: "SS Industries",
    date: "Dec 2018 - May 2020",
    details: "Boosted warehouse efficiency 15%. Improved on-time delivery 12%. Built vendor performance monitoring system reducing late shipments 10%."
  },
  {
    type: "education",
    title: "Bachelor of Science",
    org: "RB Roy College, India",
    date: "Nov 2018",
    details: "Foundation in analytical reasoning and quantitative methods."
  }
];

const competencies = [
  "Supply Chain Strategy", "Lean Six Sigma (DMAIC, Kaizen, 5S)", "Warehouse Operations",
  "Inventory Management", "Vendor Management", "Process Improvement", "Demand Forecasting",
  "Procurement", "KPI Development", "Data Analysis", "Power BI", "Excel (Advanced)",
  "Cross-Functional Leadership", "Stakeholder Management", "Cost Reduction", "Risk Mitigation"
];

const certifications = [
  "Six Sigma Black Belt",
  "PMP",
  "CAPM",
  "PwC Management Consulting",
  "Agile PM with JIRA"
];

const thinkingPrinciples = [
  {
    title: "Measure before you fix.",
    desc: "Before I change anything, I spend time understanding what’s actually happening. The €1.2M waste figure at SS Industries only existed because I spent 90 days counting and categorising costs that nobody had ever added up. The number created the urgency; the urgency funded the change."
  },
  {
    title: "Small wins first, big transformation later.",
    desc: "I never launch one grand programme. I launch three small projects that each deliver visible results within 90 days. Credibility from the first win funds the political capital for the second and third."
  },
  {
    title: "Standardisation captures expertise; it does not replace it.",
    desc: "The most experienced operators at my plant initially resisted process parameter sheets. I reframed it: we are not replacing your knowledge, we are writing it down so that every shift performs like your best shift. Two of those operators later became Kaizen team leads."
  },
  {
    title: "Sustainability needs systems, not willpower.",
    desc: "Every improvement I implement includes a control mechanism: daily checklists, weekly audits, monthly KPI reviews. Without the Control phase of DMAIC, improvements drift back within six months."
  }
];

const beyondOps = [
  {
    title: "Visual Storytelling",
    desc: "I use graphic design skills (Photoshop, Canva, data visualisation) to turn complex data into compelling presentations. The same eye for detail that catches a process bottleneck also catches a poorly kerned headline."
  },
  {
    title: "Content & Strategy",
    desc: "Exploring YouTube strategy and cinematic storytelling as creative outlets. Currently building a content approach for SPF, a security services company I co-manage in Bihar."
  },
  {
    title: "Chess & Strategic Thinking",
    desc: "Regular chess player. The pattern recognition and multi-move planning translate directly to how I approach supply chain optimisation - every decision has downstream consequences."
  },
  {
    title: "Entrepreneurship",
    desc: "Co-managing Stone Protection Force (SPF), a PSARA-licensed security company. Building ShieldOps, a SaaS platform for the security industry. Always looking for the next problem worth solving."
  }
];

const references = [
  {
    name: "Sidharth Gupta",
    role: "Managing Director, SS Industries",
    quote: "Anand has been instrumental in transforming our supply chain operations. His strategic approach to process improvement and team leadership has consistently delivered exceptional results."
  },
  {
    name: "Amit Kumar",
    role: "Senior Operations Manager",
    quote: "Anand’s expertise in logistics optimisation and his ability to drive measurable improvements make him a valuable asset to any organisation seeking operational excellence."
  }
];

const HighlightSweep = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <motion.span
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
        className="absolute inset-0 bg-blue-500/30 -mx-1 px-1 rounded-md"
        style={{ zIndex: -1 }}
      />
      <strong className="text-white font-semibold relative z-10 px-1">{children}</strong>
    </span>
  );
};

const ProjectCard = ({ project, idx }: { project: { title: string, tags: string[], desc: string, stats?: string, learned: string, cta1?: string, cta2?: string, isFlagship: boolean }, idx: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reverse axes for expected 3D effect
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 + (idx % 3) * 0.2 }}
      className={`${project.isFlagship ? 'md:col-span-2 lg:col-span-2 h-full' : 'h-full'}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          boxShadow: isHovered ? '0 12px 40px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0
          }}
        />

        <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)', transition: 'transform 0.3s ease-out' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/90 tracking-tight">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, i: number) => (
              <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-white/70 font-light mb-6 leading-relaxed">
            {project.desc}
          </p>
          
          {project.stats && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
              {project.stats}
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-white/10">
            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-2">What Made It Interesting</h4>
            <p className="text-white/60 font-light text-sm italic leading-relaxed mb-6">
              &quot;{project.learned}&quot;
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              {project.cta1 && (
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                   {project.cta1}
                </span>
              )}
              {project.cta2 && (
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
                  {project.cta2}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-20 bg-gradient-to-b from-[#121212] via-slate-900/40 to-[#050505] flex flex-col pt-32 pb-16 overflow-hidden">
      
      {/* 1. About / The Story */}
      <section className="px-6 md:px-24 max-w-4xl mx-auto w-full mb-48 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            The Story.
          </h2>
        </motion.div>
        
        <div className="space-y-8 text-xl md:text-2xl text-white/70 font-light leading-relaxed">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}>
            I grew up in Jharkhand, in a part of India where manufacturing is not glamorous - it is hard, dusty, and unglamorous work. But I was fascinated by it. Not by the machines themselves, but by the systems around them: why did one shift produce more waste than another? Why did some vendors deliver on time and others never could? Why did the warehouse look like it had been organised by throwing things over a wall?
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            Those questions led me to my first job at SS Industries, a rubber and plastics manufacturer in Ranchi. I started as a logistics and inventory coordinator - essentially counting stock and chasing deliveries. But I kept asking questions, and I kept finding things that could be done better.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            Within two years, I was promoted to Operations Manager. Over the next five years, I led a Lean Six Sigma programme that eliminated <HighlightSweep>€1.2 million</HighlightSweep> in annual waste, cut fulfilment time by 15%, and raised inventory accuracy from 83% to 97.4%. I coached 50+ staff in continuous improvement. Two of the injection moulding operators I trained became Kaizen team leads.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }}>
            The most important thing I learned in those seven years was not a methodology. It was that people do not resist change - they resist being changed. When the team owns the improvement, they protect it. That insight shapes everything I do.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
            Now I’m at the University of Essex completing an MBA, adding strategic finance, digital transformation, and ESG thinking to the operational foundation I built on the shop floor. I am looking for Operations Manager, Business Analyst, or Strategy Consultant roles in the UK where I can bring both the hands-on experience and the strategic perspective.
          </motion.p>
        </div>
      </section>

      {/* 2. Impact in Numbers */}
      <section className="px-6 md:px-24 w-full mb-48 bg-white/5 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white/90">
              Impact in Numbers.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col text-left p-8 rounded-3xl bg-black/20 hover:bg-black/40 transition-colors border border-white/5"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-4 tracking-tighter">
                  <CountUp value={item.value} duration={2} prefix={item.prefix} suffix={item.suffix} decimals={item.decimals} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.label}</h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.3 + idx * 0.1, duration: 0.5 }} // delay after counter finishes
                  className="text-sm text-white/60 font-light leading-relaxed border-t border-white/10 pt-4"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            Selected Work.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 font-light"
          >
            Case studies, MBA projects, and things I’m building.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </section>

      {/* 4. Professional Journey (Vertical Timeline) */}
      <section className="px-6 md:px-24 mb-48 max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white/90">
            Professional <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-12 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline dot */}
              <div className="absolute left-12 md:left-1/2 -translate-x-1/2 md:translate-x-[-16px] w-8 h-8 rounded-full bg-slate-900 border-4 border-blue-500/50 flex items-center justify-center z-10 group-hover:border-blue-400 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-white/80" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-80px)] ml-auto md:ml-0 md:w-[calc(50%-40px)] p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6 text-white/40">
                    {item.type === 'work' ? <Briefcase size={20} className="text-blue-400"/> : <GraduationCap size={20} className="text-purple-400"/>}
                    <span className="font-mono tracking-widest text-sm uppercase">{item.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{item.title}</h3>
                  <h4 className="text-lg text-blue-400 font-medium mb-6">{item.org}</h4>
                  <p className="text-base text-white/60 font-light leading-relaxed">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Skills & Credentials & How I Think */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Skills & Credentials */}
          <div>
            <h2 className="flex items-center gap-4 text-3xl font-bold mb-8 text-white/90">
              <Target className="text-emerald-400" /> Skills & Credentials
            </h2>
            <div className="mb-12">
              <h3 className="text-lg text-white/60 mb-6 uppercase tracking-widest font-mono text-sm">Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {competencies.map((c, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-light text-white/80"
                  >
                    {c}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white/60 mb-6 uppercase tracking-widest font-mono text-sm">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-transparent flex items-center gap-3"
                  >
                    <Award size={20} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* How I Think */}
          <div>
            <h2 className="flex items-center gap-4 text-3xl font-bold mb-8 text-white/90">
              <ShieldCheck className="text-blue-400" /> How I Approach Problems
            </h2>
            <div className="space-y-8">
              {thinkingPrinciples.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-6 py-2 border-l border-white/10 group overflow-hidden"
                >
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="absolute left-[-1px] top-0 w-[2px] bg-blue-500"
                  />
                  <h3 className="text-xl font-bold text-white/90 mb-3 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.2) + 0.3, duration: 0.5 }}
                    className="text-white/60 font-light leading-relaxed text-sm"
                  >
                    {p.desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Beyond Operations */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
         <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tighter text-white/90 mb-4">Beyond the Day Job.</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beyondOps.map((item, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                 <h3 className="text-2xl font-bold mb-4 text-white/90">{item.title}</h3>
                 <p className="text-white/60 font-light leading-relaxed">
                   {item.desc}
                 </p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 7. Get in Touch & Contact Form */}
      <section id="contact" className="px-6 md:px-24 mb-48 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white/90">
              Get In Touch
            </h2>
            <p className="text-lg text-white/60 font-light mb-12 leading-relaxed">
              Ready to optimize your operations or enhance your brand? Let&apos;s discuss how I can help you achieve your goals. I&apos;m always excited to discuss new opportunities and collaborate on projects that drive meaningful impact.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm uppercase tracking-widest font-mono mb-1">Phone</h4>
                  <p className="text-xl font-medium">+44 7563053569</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm uppercase tracking-widest font-mono mb-1">Email</h4>
                  <a href="mailto:uk25anand@gmail.com" className="text-xl font-medium hover:text-blue-400 transition-colors">
                    uk25anand@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm uppercase tracking-widest font-mono mb-1">Location</h4>
                  <p className="text-xl font-medium">Colchester / London, UK</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm uppercase tracking-widest font-mono mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com/in/anand-kumar-067662190" target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-blue-500 transition-colors">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 flex gap-4">
              <Clock className="text-blue-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Response Time</h4>
                <p className="text-white/60 font-light text-sm">I typically respond to messages within 24 hours. For urgent inquiries, feel free to call directly.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 text-white relative z-10">Send a Message</h3>
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white/50 text-sm font-semibold mb-2">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your full name" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-white/50 text-sm font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm font-semibold mb-2">Subject *</label>
                <input 
                  type="text" 
                  placeholder="What&apos;s this about?" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm font-semibold mb-2">Message *</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project or inquiry..." 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-emerald-400 focus:bg-emerald-400 focus:text-white hover:text-white transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 8. References & Footer */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full pb-32">
        <h2 className="text-4xl font-bold mb-12 text-center text-white/90">What Others Say.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {references.map((ref, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative hover:bg-white/10 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              <p className="text-white/80 font-light italic text-lg leading-relaxed mb-8 relative z-10">&quot;{ref.quote}&quot;</p>
              <div>
                <h4 className="font-bold text-white/90">{ref.name}</h4>
                <p className="text-white/50 text-sm">{ref.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll To Top */}
        <div className="flex justify-center border-t border-white/10 pt-16">
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer z-50 relative"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:-translate-y-2 transition-all duration-300 bg-white/5 backdrop-blur-md">
              <ChevronUp size={24} />
            </div>
            <span className="font-mono tracking-widest text-sm uppercase">Return to Main Page</span>
          </button>
        </div>
      </section>

    </div>
  );
}
