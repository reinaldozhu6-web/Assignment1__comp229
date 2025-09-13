const Home = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Welcome to My Portfolio</h1>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <p>Hi, I'm a web developer passionate about creating amazing digital experiences.</p>
                <p>Feel free to explore my work and get in touch!</p>
                <div style={{ marginTop: '2rem' }}>
                    <a href="/about" style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        background: '#3498db',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        margin: '0 1rem'
                    }}>
                        Learn More About Me
                    </a>
                    <a href="/contact" style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        border: '2px solid #3498db',
                        color: '#3498db',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        margin: '0 1rem'
                    }}>
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;