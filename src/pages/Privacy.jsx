import { motion } from 'framer-motion';
import { Database, Eye, Cookie, Info } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="privacy-page">
            <header className="new-hero d-flex align-items-center" style={{ padding: '150px 0 100px' }}>
                <div className="container">
                    <h1 className="display-2 fw-bold display-luxury">গোপনীয়তা নীতি</h1>
                    <p className="lead text-white-50">আপনার তথ্যের নিরাপত্তা ও গোপনীয়তা আমাদের কাছে অগ্রাধিকার</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="bg-white p-5 rounded-5 shadow-sm border">
                                <div className="mb-5">
                                    <h2 className="h3 fw-bold d-flex align-items-center gap-3 text-primary">
                                        <Database /> তথ্য সংগ্রহ
                                    </h2>
                                    <p className="text-muted mt-3">iARAF শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করে যাতে আমরা আপনাকে আরও উন্নত সেবা প্রদান করতে পারি। এর মধ্যে রয়েছে আপনার ব্রাউজার তথ্য এবং ব্যবহারের পরিসংখ্যান।</p>
                                </div>

                                <div className="mb-5">
                                    <h2 className="h3 fw-bold d-flex align-items-center gap-3 text-primary">
                                        <Eye /> তথ্যের ব্যবহার
                                    </h2>
                                    <p className="text-muted mt-3">সংগৃহীত তথ্যগুলো ওয়েবসাইট অভিজ্ঞতা উন্নত করতে, কন্টেন্ট পার্সোনালাইজ করতে এবং নতুন ফিচারের উন্নয়নে ব্যবহার করা হয়। আমরা কখনোই আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না।</p>
                                </div>

                                <div className="mb-5">
                                    <h2 className="h3 fw-bold d-flex align-items-center gap-3 text-primary">
                                        <Cookie /> কুকিজ নীতি
                                    </h2>
                                    <p className="text-muted mt-3">আমাদের ওয়েবসাইট আপনার ব্রাউজিং পছন্দ মনে রাখতে কুকিজ ব্যবহার করে। আপনি চাইলে আপনার ব্রাউজার সেটিংস থেকে এগুলো বন্ধ করে দিতে পারেন।</p>
                                </div>

                                <div className="mt-5 p-4 bg-light rounded-4 d-flex align-items-center gap-3">
                                    <Info className="text-primary" />
                                    <p className="mb-0 fw-bold">সর্বশেষ আপডেট: ১ জানুয়ারি ২০২৪</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
