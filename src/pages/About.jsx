const About = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">About Me</h1>
            <div style={{ textAlign: 'center' }}>
                {/* 占位图 - 你可以替换为自己的照片 */}
                <div style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: '#ddd',
                    borderRadius: '50%',
                    margin: '0 auto 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem'
                }}>
                    👤
                </div>
                <p><strong>Name:</strong> Your Name</p>
                <p><strong>Email:</strong> your.email@example.com</p>
                <p><strong>Location:</strong> City, Country</p>
                <p style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
                    I'm a passionate web developer with experience in modern technologies.
                    I love creating user-friendly applications and solving complex problems.
                </p>
                <a href="/resume.pdf" style={{
                    display: 'inline-block',
                    padding: '0.8rem 1.5rem',
                    background: '#27ae60',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    marginTop: '1rem'
                }}>
                    Download My Resume
                </a>
            </div>
        </div>
    );
};

export default About;