import React, { useState } from 'react';

const Contact = ({ setCurrentPage }) => {
    // State for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        projectType: ''
    });

    // State for form submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Form validation
    const validateForm = () => {
        const required = ['firstName', 'lastName', 'email', 'message'];
        return required.every(field => formData[field].trim() !== '');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call (replace with actual submission logic)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Log form data (in production, send to server)
            console.log('Form submitted:', formData);

            // Show success message
            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your message! I will get back to you within 24 hours.'
            });

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                preferredContact: 'email',
                projectType: ''
            });

            // Redirect to home after 3 seconds
            setTimeout(() => {
                setCurrentPage('home');
            }, 3000);

        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error sending your message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page contact-page">
            <div className="contact-container">
                {/* Page Header */}
                <div className="contact-header">
                    <h1>Get in Touch</h1>
                    <p className="contact-intro">
                        I'd love to hear from you! Whether you have a project in mind, need technical advice,
                        or just want to connect, don't hesitate to reach out.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Information Panel */}
                    <div className="contact-info-section">
                        <h2>Contact Information</h2>

                        <div className="contact-panel">
                            <div className="contact-item">
                                <div className="contact-icon">👤</div>
                                <div className="contact-details">
                                    <strong>Name:</strong>
                                    <span>Reinaldo Pang Wei Zhu</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div className="contact-details">
                                    <strong>Email:</strong>
                                    <span>reinaldo.zhu@example.com</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div className="contact-details">
                                    <strong>Phone:</strong>
                                    <span>+1 (647) 555-0123</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-details">
                                    <strong>Location:</strong>
                                    <span>Toronto, Ontario, Canada</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">🎓</div>
                                <div className="contact-details">
                                    <strong>Student ID:</strong>
                                    <span>301439871</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">💼</div>
                                <div className="contact-details">
                                    <strong>Status:</strong>
                                    <span>Available for Projects</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <h3>Connect With Me</h3>
                            <div className="social-buttons">
                                <a href="#" className="social-btn github">
                                    <span>📁</span> GitHub
                                </a>
                                <a href="#" className="social-btn linkedin">
                                    <span>💼</span> LinkedIn
                                </a>
                                <a href="#" className="social-btn portfolio">
                                    <span>🌐</span> Portfolio
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="availability-info">
                            <h3>Availability</h3>
                            <div className="availability-status">
                                <div className="status-indicator available"></div>
                                <span>Currently available for new projects</span>
                            </div>
                            <p>Response time: Usually within 24 hours</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2>Send Me a Message</h2>

                        {/* Status Messages */}
                        {submitStatus && (
                            <div className={`status-message ${submitStatus.type}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <form className="contact-form" onSubmit={handleSubmit}>
                            {/* Name Fields */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">
                                        First Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Your first name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastName">
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            {/* Contact Fields */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+1 (123) 456-7890"
                                    />
                                </div>
                            </div>

                            {/* Subject and Project Type */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="projectType">Project Type</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select project type</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="mobile-app">Mobile App</option>
                                        <option value="ui-ux-design">UI/UX Design</option>
                                        <option value="backend">Backend Development</option>
                                        <option value="game-development">Game Development</option>
                                        <option value="consulting">Technical Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Preferred Contact Method */}
                            <div className="form-group">
                                <label>Preferred Contact Method</label>
                                <div className="radio-group">
                                    <label className="radio-option">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="email"
                                            checked={formData.preferredContact === 'email'}
                                            onChange={handleInputChange}
                                        />
                                        <span>Email</span>
                                    </label>
                                    <label className="radio-option">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="phone"
                                            checked={formData.preferredContact === 'phone'}
                                            onChange={handleInputChange}
                                        />
                                        <span>Phone</span>
                                    </label>
                                    <label className="radio-option">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value="either"
                                            checked={formData.preferredContact === 'either'}
                                            onChange={handleInputChange}
                                        />
                                        <span>Either</span>
                                    </label>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <label htmlFor="message">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tell me about your project or question..."
                                ></textarea>
                                <div className="char-count">
                                    {formData.message.length} characters
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-submit">
                                <button
                                    type="submit"
                                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How quickly do you respond?</h3>
                            <p>I typically respond to all inquiries within 24 hours, often sooner during business hours.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What's your availability?</h3>
                            <p>I'm currently available for new projects and can usually start within 1-2 weeks.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you work with international clients?</h3>
                            <p>Absolutely! I work with clients worldwide and am comfortable with different time zones.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What's included in your services?</h3>
                            <p>All projects include planning, development, testing, deployment support, and documentation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;