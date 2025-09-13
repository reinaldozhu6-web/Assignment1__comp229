import React, { useState } from 'react';

const Services = () => {
    // State to manage which service is selected for detailed view
    const [selectedService, setSelectedService] = useState(null);

    // Services data
    const services = [
        {
            id: 1,
            title: "Web Development",
            icon: "🌐",
            shortDescription: "Custom web applications using modern frameworks and technologies",
            fullDescription: "I create responsive, fast, and user-friendly web applications using the latest technologies including React, Vue.js, and vanilla JavaScript. From simple landing pages to complex web applications, I ensure optimal performance and excellent user experience.",
            features: [
                "Responsive Design for All Devices",
                "Modern Framework Implementation (React, Vue.js)",
                "Performance Optimization",
                "Cross-browser Compatibility",
                "SEO-friendly Development"
            ],
            pricing: "Starting from $500",
            deliveryTime: "2-4 weeks",
            image: "https://via.placeholder.com/300x200/4f46e5/ffffff?text=Web+Dev"
        },
        {
            id: 2,
            title: "Mobile App Development",
            icon: "📱",
            shortDescription: "Cross-platform mobile applications with native performance",
            fullDescription: "I develop cross-platform mobile applications using React Native and modern mobile development practices. Whether it's iOS, Android, or both, I create apps that provide excellent user experiences and optimal performance.",
            features: [
                "Cross-platform Development (iOS & Android)",
                "React Native Implementation",
                "Native Performance Optimization",
                "App Store Deployment Support",
                "Push Notifications Integration"
            ],
            pricing: "Starting from $1,200",
            deliveryTime: "4-8 weeks",
            image: "https://via.placeholder.com/300x200/059669/ffffff?text=Mobile+App"
        },
        {
            id: 3,
            title: "UI/UX Design",
            icon: "🎨",
            shortDescription: "User-centered design solutions that enhance engagement",
            fullDescription: "I create intuitive and visually appealing user interfaces that prioritize user experience. My gaming background gives me unique insights into user engagement and interaction design principles.",
            features: [
                "User Research and Analysis",
                "Wireframing and Prototyping",
                "Visual Design and Branding",
                "Usability Testing",
                "Design System Creation"
            ],
            pricing: "Starting from $400",
            deliveryTime: "1-3 weeks",
            image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=UI%2FUX"
        },
        {
            id: 4,
            title: "Backend Development",
            icon: "⚙️",
            shortDescription: "Robust server-side solutions and API development",
            fullDescription: "I build scalable backend systems, RESTful APIs, and database solutions that power modern web applications. My focus is on creating secure, efficient, and maintainable server-side architectures.",
            features: [
                "RESTful API Development",
                "Database Design and Optimization",
                "Server Setup and Configuration",
                "Authentication and Security",
                "Cloud Deployment and Scaling"
            ],
            pricing: "Starting from $600",
            deliveryTime: "2-5 weeks",
            image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Backend"
        },
        {
            id: 5,
            title: "Game Development",
            icon: "🎮",
            shortDescription: "Interactive games and gamification features",
            fullDescription: "Leveraging my passion for gaming, I create engaging web-based games and implement gamification features for applications. From simple browser games to complex interactive experiences.",
            features: [
                "Web-based Game Development",
                "Game Logic and Mechanics",
                "Interactive User Interfaces",
                "Gamification Implementation",
                "Performance Optimization for Games"
            ],
            pricing: "Starting from $800",
            deliveryTime: "3-6 weeks",
            image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Gaming"
        },
        {
            id: 6,
            title: "Technical Consulting",
            icon: "💡",
            shortDescription: "Strategic technology advice and project planning",
            fullDescription: "I provide expert consultation on technology choices, project architecture, and development strategies. Whether you're starting a new project or improving an existing one, I can guide you toward the best solutions.",
            features: [
                "Technology Stack Recommendations",
                "Project Architecture Planning",
                "Code Review and Optimization",
                "Performance Audits",
                "Development Process Improvement"
            ],
            pricing: "Starting from $100/hour",
            deliveryTime: "Flexible",
            image: "https://via.placeholder.com/300x200/06b6d4/ffffff?text=Consulting"
        }
    ];

    const handleServiceClick = (serviceId) => {
        setSelectedService(selectedService === serviceId ? null : serviceId);
    };

    return (
        <div className="page services-page">
            <div className="services-container">
                {/* Page Header */}
                <div className="services-header">
                    <h1>My Services</h1>
                    <p className="services-intro">
                        I offer a comprehensive range of technical services to help bring your digital vision to life.
                        Each service is tailored to meet your specific needs and delivered with attention to detail
                        and quality.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`service-card ${selectedService === service.id ? 'expanded' : ''}`}
                        >
                            {/* Service Header */}
                            <div className="service-header">
                                <div className="service-icon-container">
                                    <div className="service-icon">{service.icon}</div>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-short-desc">{service.shortDescription}</p>
                            </div>

                            {/* Service Image */}
                            <div className="service-image-container">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-image"
                                />
                            </div>

                            {/* Service Preview Info */}
                            <div className="service-preview">
                                <div className="service-pricing">
                                    <span className="price-label">Starting at:</span>
                                    <span className="price">{service.pricing}</span>
                                </div>
                                <div className="service-delivery">
                                    <span className="delivery-label">Delivery:</span>
                                    <span className="delivery-time">{service.deliveryTime}</span>
                                </div>
                            </div>

                            {/* Expandable Details */}
                            {selectedService === service.id && (
                                <div className="service-details">
                                    <div className="service-description">
                                        <h4>Service Details</h4>
                                        <p>{service.fullDescription}</p>
                                    </div>

                                    <div className="service-features">
                                        <h4>What's Included</h4>
                                        <ul className="features-list">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="feature-item">
                                                    <span className="feature-check">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="service-cta">
                                        <button className="contact-btn">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Toggle Button */}
                            <button
                                className="service-toggle"
                                onClick={() => handleServiceClick(service.id)}
                            >
                                {selectedService === service.id ? 'Show Less' : 'Learn More'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="process-section">
                    <h2>My Development Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Discovery</h3>
                            <p>Understanding your requirements, goals, and vision for the project</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Planning</h3>
                            <p>Creating detailed project plans, wireframes, and technical specifications</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Development</h3>
                            <p>Building your solution using best practices and modern technologies</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Testing</h3>
                            <p>Thorough testing to ensure quality, performance, and user satisfaction</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">5</div>
                            <h3>Delivery</h3>
                            <p>Deployment and handover with documentation and ongoing support</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Me Section */}
                <div className="why-choose-section">
                    <h2>Why Choose Me?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <div className="benefit-icon">🚀</div>
                            <h3>Fast Delivery</h3>
                            <p>Efficient development process with timely project completion</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🎯</div>
                            <h3>User-Focused</h3>
                            <p>Gaming background brings unique insights into user engagement</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">💼</div>
                            <h3>Professional</h3>
                            <p>Clean code, proper documentation, and ongoing support</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🔧</div>
                            <h3>Modern Tech</h3>
                            <p>Always using the latest technologies and best practices</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="services-cta">
                    <h2>Ready to Get Started?</h2>
                    <p>Let's discuss your project and how I can help bring your vision to life.</p>
                    <button className="primary-cta-btn">
                        Contact Me Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;