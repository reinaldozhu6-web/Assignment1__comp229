// pages/About.jsx
import myPhoto from '../assets/my-photo.jpg';
import resume from '../assets/resume.pdf';

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <img src={myPhoto} alt="Your Name" width="200" />
            <p>在这里写一段关于你自己的简短介绍...</p>
            {/* 链接到PDF简历 */}
            <a href={resume} download="Your-Name-Resume.pdf">
                Download My Resume
            </a>
        </div>
    );
};

export default About;