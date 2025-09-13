import { Link } from 'react-router-dom';
// 注释掉logo导入
// import logo from '../assets/logo.png';

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Link to="/">
                    {/* 暂时移除logo或使用文字logo */}
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>MyPortfolio</span>
                </Link>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <main>{children}</main>
            <footer>
                <p>&copy; 2025 My Portfolio</p>
            </footer>
        </>
    );
};

export default Layout;