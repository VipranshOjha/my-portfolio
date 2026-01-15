import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setFormStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
    }, (error) => {
        console.log('FAILED...', error.text);
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 3000);
    });
  };

  const getButtonText = () => {
    if (formStatus === 'sending') return 'Sending...';
    if (formStatus === 'sent') return 'Message Sent!';
    if (formStatus === 'error') return 'Failed! Try Again.';
    return 'Send Message';
  };

  return (
    <section 
      className="section" 
      id="contact" 
      style={{ paddingTop: '20px' }}
    >
      <div className="container"> 
        <div className="text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
        </div>
        
        <div className="row">
          
          {/* Column 1: Contact Information */}
          <div className="col-md-6 contact-info-left">
            <h3 className="section-title" style={{marginBottom: '1rem'}}>Get in Touch</h3>
            <p className="contact-intro-text" style={{marginBottom: '2rem', opacity: 0.8}}>
              I'm open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me via email or connect with me on my professional networks.
            </p>

            <div className="contact-info-item">
              <Mail size={24} className="contact-icon" />
              <div>
                <strong>Email</strong>
                <p><a href="mailto:vipranshojha@gmail.com">ojhavipransh@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <Linkedin size={24} className="contact-icon" />
              <div>
                <strong>LinkedIn</strong>
                <p><a href="https://linkedin.com/in/vipransh-ojha" target="_blank" rel="noopener noreferrer">linkedin.com/in/vipransh-ojha</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <Github size={24} className="contact-icon" />
              <div>
                <strong>GitHub</strong>
                <p><a href="https://github.com/VipranshOjha" target="_blank" rel="noopener noreferrer">github.com/VipranshOjha</a></p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="col-md-6">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                
                <div className="form-group col-sm-12">
                  <label htmlFor="name" className="contact-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="form-group col-sm-12">
                  <label htmlFor="email" className="contact-label">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>

                <div className="form-group col-sm-12">
                  <label htmlFor="comment" className="contact-label">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="comment" 
                    rows="6" 
                    className="form-control" 
                    placeholder="Write Something..."
                    required
                  ></textarea>
                </div>
                <div className="form-group col-sm-12 mt-3">
                  <input 
                    type="submit" 
                    value={getButtonText()} 
                    className={`btn btn-outline-primary rounded ${formStatus === 'sent' ? 'btn-success' : formStatus === 'error' ? 'btn-danger' : ''}`}
                    disabled={formStatus === 'sending'}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
