const Home = () => {
    return (
        <div>
            {/* 全宽英雄区域 */}
            <div style={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                backgroundColor: '#f8f9fa',
                padding: '4rem 0',
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to My Portfolio</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    Hi, I'm a web developer passionate about creating amazing digital experiences.
                </p>
            </div>

            {/* 常规内容区域 */}
            <div className="page-container">
                {/* 你的其他内容 */}
                <div style={{ textAlign: 'center', padding: '2rem' }}>
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
        </div>
    );
};