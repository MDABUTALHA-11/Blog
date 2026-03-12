import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Compass, Heart, Shield, Terminal } from 'lucide-react';

const Categories = () => {
    const categories = [
        { title: "কুরআন", desc: "তফসীর, তিলাওয়াত এবং কুরআনিক শিক্ষার গভীর বিশ্লেষণ।", icon: <Book className="text-success" />, color: "#e8f5e9" },
        { title: "হাদিস", desc: "রাসূলুল্লাহ (সা.)-এর পবিত্র বাণী এবং সুন্নাহর যথাযথ চর্চা।", icon: <Terminal className="text-success" />, color: "#f1f8e9" },
        { title: "ইতিহাস", desc: "ইসলামের স্বর্ণযুগের ইতিহাস এবং মুসলিম বীরদের জীবনী।", icon: <Compass className="text-success" />, color: "#fff9c4" },
        { title: "জীবনবোধ", desc: "আধুনিক বিশ্বে ইসলামিক জীবনদর্শনের প্রয়োগ ও সমাধান।", icon: <Heart className="text-success" />, color: "#ffecb3" },
    ];

    return (
        <div className="categories-page">
            <header className="new-hero d-flex align-items-center" style={{ padding: '150px 0 100px' }}>
                <div className="container text-center">
                    <div className="ghibli-leaf float-animation" style={{ top: '10%', left: '5%', fontSize: '2rem' }}>🌿</div>
                    <motion.h1
                        className="display-2 fw-bold mb-3"
                        style={{ color: 'var(--primary-color)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        📚 জ্ঞান অন্বেষণ করুন
                    </motion.h1>
                    <p className="lead text-muted fs-4">কুরআন, হাদিস এবং ইসলামের বিভিন্ন বিষয়ের ওপর গভীর আলোচনা</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        {categories.map((cat, i) => (
                            <div className="col-md-3" key={i}>
                                <motion.div
                                    className="modern-card text-center p-5 h-100"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="category-icon mb-4 mx-auto"
                                        style={{ width: '80px', height: '80px', background: cat.color, borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {cat.icon}
                                    </div>
                                    <h3 className="fw-bold mb-3">{cat.title}</h3>
                                    <p className="text-muted small">{cat.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="display-4 fw-bold display-luxury mb-5 text-center" style={{ color: 'var(--primary-color)' }}>সবগুলো প্রবন্ধ</h2>
                    <div className="row g-4">
                        {posts.map((post, i) => (
                            <div className="col-md-6 col-lg-4" key={i}>
                                <article className="modern-card">
                                    <div className="card-img-container">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                    </div>
                                    <div className="card-body p-4">
                                        <span className="card-category">{post.category}</span>
                                        <h3 className="h5 fw-bold mb-3">{post.title}</h3>
                                        <p className="text-muted small">{post.excerpt}</p>
                                        <Link to={`/post/${post.slug}`} className="btn btn-link p-0 text-dark fw-bold text-decoration-none d-flex align-items-center gap-2">
                                            পড়ুন <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;
