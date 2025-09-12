// components/Layout.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // 导入你的Logo图片

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Link to="/">
                    <img src={logo} alt="My Logo" height="50" /> {/* 你的自定义Logo */}
                </Link>
                <div>
                    {/* Link 组件用于导航，不会刷新页面 */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <main>
                {/* 这里会渲染当前活动的页面（Home, About, etc.） */}
                {children}
            </main>
            <footer>{/* 你的页脚内容 */}</footer>
        </>
    );
};

export default Layout;