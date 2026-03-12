import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
    const info = [
        { icon: <MapPin />, title: "ঠিকানা", content: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (HSTU), দিনাজপুর, বাংলাদেশ" },
        { icon: <Phone />, title: "ফোন", content: "+880 1742-761220", sub: "প্রতিদিন সকাল ১০টা - রাত ৮টা" },
        { icon: <Mail />, title: "ইমেইল", content: "mdabutalha01742@gmail.com", sub: "আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেই" },
    ];

    return (
        <div className="contact-page">
            <header className="new-hero d-flex align-items-center" style={{ padding: '150px 0 100px' }}>
                <div className="container text-center">
                    <div className="ghibli-leaf float-animation" style={{ top: '10%', right: '5%', fontSize: '2rem' }}>🌿</div>
                    <h1 className="display-2 fw-bold">যোগাযোগ করুন</h1>
                    <p className="lead text-muted fs-4">আপনার যেকোনো জিজ্ঞাসা বা পরামর্শ আমাদের জানান</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        {info.map((item, i) => (
                            <div className="col-md-4" key={i}>
                                <motion.div
                                    className="modern-card p-5 h-100"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="category-icon mb-4" style={{ width: '60px', height: '60px', background: 'rgba(12, 59, 46, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                        {item.icon}
                                    </div>
                                    <h4 className="fw-bold">{item.title}</h4>
                                    <p className="text-muted mb-2">{item.content}</p>
                                    {item.sub && <p className="text-muted small">{item.sub}</p>}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="rounded-5 overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.8497645168853!2d88.6432656750372!3d25.50993098375253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529b0221996d%3A0x1b5757754b5f48f3!2sHajee%20Mohammad%20Danesh%20Science%20and%20Technology%20University%2C%20Dinajpur!5e0!3m2!1sen!2sbd!4v1689771147571!5m2!1sen!2sbd"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
