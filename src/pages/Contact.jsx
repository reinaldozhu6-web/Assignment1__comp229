// pages/Contact.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    // 使用 React 的 useState Hook 来管理表单数据
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 1. 在这里，你可以打印数据到控制台来验证
        console.log('Form submitted:', formData);
        // 2. 后续可以在这里添加发送邮件的逻辑（比如用EmailJS或Node.js后端）
        // 3. 重置表单
        setFormData({ firstName: '', lastName: '', contactNumber: '', email: '', message: '' });
        // 4. 跳转回首页（满足作业要求）
        alert('Message Received! Redirecting to Home...');
        navigate('/');
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <p>Your contact info here...</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;