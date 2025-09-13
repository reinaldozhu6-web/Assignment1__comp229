const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom website development with modern frameworks like React, Vue, and Angular. Responsive design that works on all devices.",
            icon: "💻",
            features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility"]
        },
        {
            title: "UI/UX Design",
            description: "User-centered design approach creating intuitive interfaces that enhance user experience and engagement.",
            icon: "🎨",
            features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
        },
        {
            title: "Mobile App Development",
            description: "Cross-platform mobile application development using React Native and Flutter for iOS and Android.",
            icon: "📱",
            features: ["iOS & Android Development", "API Integration", "App Store Deployment"]
        },
        {
            title: "E-Commerce Solutions",
            description: "Complete e-commerce solutions with shopping cart, payment integration, and inventory management.",
            icon: "🛒",
            features: ["Payment Gateway Integration", "Product Management", "Order Processing"]
        }
    ];

    return (
        <div className="page-container fade-in">
            <div className="container">
                <h1 className="page-title">Services</h1>
                <p className="page-subtitle">What I can help you with</p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;