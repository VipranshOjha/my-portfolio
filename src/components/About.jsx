import React from 'react';

function About() {
  return (
    <section className="section" id="about">
      <div className="container text-center">
        {/* about wrapper */}
        <div className="about">
          <div className="about-img-holder">
            <img src="/assets/imgs/Me.jpg" className="about-img" alt="Vipransh Ojha" />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p>
              I'm a passionate AI/ML developer and researcher who thrives on solving complex problems through innovative technology. My approach combines rigorous engineering principles with creative thinking to build solutions that make a real impact across diverse domains.
            </p>
            <p>
              From developing high-accuracy machine learning systems to creating interactive applications, I enjoy exploring the intersection of cutting-edge technology and practical problem-solving. I'm always eager to tackle new challenges and learn emerging technologies that can drive meaningful innovation.
            </p>
            <a href="/VipranshOjhaResume.pdf" className="btn-rounded btn btn-outline-primary mt-4" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default About;