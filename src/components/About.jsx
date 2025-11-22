import React from 'react';
import { motion } from 'framer-motion';

function About() {
  // Variants for the staggered text fade-in
  const contentVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1 // Disappear bottom-to-top when scrolling out
      } 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each text element
        delayChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.4 } }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Variant for the image "fading outwards" (expanding)
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, // Starts small to create the "outwards" effect
      transition: { duration: 0.5 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section className="section" id="about">
      <div className="container text-center">
        <div className="about">
          {/* Image Section with Animation */}
          <motion.div 
            className="about-img-holder"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // once: false makes it animate every time
            variants={imageVariants}
          >
            <img src="/assets/imgs/Me.jpg" className="about-img" alt="Vipransh Ojha" />
          </motion.div>

          {/* Text Caption Section with Staggered Animation */}
          <motion.div 
            className="about-caption"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // once: false makes it animate every time
            variants={contentVariants}
          >
            <motion.p variants={textItemVariants} className="section-subtitle">Who Am I ?</motion.p>
            <motion.h2 variants={textItemVariants} className="section-title mb-3">About Me</motion.h2>
            
            <motion.p variants={textItemVariants}>
              I'm a passionate AI/ML developer and researcher who thrives on solving complex problems through innovative technology. My approach combines rigorous engineering principles with creative thinking to build solutions that make a real impact across diverse domains.
            </motion.p>
            
            <motion.p variants={textItemVariants}>
              From developing high-accuracy machine learning systems to creating interactive applications, I enjoy exploring the intersection of cutting-edge technology and practical problem-solving. I'm always eager to tackle new challenges and learn emerging technologies that can drive meaningful innovation.
            </motion.p>
            
            <motion.div variants={textItemVariants}>
              <a href="/VipranshOjhaResume.pdf" className="btn-rounded btn btn-outline-primary mt-4" download>Download Resume</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section> 
  );
}

export default About;