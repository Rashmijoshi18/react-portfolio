const Services = () => {
    const services = [
        {
            title: "Frontend Development",
            description: "I specialize in HTML, CSS, JavaScript, React, Bootstrap, Tailwind css to create responsive, modern websites."
        },
        {
            title: "Graphic Design",
            description: "Designing intuitive logos and brochures using Figma and Canva."
        },
        {
            title: "Personalized Website Creation",
            description: "Build personal blogs or event-based websites tailored to individual needs."
        },
        {
            title: "Certifications",
            description: "",
            list: [
                "Python Programming – HackerRank",
                "C Programming– Great learning",
                "Frontend Development – HackerRank",
                "Hack-a-Throne 1.0 – GeeksforGeeks"
            ]
        },
        {
            title: "UI/UX Audit",
            description: "Analyze and improve the usability, design flow, and overall experience of your website or web app."
        }
    ];

    return (
        <section id="services" className="section services">
            <h1>My <span className="highlight">Services</span></h1>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        {service.list && (
                            <ul className="certification-list">
                                {service.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;