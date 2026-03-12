import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
    const team = [
        { name: "মোহাম্মদ আবু তালহা", role: "ফাউন্ডার", img: "/Blog/image/ghibli/abu_talha.png" },
        { name: "ফয়সাল সাকিব", role: "সহ-প্রতিষ্ঠাতা", img: "/Blog/image/ghibli/faisal_sakib.png" },
        { name: "মোহাম্মদ রাজিবুল", role: "সহ-প্রতিষ্ঠাতা", img: "/Blog/image/ghibli/rajibul_islam.png" },
    ];

    return (
        <div className="about-page">
            <header className="new-hero d-flex align-items-center" style={{ padding: '150px 0 100px' }}>
                <div className="container text-center">
                    <div className="ghibli-leaf float-animation" style={{ top: '10%', right: '5%', fontSize: '2rem' }}>🍃</div>
                    <h1 className="display-2 fw-bold">আমাদের সমন্ধে জানুন</h1>
                    <p className="lead text-muted fs-4">শুদ্ধ ইসলামিক জ্ঞানের প্রচার ও প্রসারে আমাদের অঙ্গীকার</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h2 className="display-5 fw-bold mb-4 display-luxury">একটি সুন্দর সমাজ গড়ার স্বপ্ন</h2>
                            <p className="fs-5 text-muted">
                                আরাফ হলো একটি আধুনিক ইসলামিক প্ল্যাটফর্ম, যা নৈতিক শিক্ষা ও ধর্মীয় মূল্যবোধের ওপর ভিত্তি করে সমাজকে আলোকিত করতে চায়। আমরা বিশ্বাস করি, শুদ্ধ জ্ঞানই পারে মানুষের জীবনকে আমূল বদলে দিতে।
                            </p>
                            <div className="mt-4">
                                <div className="d-flex align-items-center mb-3 gap-3">
                                    <CheckCircle className="text-success" />
                                    <span className="fw-bold">বিশুদ্ধ উৎস থেকে প্রাপ্ত তথ্য</span>
                                </div>
                                <div className="d-flex align-items-center mb-3 gap-3">
                                    <CheckCircle className="text-success" />
                                    <span className="fw-bold">আধুনিক ও রুচিশীল উপস্থাপন</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                                <motion.img
                                    src="/Blog/image/ghibli/study.png"
                                    className="img-fluid shadow-lg"
                                    style={{ borderRadius: 'var(--radius-xl)', border: '10px solid var(--primary-color)' }}
                                    alt="About"
                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container py-5">
                    <h2 className="text-center display-4 fw-bold mb-5 display-luxury">আমাদের টিম</h2>
                    <div className="row g-4 text-center">
                        {team.map((member, i) => (
                            <div className="col-md-4" key={i}>
                                <motion.div
                                    className="modern-card p-5"
                                    whileHover={{ y: -10 }}
                                >
                                    <img
                                        src={member.img}
                                        className="rounded-circle mb-4 border border-4 border-success-subtle"
                                        width="150"
                                        height="150"
                                        style={{ objectFit: 'cover' }}
                                        alt={member.name}
                                    />
                                    <h4 className="fw-bold">{member.name}</h4>
                                    <p className="text-success fw-bold">{member.role}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
