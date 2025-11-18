import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container text-center">
        <p className="section-subtitle">My Formal Work</p>
        <h6 className="section-title mb-6">Experience</h6>
        <div className="row">

          {/* Card 1: SDE Intern */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="body">
                <img src={`${import.meta.env.BASE_URL}imgs/analytics.svg`} alt="Software Development Intern" className="icon" />
                <h6 className="title">Software Development Intern | Govt. of India</h6>
                <p className="subtitle"><strong>BISAG-N (Govt. of India) | May 2025 - Jun 2025</strong><br />Developed and deployed 'Discover Places', a full-stack location recommendation system using Flask and PostgreSQL.</p>
                
                <div className="project-links card-links">
                  <a href="https://github.com/VipranshOjha/Discover-Places" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> GitHub
                  </a>
                  <a href="/Internship_certificate_BISAG-N.pdf" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                    <FileText size={16} /> Certificate
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Card 2: Research Intern */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="body">
                <img src={`${import.meta.env.BASE_URL}imgs/toolbox.svg`} alt="Research Intern" className="icon" />
                <h6 className="title">Research Intern | SERB Sponsored Project</h6>
                <p className="subtitle"><strong>VIT Bhopal University | May 2024 - Jun 2024</strong><br />Built 'MolSpectra', a molecular visualization tool from scratch, integrating 5+ quantum chemistry packages like Gaussian and GAMESS.</p>
                
                <div className="project-links card-links">
                  <a href="https://github.com/VipranshOjha/ChemStruct-Suite" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> GitHub
                  </a>
                  <a href="/Internship_certificate_SERB.pdf" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                    <FileText size={16} /> Certificate
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Card 3: Research Assistant */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="body">
                <img src={`${import.meta.env.BASE_URL}assets/imgs/responsive.svg`} alt="Research Assistant" className="icon" />
                <h6 className="title">Research Assistant</h6>
                <p className="subtitle"><strong>VIT Bhopal University | Nov '23 - Jan '24</strong><br />Developed digital signal processing algorithms in Python to analyze COVID-19 genomic sequences under faculty supervision.</p>
                
                <div className="project-links card-links">
                  <a href="https://github.com/VipranshOjha/covid19-genomic-dsp" className="project-link-btn" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> GitHub
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;