import React from 'react';

const Home = ({ setCurrentPage }) => {
    return (
        <div className="page home-page">
            <div className="hero-section">
                {/* Welcome Message */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to My Portfolio
                    </h1>
                    <p className="hero-subtitle">
                        Reinaldo Pang Wei Zhu - Web Developer & Gaming Enthusiast
                    </p>
                    <p className="hero-description">
                        Passionate about creating innovative digital solutions and immersive user experiences
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="mission-statement">
                    <h2 className="mission-title">My Mission</h2>
                    <p className="mission-text">
                        I am dedicated to combining technical expertise with creative problem-solving
                        to deliver high-quality web applications that exceed expectations. My passion
                        for gaming has shaped my understanding of user experience and interaction design,
                        driving me to create engaging and intuitive digital solutions.
                    </p>
                    <p className="mission-text">
                        Whether it's building responsive websites, developing interactive applications,
                        or exploring the latest in web technologies, I strive to stay at the forefront
                        of innovation while maintaining a focus on user-centered design principles.
                    </p>
                </div>

                {/* Call to Action Buttons */}
                <div className="cta-section">
                    <button
                        className="cta-button primary"
                        onClick={() => setCurrentPage('about')}
                    >
                        Learn About Me
                    </button>
                    <button
                        className="cta-button secondary"
                        onClick={() => setCurrentPage('projects')}
                    >
                        View My Projects
                    </button>
                    <button
                        className="cta-button tertiary"
                        onClick={() => setCurrentPage('contact')}
                    >
                        Get In Touch
                    </button>
                </div>

                {/* Feature Highlights */}
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">💻</div>
                        <h3>Web Development</h3>
                        <p>Modern, responsive websites using React and cutting-edge technologies</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎮</div>
                        <h3>Gaming Passion</h3>
                        <p>Deep understanding of user engagement and interactive experiences</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Innovation</h3>
                        <p>Always exploring new technologies and development methodologies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;