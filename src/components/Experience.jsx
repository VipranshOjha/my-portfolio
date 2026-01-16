import React, { useState, useEffect } from 'react';
import { FileText, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';

const experiences = [
  {
    title: "Software Development Intern",
    company: "BISAG-N (Govt. of India)",
    period: "May 2025 - Jun 2025",
    description: "Developed and deployed 'Discover Places', a full-stack location recommendation system. The system utilizes Flask for the backend logic and PostgreSQL for robust data management, providing users with personalized travel suggestions based on their preferences.",
    techStack: ["Flask", "PostgreSQL", "Python", "Full-Stack"],
    links: [
      { label: "GitHub", url: "https://github.com/VipranshOjha/Discover-Places", icon: <Github size={20} /> },
      { label: "Certificate", url: "/Internship_certificate_BISAG-N.pdf", icon: <FileText size={20} /> }
    ],
    image: "/assets/imgs/Search Places.jpg"
  },
  {
    title: "Research Intern | SERB Project",
    company: "VIT Bhopal University",
    period: "May 2024 - Jun 2024",
    description: "Built 'MolSpectra', a comprehensive molecular visualization tool from scratch. This research-focused tool integrates over 5 quantum chemistry packages (including Gaussian and GAMESS), allowing researchers to visualize complex molecular structures and data seamlessly.",
    techStack: ["React", "Quantum Chemistry", "Visualization", "Gaussian"],
    links: [
      { label: "GitHub", url: "https://github.com/VipranshOjha/ChemStruct-Suite", icon: <Github size={20} /> },
      { label: "Certificate", url: "/Internship_certificate_SERB.pdf", icon: <FileText size={20} /> }
    ],
    image: "/assets/imgs/ChemStruct Suite.jpg"
  },
  {
    title: "Research Assistant",
    company: "VIT Bhopal University",
    period: "Nov '23 - Jan '24",
    description: "Engaged in bioinformatics research by developing advanced digital signal processing (DSP) algorithms in Python. These algorithms were specifically designed to analyze COVID-19 genomic sequences, contributing to the understanding of viral mutations.",
    techStack: ["Python", "DSP", "Bioinformatics", "Genomics"],
    links: [
      { label: "GitHub", url: "https://github.com/VipranshOjha/covid19-genomic-dsp", icon: <Github size={20} /> }
    ],
    image: "/assets/imgs/covid19-genomic-dsp.jpg"
  }
];

// Helper for Zoomable Image on Mobile
const MobileImageCard = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div 
      className={`mobile-card-image ${isZoomed ? 'zoomed' : ''}`}
      onClick={() => setIsZoomed(!isZoomed)}
    >
      <img src={src} alt={alt} />
      <div className="overlay"></div>
    </div>
  );
};

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="section" id="experience" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
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
                    viewport={{ once: false, amount: 0.4, margin: "1000px 0px 0px 0px" }} 
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
                    viewport={{ once: false, amount: 0.4, margin: "1000px 0px 0px 0px" }} 
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

        {/* ================= MOBILE VIEW (Yellow Box + Deck) ================= */}
        {isMobile && (
          <div className="mobile-experience-container">
            {experiences.map((exp, index) => (
              <div key={index} className="mobile-experience-block">
                
                {/* 1. HEADER (Purple Box) */}
                <div className="mobile-header">
                  <h3 className="mobile-title">{exp.title}</h3>
                  <div className="mobile-company">
                    {exp.company}
                    <span className="mobile-period-block">{exp.period}</span>
                  </div>
                </div>

                {/* 2. DECK CAROUSEL (2 Slides: Image & Info) */}
                <div className="mobile-deck-wrapper">
                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    loop={true}
                    modules={[EffectCards]}
                    className="deck-swiper"
                  >
                    {/* SLIDE 1: IMAGE */}
                    <SwiperSlide className="deck-card image-card-slide">
                      <MobileImageCard src={exp.image} alt={exp.title} />
                    </SwiperSlide>

                    {/* SLIDE 2: DESCRIPTION */}
                    <SwiperSlide className="deck-card info-card">
                      <div className="info-content">
                        <p className="mobile-desc">{exp.description}</p>
                        
                        <ul className="mobile-tech-list">
                          {exp.techStack.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>

                        <div className="mobile-links">
                          {exp.links.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.icon} {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <style>{`
        /* ================= MOBILE STYLES ================= */
        .mobile-experience-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding-bottom: 40px;
        }

        /* Header Box */
        .mobile-header {
          margin-bottom: 20px;
          text-align: left;
          padding: 15px 20px;
          background: #ffffff; /* Explicit White for Light Mode */
          border-left: 6px solid #695aa6; /* Purple Accent */
          border-radius: 0 1rem 1rem 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        
        .dark .mobile-header {
           background: #171f29;
           box-shadow: 0 4px 15px rgba(255,255,255,0.05);
        }

        .mobile-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #695aa6;
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .mobile-company {
          font-size: 0.95rem;
          color: hsl(var(--foreground));
          font-weight: 600;
        }

        .mobile-period-block {
          display: block;
          font-size: 0.8rem;
          color: hsl(var(--muted-foreground));
          margin-top: 4px;
          font-weight: 400;
        }

        /* Deck Carousel Wrapper */
        .mobile-deck-wrapper {
          width: 300px; 
          height: 400px;
          margin: 0 auto;
          overflow: visible;
        }

        .deck-swiper {
          width: 100%;
          height: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: visible;
          touch-action: pan-y;   
        }

        .deck-card {
          border-radius: 1.5rem;
          overflow: hidden;
          background-color: #ffffff;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .dark .deck-card {
          background-color: #171f29;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* Slide 1: Zoomable Image */
        .image-card-slide {
          background-color: #000;
        }

        .mobile-card-image {
          width: 100%;
          height: 100%;
          position: relative;
          cursor: zoom-in;
        }

        .mobile-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-out; 
        }

        .mobile-card-image.zoomed img {
          transform: scale(1.1); 
          cursor: zoom-out;
        }

        .mobile-card-image .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
          pointer-events: none;
        }

        /* Slide 2: Info */
        .info-content {
          padding: 30px 25px;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .mobile-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
          margin-bottom: 20px;
        }

        .mobile-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0;
          list-style: none;
          margin-top: auto; 
          margin-bottom: 25px;
        }

        .mobile-tech-list li {
          font-size: 0.75rem;
          padding: 5px 10px;
          background: rgba(105, 90, 166, 0.1);
          color: #695aa6;
          border-radius: 12px;
          font-weight: 600;
        }
        
        .dark .mobile-tech-list li {
           background: rgba(105, 90, 166, 0.25);
           color: #bfaee3;
        }

        .mobile-links {
          display: flex;
          gap: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(0,0,0,0.1);
        }
        
        .dark .mobile-links {
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .mobile-links a {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        
        .mobile-links a:hover {
          color: #695aa6;
        }

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
      `}</style>
    </section>
  );
}

export default Experience;