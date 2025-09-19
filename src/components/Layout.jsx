import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        <span>RP</span>
                        <span>Reinaldo Pang</span>
                    </Link>
                    <div className="nav-menu">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                        <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 Reinaldo Pang. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/reinaldozhu6-web/Assignment1__comp229" aria-label="GitHub">GitHub</a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
                        <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;