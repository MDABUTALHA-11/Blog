import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ background: 'var(--bg-soft)', padding: '1rem 0' }}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
                    <img 
                      src="/Blog/image/1732040398527.jpg" 
                      width="55" 
                      height="55" 
                      alt="Logo" 
                      className="rounded-circle shadow-sm"
                      style={{ border: '3px solid var(--bg-soft)' }}
                    />
                    <span className="fw-bold text-dark" style={{ letterSpacing: '-0.5px', fontSize: '1.9rem', color: 'var(--accent-color)' }}>iARAF</span>
                </Link>

                <button
                    className="navbar-toggler d-lg-none border-0"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} color="var(--text-dark)" /> : <Menu size={28} color="var(--text-dark)" />}
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
                            <a href="/Blog/#subscribe" className="btn btn-premium d-flex align-items-center gap-2">
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
