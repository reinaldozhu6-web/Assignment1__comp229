import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        console.log('Form submitted:', formData);

        // 显示成功消息
        alert('Thank you for your message! I will get back to you soon.');

        // 重置表单
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });

        // 重定向到首页（根据作业要求）
        navigate('/');
    };

    return (
        <div className="page-container fade-in">
            <div className="container">
                <h1 className="page-title">Contact Me</h1>
                <p className="page-subtitle">Get in touch for projects or inquiries</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Let's Talk</h2>
                        <p>Feel free to reach out for collaboration or just to say hello. I'm always open to discussing new projects and opportunities.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <strong>Email:</strong> reinaldo.pang@example.com
                            </div>
                            <div className="contact-item">
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </div>
                            <div className="contact-item">
                                <strong>Location:</strong> Toronto, Canada
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com" aria-label="GitHub">GitHub</a>
                            <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
                            <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;