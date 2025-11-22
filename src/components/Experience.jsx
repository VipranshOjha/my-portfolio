import React from 'react';
import { FileText, Github } from 'lucide-react';
import { motion } from 'framer-motion';

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

// --- ANIMATION VARIANTS ---

const contentVariants = {
  hidden: { 
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: (isRightAligned) => ({
    opacity: 0,
    y: -50, 
    x: isRightAligned ? 50 : -50, 
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 0.8
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

function Experience() {
  return (
    <section className="section" id="experience" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="section-subtitle" style={{ color: 'hsl(var(--primary))', fontWeight: 600, letterSpacing: '2px' }}>MY FORMAL WORK</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <ul className="experience-list">
          {experiences.map((exp, index) => {
            const isRightAligned = index % 2 !== 0;

            return (
              <li key={index} className="experience-item">
                
                {/* Left Column: Text Content */}
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

                {/* Right Column: Image */}
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
      </div>

      <style>{`
        .experience-list {
          list-style: none;
          padding: 0;
          margin: 0;
          max-width: 1000px;
          margin: 0 auto;
        }

        .experience-item {
          position: relative;
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          margin-bottom: 100px;
        }

        .experience-item:last-child {
          margin-bottom: 0;
        }

        /* --- Image Side --- */
        .experience-image {
          grid-area: 1 / 6 / -1 / -1;
          position: relative;
          z-index: 1;
          height: 100%;
          border-radius: 1rem;
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
        }

        .experience-item:nth-of-type(2n) .experience-image {
          grid-column: 1 / 8;
        }

        .experience-image .img-wrapper {
          width: 100%;
          height: 100%;
          min-height: 300px; 
          background-size: cover;
          background-position: center;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
          background-color: #ffffff; /* Force solid background */
        }
        
        .dark .experience-image .img-wrapper {
          background-color: #171f29; /* Force solid dark background */
        }
        
        .experience-image .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-out;
        }

        .experience-image:hover .img-wrapper img {
          transform: scale(1.1);
        }

        .experience-image .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: hsl(var(--primary) / 0.2);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .experience-image:hover .overlay {
          background-color: transparent;
        }

        /* --- Content Side --- */
        .experience-content {
          position: relative;
          grid-area: 1 / 1 / -1 / 7;
          z-index: 10; /* Increased z-index to stay on top */
        }

        .experience-item:nth-of-type(2n) .experience-content {
          grid-column: 7 / -1;
          text-align: right;
        }

        .experience-title {
          color: #695aa6;
          font-size: clamp(22px, 5vw, 26px);
          font-weight: 700;
          margin: 0 0 5px;
        }

        .experience-company {
          color: hsl(var(--primary));
          font-size: 16px;
          margin-bottom: 20px;
          font-family: monospace; 
          font-weight: 500;
        }
        
        .experience-company .separator {
            margin: 0 8px;
            color: hsl(var(--muted-foreground));
        }

        /* --- Description Box Updates --- */
        .experience-description {
          position: relative;
          z-index: 2;
          padding: 25px;
          border-radius: 1rem;
          font-size: 15px;
          line-height: 1.6;
          
          /* LIGHT MODE: Solid White with Shadow */
          background-color: #ffffff !important; 
          color: #334155; /* Slate-700 for good readability */
          box-shadow: 0 12px 20px -3px rgb(0 0 0 / 0.15), 0 6px 10px -4px rgb(0 0 0 / 0.15);
        }
        
        /* DARK MODE: Solid Dark with Glow */
        .dark .experience-description {
           background-color: #171f29 !important; /* Solid Dark Grey/Blue */
           color: #94a3b8; /* Slate-400 text */
           box-shadow: 0 0 25px rgba(255, 255, 255, 0.07); /* Glow effect */
        }

        .experience-tech-list {
          display: flex;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
          margin: 25px 0 10px;
          padding: 0;
          list-style: none;
          gap: 15px; 
          color: hsl(var(--muted-foreground));
          font-family: monospace;
          font-size: 13px;
        }

        .experience-item:nth-of-type(2n) .experience-tech-list {
          justify-content: flex-end;
        }

        .experience-links {
          display: flex;
          align-items: center;
          position: relative;
          margin-top: 10px;
          margin-left: -10px;
          gap: 10px;
        }

        .experience-item:nth-of-type(2n) .experience-links {
          justify-content: flex-end;
          margin-left: 0;
          margin-right: -10px;
        }

        .experience-links a {
          padding: 10px;
          color: hsl(var(--foreground));
          transition: all 0.2s ease;
        }

        .experience-links a:hover {
          color: hsl(var(--primary));
          transform: translateY(-3px);
        }

        /* --- Mobile Responsiveness --- */
        @media (max-width: 768px) {
          .experience-item {
            display: block;
            margin-bottom: 70px;
          }

          .experience-image {
            display: none; 
          }

          .experience-content,
          .experience-item:nth-of-type(2n) .experience-content {
            grid-column: 1 / -1;
            padding: 20px 0;
            text-align: left;
            z-index: 5;
          }

          .experience-description {
            /* Ensure solid background on mobile too */
            background-color: #ffffff !important;
            padding: 20px;
            margin-top: 15px;
          }
          
          .dark .experience-description {
            background-color: #171f29 !important;
          }

          .experience-title {
            color: #695aa6;
          }

          .experience-tech-list,
          .experience-item:nth-of-type(2n) .experience-tech-list {
            justify-content: flex-start;
          }
          
          .experience-links,
          .experience-item:nth-of-type(2n) .experience-links {
            justify-content: flex-start;
            margin-left: -10px;
            margin-right: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Experience;