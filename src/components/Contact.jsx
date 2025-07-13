import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h1>

      <div className="contact-wrapper-row">
       
        <div className="contact-info-text">
          <h2>Let's talk!</h2>
          <p>
            I’d love to hear from you. Whether you have a question or just want to say hi, I’ll do my best to respond.
          </p>
          <ul>
            <li><strong>📧 Email:</strong> rashmijoshi3699@gmai.com</li>
            <li><strong>📍 Belongs to:</strong> Punjab, India</li>
          </ul>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
