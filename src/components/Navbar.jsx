import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar navbar-expand-lg border-bottom border-2 border-dark ${isScrolled ? 'scrolled' : ''}`} style={{ top: '0', margin: '0', width: '100%', borderRadius: '0' }}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src="/Blog/image/1732040398527.jpg" width="45" height="45" alt="Logo" className="border border-1 border-dark" />
                    <span className="fw-black text-dark" style={{ letterSpacing: '-1px', fontSize: '1.8rem' }}>iARAF</span>
                </Link>

                <button
                    className="navbar-toggler d-lg-none border-0"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarMain">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-lg-row">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">হোম</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/categories' ? 'active' : ''}`} to="/categories">ক্যাটাগরি</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">আমাদের সম্পর্কে</Link>
                        </li>
                        <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
                            <a href="/#subscribe" className="btn btn-premium d-flex align-items-center gap-2">
                                <Star size={18} /> সাবস্ক্রাইব
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
