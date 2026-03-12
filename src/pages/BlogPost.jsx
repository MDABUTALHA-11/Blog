import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import { postContents } from '../data/postContents';
import { ChevronLeft, Calendar, User, BookOpen } from 'lucide-react';
import { useEffect } from 'react';

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);
    const content = postContents[slug] || '<p class="text-center py-5">এই পোস্টের বিস্তারিত কন্টেন্ট এখনো যুক্ত করা হয়নি।</p>';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="container py-5 text-center" style={{ marginTop: '120px' }}>
                <h2>পোস্টটি পাওয়া যায়নি</h2>
                <Link to="/" className="btn btn-premium mt-3">হোম পেজে ফিরে যান</Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <header
                className="article-header"
                style={{
                    backgroundImage: `linear-gradient(rgba(56, 102, 65, 0.4), rgba(56, 102, 65, 0.6)), url('${post.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="container">
                    <div className="ghibli-leaf float-animation" style={{ top: '15%', right: '10%', fontSize: '2.5rem' }}>🍃</div>
                    <motion.span
                        className="hero-badge float-animation"
                        style={{ background: 'var(--accent-yellow)', color: 'var(--primary-color)' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {post.category}
                    </motion.span>
                    <motion.h1
                        className="display-2 fw-bold text-white mb-4"
                        style={{ textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {post.title}
                    </motion.h1>
                    <motion.div
                        className="d-flex justify-content-center gap-4 mt-4 text-white opacity-90"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="d-flex align-items-center gap-2 fw-medium"><Calendar size={18} /> {post.date}</span>
                        <span className="d-flex align-items-center gap-2 fw-medium"><User size={18} /> {post.author}</span>
                    </motion.div>
                </div>
            </header>

            <main className="container">
                <article className="article-container">
                    <Link to="/" className="btn btn-link text-dark p-0 mb-5 d-flex align-items-center gap-1 text-decoration-none fw-black">
                        <ChevronLeft size={24} /> ফিরে যান
                    </Link>

                    <div
                        className="content-body"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />

                    <hr className="my-5" />

                    <div className="author-card d-flex align-items-center gap-4 p-4 shadow-sm" 
                         style={{ background: 'var(--bg-soft)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(56, 102, 65, 0.1)' }}>
                        <img src="/Blog/image/ghibli/abu_talha.png" width="80" height="80" alt="Author" className="rounded-circle" />
                        <div>
                            <h4 className="fw-bold mb-1" style={{ color: 'var(--primary-color)' }}>{post.author}</h4>
                            <p className="text-muted mb-0 small">ইসলামিক গবেষক ও লেখক। তিনি দীর্ঘ সময় ধরে ইসলামিক ইতিহাস ও দর্শন নিয়ে কাজ করছেন।</p>
                        </div>
                    </div>
                </article>
            </main>
        </motion.div>
    );
};

export default BlogPost;
