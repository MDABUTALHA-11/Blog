import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Heart, Star, ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <header className="new-hero d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <motion.div
                            className="col-lg-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="hero-badge float-animation shadow-sm d-inline-flex align-items-center gap-2">
                                <Star size={16} fill="var(--primary-color)" className="text-warning" /> আধুনিক ইসলামিক জীবনবোধ 🍃
                            </span>
                            <h1 className="display-1 fw-bold mb-4">
                                শান্তির পথে আপনার <br /> যাত্রা শুরু হোক এখান থেকে
                            </h1>
                            <p className="lead text-muted fs-4 mb-5 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
                                শুদ্ধ জ্ঞান এবং নৈতিক শিক্ষার আলোয় আলোকিত হোক আপনার প্রতিদিন। ইসলামিক জীবন এবং দর্শনের গভীর বিশ্লেষণ।
                            </p>
                            <div className="d-flex gap-4 justify-content-center flex-wrap">
                                <a href="#featured" className="btn btn-premium btn-lg">পড়া শুরু করুন</a>
                                <Link to="/categories" className="btn btn-outline-success btn-lg px-5 rounded-pill fw-bold border-2">সব বিষয় দেখুন</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-5 border-bottom" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="container">
                    <div className="row g-4 text-center justify-content-center">
                        {[
                            { icon: <BookOpen size={32} className="text-dark" />, val: "১০০+", label: "ইসলামিক প্রবন্ধ" },
                            { icon: <Users size={32} className="text-dark" />, val: "১০কে+", label: "সক্রিয় পাঠক" },
                            { icon: <Heart size={32} className="text-dark" />, val: "১০০%", label: "বিশুদ্ধ তথ্য" }
                        ].map((stat, i) => (
                            <div className="col-6 col-md-3" key={i}>
                                <motion.div
                                    className="p-3 p-md-4 h-100 shadow-sm"
                                    style={{ 
                                        borderRadius: 'var(--radius-lg)', 
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        background: 'var(--bg-accent)',
                                        color: 'var(--text-dark)'
                                    }}
                                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(21, 255, 0, 0.1)' }}
                                >
                                    <div className="mb-2 mb-md-3 text-success p-3 rounded-circle d-inline-block" style={{ background: 'var(--bg-soft)' }}>{stat.icon}</div>
                                    <h3 className="h2 fw-bold number-font mb-1 text-dark">{stat.val}</h3>
                                    <p className="text-muted small text-uppercase fw-bold ls-2 mb-0">{stat.label}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section id="featured" className="py-5 bg-light">
                <div className="container py-lg-5">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
                        <div>
                            <span className="fw-bold text-uppercase ls-2" style={{ color: 'var(--primary-color)' }}>সেরা লেখাগুলো</span>
                            <h2 className="display-4 fw-bold">জনপ্রিয় প্রবন্ধসমূহ</h2>
                        </div>
                        <Link to="/categories" className="btn btn-link text-dark fw-bold text-decoration-none d-flex align-items-center gap-2">
                            সবগুলো দেখুন <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="row g-4">
                        {posts.slice(0, 6).map((post, index) => (
                            <motion.div
                                className="col-lg-4 col-md-6"
                                key={post.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <article className="modern-card">
                                    <div className="card-img-container">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                    </div>
                                    <div className="card-body p-4">
                                        <span className="card-category">{post.category}</span>
                                        <h3 className="h4 fw-bold mb-3">{post.title}</h3>
                                        <p className="text-muted small">{post.excerpt}</p>
                                        <Link to={`/post/${post.slug}`} className="btn btn-link p-0 text-dark fw-bold text-decoration-none d-inline-flex align-items-center gap-1">
                                            বিস্তারিত <ChevronRight size={18} />
                                        </Link>
                                    </div>
                                </article>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription Section */}
            <section id="subscribe" className="py-5">
                <div className="container py-5">
                    <div className="p-5 overflow-hidden position-relative shadow-lg" 
                         style={{ 
                             borderRadius: 'var(--radius-xl)', 
                             background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                             border: '8px solid var(--bg-soft)'
                         }}>
                        <div className="ghibli-leaf float-animation" style={{ top: '10%', right: '5%', fontSize: '2rem' }}>🍃</div>
                        <div className="ghibli-leaf float-animation" style={{ bottom: '15%', left: '3%', fontSize: '1.5rem', animationDelay: '1s' }}>🌿</div>
                        
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0 text-white">
                                <h2 className="display-5 fw-bold mb-3">আমাদের নতুন লেখাগুলো সরাসরি ইমেইলে পান</h2>
                                <p className="text-white opacity-75 fs-5">কোনো আপডেট মিস করবেন না। আমাদের নিউজলেটারে সাবস্ক্রাইব করে যুক্ত থাকুন শান্তির পথে।</p>
                            </div>
                            <div className="col-lg-7">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
