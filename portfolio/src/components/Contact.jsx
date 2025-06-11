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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

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
            alert("Please enter a valid phone number!");
            return;
        }

        alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="section contact">
            <h1>Contact <span className="highlight">Me</span></h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    className="form-input"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    className="form-input"
                    placeholder="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="form-input"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea><br></br>
                <button type="submit" className="button2">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;