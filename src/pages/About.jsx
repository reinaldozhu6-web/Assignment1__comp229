const About = () => {
    return (
        <div className="page-container fade-in">
            <div className="container">
                <h1 className="page-title">About Me</h1>

                <div className="about-content">
                    <div className="about-image">
                        <div className="profile-image-placeholder">
                            <span>RP</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <h2>Reinaldo Pang</h2>
                        <p className="about-role">Full Stack Developer</p>

                        <p>
                            I'm a passionate web developer with expertise in creating dynamic, user-friendly
                            web applications. With a strong foundation in both front-end and back-end technologies,
                            I enjoy turning complex problems into simple, beautiful solutions.
                        </p>

                        <p>
                            My journey in web development started 3 years ago, and since then I've worked on
                            various projects ranging from small business websites to complex web applications.
                            I'm constantly learning new technologies and techniques to stay at the forefront
                            of web development.
                        </p>

                        <div className="about-details">
                            <div className="detail-item">
                                <strong>Email:</strong> reinaldo.pang@example.com
                            </div>
                            <div className="detail-item">
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </div>
                            <div className="detail-item">
                                <strong>Location:</strong> Toronto, Canada
                            </div>
                            <div className="detail-item">
                                <strong>Education:</strong> Computer Science Diploma
                            </div>
                        </div>

                        <a href="/resume.pdf" className="btn btn-primary" download="Reinaldo-Pang-Resume.pdf">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;