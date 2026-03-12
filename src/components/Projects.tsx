'use client';

import { motion } from 'framer-motion';
import { ChevronUp, Mail, Quote, Trophy, Target, Briefcase, GraduationCap, Palette, ShieldCheck, Award, CheckCircle2, ArrowRight, Phone, MapPin, Linkedin, Clock } from 'lucide-react';

const achievements = [
  { value: "98%", label: "On-Time Delivery", desc: "Maintained through proactive risk assessments" },
  { value: "0", label: "Deviation Audits", desc: "Full HSE compliance in warehouse operations" },
  { value: "50%", label: "MBA Scholarship", desc: "Dean's Award at University of Essex" },
  { value: "Award", label: "Appreciation Letter", desc: "Outstanding supply chain continuity during COVID-19" },
];

const competencies = [
  "Supply Chain Strategy & Optimization",
  "Warehouse Operations & Layout Design",
  "Transport Planning & Route Optimization",
  "Inventory Management & Demand Forecasting",
  "Procurement & Supplier Relationship Management",
  "Lean Six Sigma Process Improvement"
];

const leadershipTech = [
  "Cross-functional Team Leadership (50+ staff)",
  "Data Analysis & KPI Management",
  "Risk Assessment & Mitigation Strategies",
  "HSE Compliance & Audit Management",
  "Advanced Excel & Tableau Analytics",
  "Contract Negotiation & Cost Management"
];

const journey = [
  {
    type: "education",
    title: "MBA",
    org: "University of Essex, UK",
    date: "Sep 2026",
    details: "Expected completion. Focusing on Operations and Supply Chain Management with strategic applications."
  },
  {
    type: "work",
    title: "Operations & Supply Chain Manager",
    org: "SS Industries, Ranchi",
    date: "June 2020 | Sep 2025",
    details: "Led strategic transformation, yielding 10% delivery improvements and 20% efficiency gains. Managed 50+ vendors."
  },
  {
    type: "work",
    title: "Logistics & Procurement Coordinator",
    org: "SS Industries, Ranchi",
    date: "Dec 2018 | May 2020",
    details: "Delivered 12% cost reductions through vendor analysis. Built dashboards and led agile continuous improvement."
  },
  {
    type: "education",
    title: "Bachelor of Science",
    org: "RB Roy College, India",
    date: "Nov 2018",
    details: "Foundation in logical reasoning and mathematical modeling."
  }
];

const certifications = [
  "PwC US Management Consulting",
  "Six Sigma Black Belt",
  "Project Management Professional (PMP)",
  "Agile Project Management with JIRA Cloud",
  "ISO 9001 Auditor"
];

const services = [
  {
    title: "Business Operations Consulting",
    desc: "Strategic solutions for optimizing logistics, procurement, and operational efficiency using Lean Six Sigma and Kaizen principles.",
    points: ["Process Optimization", "Cost Reduction", "Risk Management", "Performance Analytics"]
  },
  {
    title: "Warehouse Optimization",
    desc: "Streamlining warehouse operations, improving space utilization, and reducing order processing times.",
    points: ["Layout Design", "Workflow Improvement", "Inventory Management", "Efficiency Metrics"]
  },
  {
    title: "Graphic Design for Business",
    desc: "Designing logos, marketing materials, and social media graphics using advanced Photoshop skills.",
    points: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
  },
  {
    title: "Content Creation & Poster Making",
    desc: "Developing engaging content for branding campaigns and creating eye-catching posters for events and marketing initiatives.",
    points: ["Brand Messaging", "Event Posters", "Promotional Materials", "Digital Advertising"]
  },
  {
    title: "Procurement & Quality Check",
    desc: "Comprehensive procurement management and quality assurance services to ensure optimal supplier performance and product standards.",
    points: ["Supplier Evaluation", "Quality Control", "Procurement Strategy", "Compliance Monitoring"]
  },
  {
    title: "One-on-One Counselling",
    desc: "Offering career growth and motivational coaching to individuals and teams for personal and professional development.",
    points: ["Career Guidance", "Skill Development", "Goal Setting", "Performance Coaching"]
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
    role: "Senior Hiring Manager, Supply Chain & Logistics Specialist",
    quote: "Anand's expertise in logistics optimization and his ability to drive measurable improvements make him a valuable asset to any organization seeking operational excellence."
  }
];

export default function Projects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-20 bg-gradient-to-b from-[#121212] via-slate-900/40 to-[#050505] flex flex-col pt-32 pb-16 overflow-hidden">
      
      {/* 1. About / Career Objective */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-16 relative z-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-b border-white/10 pb-12">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              About Me.
            </h2>
            <p className="text-xl md:text-3xl font-light text-white/50 max-w-lg leading-tight">
              Targeting Business Consulting, Supply Chain, & Logistics Management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white/70 font-light text-lg leading-relaxed">
            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-blue-500 block"></span>
                Strategic Positioning
              </h3>
              <p>
                As I advance my career with an MBA from the University of Essex (starting October 2025), I am strategically positioned to leverage my 6+ years of proven expertise in supply chain management, logistics optimization, transport planning, and warehouse operations to drive transformational change in forward-thinking organizations.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-emerald-500 block"></span>
                Why Employers Choose Me
              </h3>
              <p>
                My unique combination of hands on operational excellence, Lean Six Sigma methodologies, and advanced business education makes me an ideal candidate for organizations seeking data driven leaders. My track record of delivering measurable results (20% efficiency improvements, 98% on time delivery rates, and 12% cost reductions) demonstrates my ability to thrive in demanding environments.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }} 
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:col-span-2"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-purple-500 block"></span>
                Comprehensive Supply Chain Excellence
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <p>
                  Having successfully managed end to end supply chain operations including procurement, inventory control, warehouse management, and transport coordination, I bring resilience, adaptability, and innovative problem solving skills essential for navigating today's complex global logistics networks. 
                </p>
                <p>
                  My experience in risk mitigation, especially during the COVID 19 pandemic, showcases my ability to maintain operational continuity under pressure while ensuring regulatory compliance and safety standards.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. Key Achievements Counters */}
      <section className="px-6 md:px-24 w-full mb-48 bg-white/5 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold mb-16 text-center text-white/90"
          >
            Key Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-black/20 hover:bg-black/40 transition-colors border border-white/5"
              >
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-4">{item.value}</span>
                <h3 className="text-xl font-semibold text-white/90 mb-2">{item.label}</h3>
                <p className="text-sm text-white/50 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Professional Journey (Vertical) */}
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
                  <h3 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">{item.title}</h3>
                  <h4 className="text-lg text-blue-400 font-medium mb-6">{item.org}</h4>
                  <p className="text-base text-white/60 font-light leading-relaxed">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Skills & Competencies */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="flex items-center gap-4 text-3xl font-bold mb-8 text-white/90">
              <Target className="text-emerald-400" /> Core Competencies
            </h2>
            <ul className="space-y-6">
              {competencies.map((c, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg text-white/70 font-light border-b border-white/5 pb-4"
                >
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
             <h2 className="flex items-center gap-4 text-3xl font-bold mb-8 text-white/90">
              <ShieldCheck className="text-blue-400" /> Leadership & Tech
            </h2>
            <ul className="space-y-6">
              {leadershipTech.map((c, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg text-white/70 font-light border-b border-white/5 pb-4"
                >
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Additional Stuff: Certifications & Hobbies */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Certifications */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10"
            >
               <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white/90">
                 <Award className="text-yellow-400"/> Certifications
               </h3>
               <ul className="space-y-4">
                 {certifications.map((cert, i) => (
                   <li key={i} className="text-white/70 font-light flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50 mt-2 flex-shrink-0" />
                     {cert}
                   </li>
                 ))}
               </ul>
            </motion.div>

            {/* Hobbies / Graphic Design */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="p-10 rounded-3xl bg-gradient-to-b from-purple-500/20 to-transparent border border-white/10 relative overflow-hidden group"
            >
               {/* Decorative background image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay" />
               <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white/90 relative z-10">
                 <Palette className="text-purple-400"/> Graphic Design Hobbyist
               </h3>
               <p className="text-white/70 font-light leading-relaxed relative z-10">
                 Beyond supply chain, I have a deep passion for Graphic Design. I've completed various creative projects that hone my eye for detail, visual communication, and creative problem solving. This unique mix of analytical and creative thinking allows me to present data and strategies in highly visual, compelling ways.
               </p>
            </motion.div>

         </div>
      </section>

      {/* 6. Services Section */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 font-light max-w-2xl mx-auto"
          >
            Professional services designed to optimize your operations and enhance your brand presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-4 text-white/90 tracking-tight">{service.title}</h3>
              <p className="text-white/60 font-light mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-light text-sm">
                    <CheckCircle2 size={16} className="text-blue-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400 group-hover:text-emerald-300 transition-colors mt-auto w-max">
                Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Ready To Transform CTA */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full mb-48">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-blue-900/60 to-purple-900/60 border border-white/10 p-12 md:p-24 text-center flex flex-col items-center justify-center"
        >
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-white/70 font-light mb-12">
              Let's discuss how I can help optimize your supply chain and enhance your brand presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                Hire Me <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. Get in Touch & Contact Form */}
      <section id="contact" className="px-6 md:px-24 mb-48 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white/90">
              Get In Touch
            </h2>
            <p className="text-lg text-white/60 font-light mb-12 leading-relaxed">
              Ready to optimize your operations or enhance your brand? Let's discuss how I can help you achieve your goals. I'm always excited to discuss new opportunities and collaborate on projects that drive meaningful impact.
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
                  <p className="text-xl font-medium">London, UK</p>
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
                  placeholder="What's this about?" 
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

      {/* 9. References & Footer */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto w-full pb-32">
        <h2 className="text-4xl font-bold mb-12 text-center text-white/90">Professional References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {references.map((ref, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative hover:bg-white/10 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              <p className="text-white/80 font-light italic text-lg leading-relaxed mb-8 relative z-10">"{ref.quote}"</p>
              <div>
                <h4 className="font-bold text-white/90">{ref.name}</h4>
                <p className="text-white/50 text-sm">{ref.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 italic mb-24">References available upon request with full contact details.</p>

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
