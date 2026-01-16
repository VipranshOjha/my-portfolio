import React, { useState, useEffect } from 'react';
import { FileText, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: "Software Development Intern",
    company: "BISAG-N (Govt. of India)",
    period: "May 2025 - Jun 2025",
    description: "Developed and deployed 'Discover Places', a full-stack location recommendation system utilizing Flask and PostgreSQL to provide personalized travel suggestions.",
    techStack: ["Flask", "PostgreSQL", "Python", "Full-Stack"],
    links: [
      { label: "GitHub", url: "https://github.com/VipranshOjha/Discover-Places", icon: <Github size={18} /> },
      { label: "Certificate", url: "/Internship_certificate_BISAG-N.pdf", icon: <FileText size={18} /> }
    ],
    image: "/assets/imgs/Search Places.jpg"
  },
  {
    title: "Research Intern | SERB Project",
    company: "VIT Bhopal University",
    period: "May 2024 - Jun 2024",
    description: "Built 'MolSpectra', a molecular visualization tool integrating 5+ quantum chemistry packages (Gaussian, GAMESS) to visualize complex molecular structures.",
    techStack: ["React", "Quantum Chemistry", "Visualization"],
    links: [
      { label: "GitHub", url: "https://github.com/VipranshOjha/ChemStruct-Suite", icon: <Github size={18} /> },
      { label: "Certificate", url: "/Internship_certificate_SERB.pdf", icon: <FileText size={18} /> }
    ],
    image: "/assets/imgs/ChemStruct Suite.jpg"
  },
  {
    title: "Research Assistant",
    company: "VIT Bhopal University",
    period: "Nov '23 - Jan '24",
    description: "Developed advanced DSP algorithms in Python to analyze COVID-19 genomic sequences, contributing to the understanding of viral mutations.",
    techStack: ["Python", "DSP", "Bioinformatics", "Genomics"],
    links: [
      { label: "GitHub", url: "https://github.com/VipranshOjha/covid19-genomic-dsp", icon: <Github size={18} /> }
    ],
    image: "/assets/imgs/covid19-genomic-dsp.jpg"
  }
];

// --- DESKTOP ANIMATION VARIANTS ---
const contentVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, staggerDirection: 1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: (isRightAligned) => ({ opacity: 0, y: -50, x: isRightAligned ? 50 : -50 }),
  visible: { opacity: 1, y: 0, x: 0, transition: { type: "spring", stiffness: 100, damping: 12, mass: 0.8 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};

function Experience() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="experience" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '6rem' }}>
          <p className="section-subtitle" style={{ color: 'hsl(var(--primary))', fontWeight: 600, letterSpacing: '2px' }}>MY FORMAL WORK</p>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        {!isMobile && (
          <ul className="experience-list">
            {experiences.map((exp, index) => {
              const isRightAligned = index % 2 !== 0;
              return (
                <li key={index} className="experience-item">
                  <motion.div 
                    className="experience-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4, margin: "100px 0px 0px 0px" }} 
                    variants={contentVariants}
                    custom={isRightAligned}
                  >
                    <motion.h3 variants={itemVariants} custom={isRightAligned} className="experience-title">{exp.title}</motion.h3>
                    <motion.div variants={itemVariants} custom={isRightAligned} className="experience-company">
                      {exp.company} <span className="separator">|</span> {exp.period}
                    </motion.div>
                    <motion.div variants={itemVariants} custom={isRightAligned} className="experience-description">
                      <p>{exp.description}</p>
                    </motion.div>
                    <motion.ul variants={itemVariants} custom={isRightAligned} className="experience-tech-list">
                      {exp.techStack.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </motion.ul>
                    <motion.div variants={itemVariants} custom={isRightAligned} className="experience-links">
                      {exp.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                          {link.icon}
                        </a>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="experience-image"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4, margin: "100px 0px 0px 0px" }} 
                    variants={imageVariants}
                  >
                    <div className="img-wrapper">
                      <img src={exp.image} alt={exp.title} />
                      <div className="overlay"></div>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        )}

        {/* ================= MOBILE VIEW (Accordion) ================= */}
        {isMobile && (
          <div className="mobile-accordion-wrapper">
            {experiences.map((exp, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className={`accordion-card ${isOpen ? 'open' : ''}`}>
                  {/* Header (Always Visible) */}
                  <button 
                    className="accordion-header" 
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="header-info">
                      <h3 className="acc-title">{exp.title}</h3>
                      <div className="acc-meta">
                         <span className="acc-company">{exp.company}</span>
                         <span className="acc-period">{exp.period}</span>
                      </div>
                    </div>
                    <div className="acc-icon">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {/* Body (Collapsible) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="accordion-body"
                      >
                        <div className="body-content">
                           {/* Image inside accordion */}
                           <div className="acc-image-wrapper">
                             <img src={exp.image} alt={exp.title} />
                           </div>

                           <p className="acc-description">{exp.description}</p>
                           
                           <div className="acc-tech-list">
                              {exp.techStack.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                              ))}
                           </div>

                           <div className="acc-links">
                              {exp.links.map((link, i) => (
                                <a key={i} href={link.url} className="link-btn" target="_blank" rel="noopener noreferrer">
                                  {link.icon} <span>{link.label}</span>
                                </a>
                              ))}
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        /* ================= MOBILE ACCORDION STYLES ================= */
        .mobile-accordion-wrapper {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-bottom: 20px;
        }

        .accordion-card {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .dark .accordion-card {
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.08);
        }

        /* Active State Highlight */
        .accordion-card.open {
          border-color: #695aa6;
          box-shadow: 0 4px 20px rgba(105, 90, 166, 0.15);
        }

        /* Header */
        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        .header-info {
          flex: 1;
          padding-right: 15px;
        }

        .acc-title {
          font-size: 1rem;
          font-weight: 700;
          color: #695aa6;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .acc-meta {
          display: flex;
          flex-direction: column;
        }

        .acc-company {
          font-size: 0.85rem;
          font-weight: 600;
          color: hsl(var(--foreground));
        }

        .acc-period {
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground));
          margin-top: 2px;
        }

        .acc-icon {
          color: hsl(var(--muted-foreground));
          display: flex;
          align-items: center;
        }
        .accordion-card.open .acc-icon {
          color: #695aa6;
        }

        /* Body Content */
        .accordion-body {
          overflow: hidden;
        }

        .body-content {
          padding: 0 20px 20px 20px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .dark .body-content { border-top-color: rgba(255,255,255,0.05); }

        .acc-image-wrapper {
          width: 100%;
          height: 160px;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 20px;
          margin-bottom: 15px;
        }

        .acc-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .acc-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
          margin-bottom: 15px;
        }

        .acc-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tech-badge {
          font-size: 0.75rem;
          padding: 4px 10px;
          background: rgba(105, 90, 166, 0.1);
          color: #695aa6;
          border-radius: 12px;
          font-weight: 600;
        }
        .dark .tech-badge {
          background: rgba(105, 90, 166, 0.2);
          color: #c4b5fd;
        }

        .acc-links {
          display: flex;
          gap: 15px;
        }

        .link-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          text-decoration: none;
        }
        .link-btn:active { color: #695aa6; }

        /* ================= DESKTOP STYLES (UNCHANGED) ================= */
        .experience-list { list-style: none; padding: 0; margin: 0; max-width: 1000px; margin: 0 auto; }
        .experience-item { position: relative; display: grid; gap: 10px; grid-template-columns: repeat(12, 1fr); align-items: center; margin-bottom: 100px; }
        .experience-item:last-child { margin-bottom: 0; }
        .experience-image { grid-area: 1 / 6 / -1 / -1; position: relative; z-index: 1; height: 100%; border-radius: 1rem; box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7); }
        .experience-item:nth-of-type(2n) .experience-image { grid-column: 1 / 8; }
        .experience-image .img-wrapper { width: 100%; height: 100%; min-height: 300px; background-size: cover; background-position: center; border-radius: 1rem; position: relative; overflow: hidden; background-color: #ffffff; }
        .dark .experience-image .img-wrapper { background-color: #171f29; }
        .experience-image .img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease-out; }
        .experience-image:hover .img-wrapper img { transform: scale(1.1); }
        .experience-image .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: hsl(var(--primary) / 0.2); transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1); }
        .experience-image:hover .overlay { background-color: transparent; }
        .experience-content { position: relative; grid-area: 1 / 1 / -1 / 7; z-index: 10; }
        .experience-item:nth-of-type(2n) .experience-content { grid-column: 7 / -1; text-align: right; }
        .experience-title { color: #695aa6; font-size: clamp(22px, 5vw, 26px); font-weight: 700; margin: 0 0 5px; }
        .experience-company { color: hsl(var(--primary)); font-size: 16px; margin-bottom: 20px; font-family: monospace; font-weight: 500; }
        .experience-company .separator { margin: 0 8px; color: hsl(var(--muted-foreground)); }
        .experience-description { position: relative; z-index: 2; padding: 25px; border-radius: 1rem; font-size: 15px; line-height: 1.6; background-color: #ffffff !important; color: #334155; box-shadow: 0 12px 20px -3px rgb(0 0 0 / 0.15), 0 6px 10px -4px rgb(0 0 0 / 0.15); }
        .dark .experience-description { background-color: #171f29 !important; color: #94a3b8; box-shadow: 0 0 25px rgba(255, 255, 255, 0.07); }
        .experience-tech-list { display: flex; flex-wrap: wrap; position: relative; z-index: 2; margin: 25px 0 10px; padding: 0; list-style: none; gap: 15px; color: hsl(var(--muted-foreground)); font-family: monospace; font-size: 13px; }
        .experience-item:nth-of-type(2n) .experience-tech-list { justify-content: flex-end; }
        .experience-links { display: flex; align-items: center; position: relative; margin-top: 10px; margin-left: -10px; gap: 10px; }
        .experience-item:nth-of-type(2n) .experience-links { justify-content: flex-end; margin-left: 0; margin-right: -10px; }
        .experience-links a { padding: 10px; color: hsl(var(--foreground)); transition: all 0.2s ease; }
        .experience-links a:hover { color: hsl(var(--primary)); transform: translateY(-3px); }

        /* --- FORCE DARK MODE TEXT COLORS --- */
        .dark .acc-company,
        .dark .acc-title { 
          color: #f1f5f9; /* Almost white */
        }
        
        .dark .acc-period {
          color: #cbd5e1; /* Light grey */
        }

        .dark .acc-description {
          color: #e2e8f0; /* Readable light text */
        }

        .dark .link-btn {
          color: #f8fafc; /* White links */
        }
        
        .dark .acc-icon {
          color: #94a3b8; /* Lighter icon color */
        }

        /* Keep the title purple if you prefer, or make it white too */
        .dark .acc-title {
          color: #695aa6; /* Keep the purple accent for the main title */
        }
      `}</style>
    </section>
  );
}

export default Experience;