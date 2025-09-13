const Home = () => {
    return (
        <div className="page-container fade-in">
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1>Hello, I'm <span className="text-primary">Reinaldo Pang</span></h1>
                        <p className="hero-subtitle">Web Developer & UI/UX Enthusiast</p>
                        <p className="hero-description">
                            I create beautiful, functional, and user-centered digital experiences.
                            With a passion for clean code and innovative design, I bring ideas to life
                            in the digital realm.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="/contact" className="btn btn-outline">Contact Me</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">What I Do</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">💻</div>
                            <h3>Web Development</h3>
                            <p>Building responsive and performant websites using modern technologies like React, Node.js, and more.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <h3>UI/UX Design</h3>
                            <p>Creating intuitive and aesthetically pleasing user interfaces that enhance the user experience.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile Applications</h3>
                            <p>Developing cross-platform mobile applications that work seamlessly on iOS and Android.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;