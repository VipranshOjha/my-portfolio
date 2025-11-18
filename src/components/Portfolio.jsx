import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { ExternalLink, PlayCircle } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Project data
const projects = [
  {
    title: "Dikastirio - Code Judge",
    category: "Full-Stack (MERN)",
    techStack: "MongoDB, Express.js, React, Node.js, REST APIs, Docker, Judge0 API",
    description:
      "Developed a robust online judge platform featuring real-time code execution and evaluation against custom test cases. Supports multiple programming languages, offers secure user authentication, and includes a comprehensive problem statement and submission management system, simulating a competitive programming environment.",
    githubUrl: "https://github.com/VipranshOjha/Dikastirio",
  image: `${import.meta.env.BASE_URL}imgs/dikastirio.jpg`,
  },
  {
    title: "Automated Dental Forensic Identification",
    category: "AI & Deep Learning, Medical Imaging",
    techStack: "Python, TensorFlow, Keras, OpenCV, DENTEX Dataset",
    description:
      "Designed and implemented an AI-powered system for automated dental identification, crucial in forensic science. Utilizes Convolutional Neural Networks (CNNs) trained on the DENTEX dataset to analyze dental X-rays, providing high-accuracy matches for identity verification and enhancing forensic investigations.",
    githubUrl: "https://github.com/VipranshOjha/Automated-Dental-Forensic-Identification",
  image: `${import.meta.env.BASE_URL}imgs/automated_dental_forensic_identification.jpg`,
  },
  {
    title: "SpeechSync - Real-Time Communication",
    category: "AI Real-Time Systems, NLP, Speech Processing",
    techStack: "Python, Flask, WebRTC, Google Speech-to-Text API, Translation APIs",
    description:
      "Developed a real-time, multi-language speech-to-text and translation communication system. Integrates advanced noise filtering and natural language processing to provide seamless, instant transcription and translation, enhancing accessibility and cross-linguistic interaction for various applications.",
    githubUrl: "https://github.com/DSinghania13/SpeechSync",
  image: `${import.meta.env.BASE_URL}imgs/speechsync.jpg`,
    liveUrl: "https://speech-sync.vercel.app/",
  },
  {
    title: "FinRisk - Loan Default Prediction API",
    category: "Machine Learning API, Financial Modeling",
    techStack: "Python, Flask, scikit-learn, Pandas, Docker, Hugging Face Spaces",
    description:
      "Built and deployed a robust Flask-based Machine Learning API for predicting loan default risk. The API leverages a pre-trained scikit-learn model to provide real-time probability scores, integrated with Docker for scalable deployment, and publicly accessible on Hugging Face Spaces for demonstration.",
    githubUrl: "https://github.com/VipranshOjha/FinRisk",
  image: `${import.meta.env.BASE_URL}imgs/finrisk.jpg`,
    liveUrl: "https://finrisk-ai.vercel.app/",
  },
  {
    title: "AI Game Playing Agents",
    category: "AI Reinforcement Learning, Evolutionary Algorithms",
    techStack: "Python, Pygame, NEAT, Gym, TensorFlow",
    description:
      "A collection of AI agents developed to play various classic games, demonstrating different reinforcement learning and evolutionary algorithms. Includes implementations for Flappy Bird (NEAT), Dino Runner (Q-Learning), and Snake (Deep Q-Networks), showcasing AI's ability to learn complex strategies autonomously.",
    githubUrl: "https://github.com/VipranshOjha/AI-Plays-Games",
  image: `${import.meta.env.BASE_URL}imgs/ai_plays_games.jpg`,
  },
  {
    title: "Computer Vision Project Collection",
    category: "Computer Vision, Image Processing",
    techStack: "Python, OpenCV, MediaPipe, Dlib, TensorFlow, PyTorch",
    description:
      "A comprehensive repository of diverse computer vision applications, ranging from real-time object detection and facial recognition to advanced image manipulation and gesture control. Showcases practical implementations of modern CV techniques and deep learning models for various interactive and analytical purposes.",
    githubUrl: "https://github.com/VipranshOjha/Computer-Vision-Projects",
  image: `${import.meta.env.BASE_URL}imgs/computer_vision_projects.jpg`,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--primary))' }}>
            What I Did?
          </p>
          <h2 className="section-title mb-6">Projects</h2>
        </div>
        <div className="relative px-4">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="projects-swiper"
            style={{
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: "400px",
                  maxWidth: "90vw",
                  height: "650px",
                }}
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
                    
                    {/* --- LINKS DIV --- */}
                    <div className="project-links mt-auto pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        aria-label="View on GitHub"
                      >
                        <ExternalLink size={16} /> GitHub
                      </a>
                      
                      {/* --- CONDITIONAL LIVE DEMO LINK --- */}
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
                      {/* --- END OF CONDITIONAL LINK --- */}
                    </div>
                    {/* --- END OF LINKS DIV --- */}

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`
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
          border-radius: 9999px; /* pill shape */
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
        
        /* Swiper custom styles */
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          width: 40px;
          height: 40px;
          background: hsl(var(--background) / 0.9);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .projects-swiper .swiper-button-next:hover,
        .projects-swiper .swiper-button-prev:hover {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          transform: scale(1.1);
        }
        .projects-swiper .swiper-button-next::after,
        .projects-swiper .swiper-button-prev::after {
          font-size: 20px;
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
        .flex-col { 
          flex-direction: column;
        }
        .flex-grow { flex-grow: 1; 
        }
        .mt-auto { 
          margin-top: auto; 
        }
        .pt-4 { 
          padding-top: 1rem; 
        }
        .h-1\/2 { 
          height: 75%; 
        }  
      `}</style>
    </section>
  );
};

export default Portfolio;