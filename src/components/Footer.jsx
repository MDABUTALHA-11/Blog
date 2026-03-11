import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Globe, Star } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-luxury py-5 mt-auto">
            <div className="container py-lg-4">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="footer-brand mb-4">
                            <span className="display-luxury h2 fw-bold text-white">iARAF</span>
                            <div className="accent-line mt-2"></div>
                        </div>
                        <p className="text-white-50 fs-5 mb-4" style={{ maxWidth: '400px' }}>
                            প্রতিটি মুহূর্ত আল্লাহর স্মরণে কাটুক। আমাদের লক্ষ্য শুদ্ধ জ্ঞান সবার মাঝে ছড়িয়ে দেওয়া।
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ms-lg-auto">
                        <h4 className="fw-bold mb-4 text-white">লিংক</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="footer-link">হোম</Link></li>
                            <li className="mb-2"><Link to="/categories" className="footer-link">ক্যাটাগরি</Link></li>
                            <li className="mb-2"><Link to="/about" className="footer-link">আমাদের সম্পর্কে</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <h4 className="fw-bold mb-4 text-white">যোগাযোগ</h4>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center gap-3 text-white-50">
                                <Mail size={18} /> info@iaraf.com
                            </li>
                            <li className="mb-3 d-flex align-items-center gap-3 text-white-50">
                                <Globe size={18} /> hstu, Dinajpur
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom mt-5 pt-4 border-top border-white border-opacity-10 text-center">
                    <p className="text-white-50 mb-0 number-font">
                        &copy; {new Date().getFullYear()} iARAF Blog Center. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
