import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { Github, PlayCircle } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Project data
const projects = [
  {
    title: "Dikastirio - The Agent-Driven VR Courtroom",
    category: "VR/AR, AI Agents, LegalTech",
    techStack: "Inya.ai, Unity, Google Gemma-3-27b, Gnani.ai",
    description:
      "Agent-driven VR courtroom using AI and Unity to restore decorum in e-courts, featuring 'Themis' for automated procedural management and transcription.",
    githubUrl: "https://github.com/VipranshOjha/Dikastirio",
    image: "/assets/imgs/dikastirio.jpg",
  },
  {
    title: "Automated Dental Forensic Identification",
    category: "AI & Deep Learning, Forensic Science",
    techStack: "Python, PyTorch, EfficientNet-B0, Siamese Networks, DENTEX Dataset",
    description:
      "Forensic system using Siamese Neural Networks and EfficientNet-B0 trained on the DENTEX dataset to automate dental radiograph comparison and identification.",
    githubUrl: "https://github.com/VipranshOjha/Automated-Dental-Forensic-Identification",
    image: "/assets/imgs/automated_dental_forensic_identification.jpg",
  },
  {
    title: "SpeechSync - Real-Time Communication",
    category: "AI Real-Time Systems, NLP, Speech Processing",
    techStack: "Python, Flask, OpenAI Whisper, MarianMT, gTTS",
    description:
      "Real-time speech-to-speech translation pipeline utilizing OpenAI Whisper for ASR, MarianMT for neural translation, and gTTS for synthesis within a Flask backend.",
    githubUrl: "https://github.com/DSinghania13/SpeechSync",
    image: "/assets/imgs/speechsync.jpg",
    liveUrl: "https://speech-sync.vercel.app/",
  },
  {
    title: "FinRisk - Credit Risk Prediction",
    category: "Machine Learning, Financial Tech",
    techStack: "Python, Flask, Scikit-learn, Random Forest, Power BI",
    description:
      "A credit risk assessment platform using Random Forest classifiers to predict loan defaults with high accuracy, featuring real-time risk analysis and Power BI dashboards.",
    githubUrl: "https://github.com/DSinghania13/FinRisk",
    image: "/assets/imgs/finrisk.jpg",
    liveUrl: "https://finrisk-ai.vercel.app/",
  },
  {
    title: "AI Game Playing Agents",
    category: "AI & NeuroEvolution, Game Development",
    techStack: "Python, Pygame, NEAT-Python, NumPy",
    description:
      "A collection of AI agents mastering classic games using NeuroEvolution ((NEAT) , Q-Learning, DQN and heuristic algorithms, visualized in real-time with Pygame.",    
    githubUrl: "https://github.com/VipranshOjha/AI-Plays-Games",
    image: "/assets/imgs/ai_plays_games.jpg",
  },
  {
    title: "Computer Vision Project Collection",
    category: "Computer Vision, HCI, Accessibility",
    techStack: "Python, OpenCV, MediaPipe, Dlib, PyAutoGUI",
    description:
      "A repository of real-time HCI systems featuring real-time object detection, facial recognition, and gesture and gaze-control built with OpenCV, MediaPipe, and Dlib.",  
    githubUrl: "https://github.com/VipranshOjha/Computer-Vision-Projects",
    image: "/assets/imgs/computer_vision_projects.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '6rem' }}>
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--primary))' }}>
            What I Did?
          </p>
          <h2 className="section-title mb-6">Projects</h2>
        </div>
        
        <div className="relative px-4 portfolio-wrapper">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // Defaults (Mobile)
            slidesPerView={1.01}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            // Breakpoints
            breakpoints={{
              // Desktop Override
              768: {
                slidesPerView: "auto", 
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }
              }
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="project-slide-item"
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col" style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}>
                  <div className="relative h-3/4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" style={{'--tw-gradient-from': 'hsl(var(--card))', '--tw-gradient-to': 'hsl(var(--card) / 0)', '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'}}></div>
                  </div>
                  <div className="p-6 flex flex-col h-3/4">
                    <h3 className="text-xl font-bold leading-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'hsl(var(--primary))' }}>
                      {project.category}
                    </p>
                    <p className="text-xs font-medium mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      <strong>Tech:</strong> {project.techStack}
                    </p>
                    <p className="text-sm leading-relaxed line-clamp-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {project.description}
                    </p>
                    
                    <div className="project-links mt-auto pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        aria-label="View on GitHub"
                      >
                        <Github size={16} /> GitHub
                      </a>
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          aria-label="View Live Demo"
                        >
                          <PlayCircle size={16} /> Live Demo
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`
        /* --- GLOBAL STYLES --- */
        #portfolio {
          overflow: hidden; /* Prevent full-page horizontal scroll */
        }

        .projects-swiper {
          padding-top: 0px !important;
          padding-bottom: 20px !important;
          /* Allow overflowing cards to be seen within the section on mobile, clipped on desktop */
          overflow: visible !important; 
        }
        
        /* Slide Sizing */
        .project-slide-item {
          width: 350px;
          max-width: 85vw; /* Responsive width for mobile */
          height: 650px;
        }

        /* --- SWIPER ARROWS (Common) --- */
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
          z-index: 50;
        }
        .projects-swiper .swiper-button-next::after,
        .projects-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        /* --- DESKTOP VIEW (> 768px) --- */
        @media (min-width: 769px) {
          .projects-swiper {
             overflow: hidden !important; /* Hide extra cards on desktop */
          }
          
          /* Desktop Arrows: Frosted Glass */
          .projects-swiper .swiper-button-next,
          .projects-swiper .swiper-button-prev {
             background: hsl(var(--background) / 0.9);
             backdrop-filter: blur(10px);
          }
          
          .projects-swiper .swiper-button-next:hover,
          .projects-swiper .swiper-button-prev:hover {
            background: hsl(var(--primary));
            color: hsl(var(--primary-foreground));
            transform: scale(1.1);
          }

          /* LOGIC: Show Only Middle 3 Cards */
          .projects-swiper .swiper-slide {
             opacity: 0 !important;
             visibility: hidden !important;
             transition: opacity 0.3s ease, visibility 0.3s ease;
             pointer-events: none;
          }
          
          /* Visible: Active (Center) + Prev (Left) + Next (Right) */
          .projects-swiper .swiper-slide-active,
          .projects-swiper .swiper-slide-prev,
          .projects-swiper .swiper-slide-next {
             opacity: 1 !important;
             visibility: visible !important;
             pointer-events: auto;
          }
        }

        /* --- MOBILE VIEW (<= 768px) --- */
        @media (max-width: 768px) {
           /* Mobile Arrows: Transparent */
           .projects-swiper .swiper-button-next,
           .projects-swiper .swiper-button-prev {
             display: none !important;
           }
        }

        /* --- Standard Card Styling (Colors, Shadows) --- */
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .h-full { height: 100%; }
        .w-full { width: 100%; }
        .object-cover { object-fit: cover; }
        .overflow-hidden { overflow: hidden; }
        .rounded-2xl { border-radius: 1rem; }
        .shadow-xl { box-shadow: 0 12px 20px -3px rgb(0 0 0 / 0.15), 0 6px 10px -4px rgb(0 0 0 / 0.15); }
        .hover\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.3); }
        .dark .shadow-xl {box-shadow: 0 0 25px rgba(255, 255, 255, 0.07);}
        .dark .hover\:shadow-2xl:hover {box-shadow: 0 0 40px rgba(255, 255, 255, 0.12);}
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-300 { transition-duration: 300ms; }
        .duration-500 { transition-duration: 500ms; }
        .group:hover .group-hover\:scale-110 { transform: scale(1.1); }
        .p-6 { padding: 1.5rem; }
        .mt-4 { margin-top: 1rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .ml-2 { margin-left: 0.5rem; }
        .flex { display: flex; }
        .items-start { align-items: flex-start; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .font-bold { font-weight: 700; }
        .leading-tight { line-height: 1.25; }
        .flex-1 { flex: 1 1 0%; }
        .rounded-full { border-radius: 9999px; }
        .p-2 { padding: 0.5rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .font-semibold { font-weight: 600; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .font-medium { font-weight: 500; }
        .leading-relaxed { line-height: 1.625; }
        .line-clamp-4 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
        }
        .bg-gradient-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops)); }
        .from-card { --tw-gradient-from: hsl(var(--card)) var(--tw-gradient-from-position); --tw-gradient-to: hsl(var(--card) / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .via-card\/60 { --tw-gradient-to: hsl(var(--card) / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--card) / 0.6) var(--tw-gradient-via-position), var(--tw-gradient-to); }
        .to-transparent { --tw-gradient-to: transparent var(--tw-gradient-to-position); }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 9999px; 
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          background-color: hsl(var(--primary) / 0.1);
          color: hsl(var(--primary));
          transition: all 0.3s ease;
        }
        .project-link-btn:hover {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          transform: translateY(-2px);
        }
        
        .projects-swiper .swiper-pagination-bullet {
          background: hsl(var(--primary));
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        .projects-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
        .projects-swiper .swiper-slide-active {
          z-index: 2;
        }
        .projects-swiper .swiper-slide:hover .group {
          z-index: 10;
        }
        .flex-col { flex-direction: column; }
        .flex-grow { flex-grow: 1; }
        .mt-auto { margin-top: auto; }
        .pt-4 { padding-top: 1rem; }
        .h-1\/2 { height: 75%; }  
      `}</style>
    </section>
  );
};

export default Portfolio;
