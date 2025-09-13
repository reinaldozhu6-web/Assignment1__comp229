import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        {/* 文字Logo - 你可以后期替换为图片 */}
                        <span>MyPortfolio</span>
                    </Link>
                    <div className="nav-menu">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <p>&copy; 2025 My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;