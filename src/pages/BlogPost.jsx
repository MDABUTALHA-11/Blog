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
                style={{ backgroundImage: `url('${post.image}')` }}
            >
                <div className="container">
                    <motion.span
                        className="hero-badge"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {post.category}
                    </motion.span>
                    <motion.h1
                        className="display-2 fw-bold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {post.title}
                    </motion.h1>
                    <motion.div
                        className="d-flex justify-content-center gap-4 mt-4 text-dark opacity-75"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="d-flex align-items-center gap-2 fw-bold"><Calendar size={18} /> {post.date}</span>
                        <span className="d-flex align-items-center gap-2 fw-bold"><User size={18} /> {post.author}</span>
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

                    <div className="author-card d-flex align-items-center gap-4 p-4 bg-light rounded-4">
                        <img src="/Blog/image/image.png" className="rounded-circle" width="80" height="80" alt="Author" />
                        <div>
                            <h4 className="fw-bold mb-1">{post.author}</h4>
                            <p className="text-muted mb-0">ইসলামিক গবেষক ও লেখক। তিনি দীর্ঘ সময় ধরে ইসলামিক ইতিহাস ও দর্শন নিয়ে কাজ করছেন।</p>
                        </div>
                    </div>
                </article>
            </main>
        </motion.div>
    );
};

export default BlogPost;
