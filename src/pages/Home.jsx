import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Heart, Star, ChevronRight } from 'lucide-react';

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
                            <span className="hero-badge shadow-sm d-inline-flex align-items-center gap-2">
                                <Star size={16} fill="currentColor" /> আধুনিক ইসলামিক জীবনবোধ
                            </span>
                            <h1 className="display-1 fw-bold text-white mb-4 display-luxury">
                                শান্তির পথে আপনার <br /> যাত্রা শুরু হোক এখান থেকে
                            </h1>
                            <p className="lead text-white-50 fs-4 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                                শুদ্ধ জ্ঞান এবং নৈতিক শিক্ষার আলোয় আলোকিত হোক আপনার প্রতিদিন। ইসলামিক জীবন এবং দর্শনের গভীর বিশ্লেষণ।
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="#featured" className="btn btn-premium btn-lg px-5">পড়া শুরু করুন</a>
                                <Link to="/categories" className="btn btn-outline-light btn-lg px-5 border-2 rounded-4">সব বিষয় দেখুন</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-5 bg-white border-bottom">
                <div className="container">
                    <div className="row g-4 text-center justify-content-center">
                        {[
                            { icon: <BookOpen className="text-success" />, val: "১০০+", label: "ইসলামিক প্রবন্ধ" },
                            { icon: <Users className="text-success" />, val: "১০কে+", label: "সক্রিয় পাঠক" },
                            { icon: <Heart className="text-success" />, val: "১০০%", label: "বিশুদ্ধ তথ্য" }
                        ].map((stat, i) => (
                            <div className="col-6 col-md-3" key={i}>
                                <motion.div
                                    className="p-3 p-md-4 rounded-4 hover-lift h-100"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="mb-2 mb-md-3">{stat.icon}</div>
                                    <h3 className="h2 fw-bold number-font mb-1">{stat.val}</h3>
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
                            <span className="text-success fw-bold text-uppercase ls-2">সেরা লেখাগুলো</span>
                            <h2 className="display-4 fw-bold display-luxury">জনপ্রিয় প্রবন্ধসমূহ</h2>
                        </div>
                        <Link to="/categories" className="btn btn-link text-success fw-bold text-decoration-none d-flex align-items-center gap-2">
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
                                        <Link to={`/post/${post.slug}`} className="btn btn-link p-0 text-success fw-bold text-decoration-none d-inline-flex align-items-center gap-1">
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
            <section id="subscribe" className="py-5 bg-white">
                <div className="container py-5">
                    <div className="bg-primary-gradient p-5 rounded-5 shadow-lg overflow-hidden position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 text-white">
                                <h2 className="display-5 fw-bold mb-3 display-luxury">আমাদের নতুন লেখাগুলো সরাসরি ইমেইলে পান</h2>
                                <p className="text-white-50 fs-5">কোনো আপডেট মিস করবেন না। আমাদের নিউজলেটারে সাবস্ক্রাইব করে যুক্ত থাকুন শান্তির পথে।</p>
                            </div>
                            <div className="col-lg-6">
                                <form className="p-2 bg-white rounded-4 d-flex shadow-sm">
                                    <input
                                        type="email"
                                        className="form-control border-0 bg-transparent py-3"
                                        placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                                        required
                                    />
                                    <button type="submit" className="btn btn-premium px-4">যুক্ত হোন</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
