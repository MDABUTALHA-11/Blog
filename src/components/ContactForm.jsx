import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("প্রেরণ করা হচ্ছে...");
    const formData = new FormData(event.target);
    formData.append("access_key", "e3dcf97b-c7e5-40ba-bcf3-f3aba8d6e0b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResult("আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!");
        event.target.reset();
        setTimeout(() => {
          setStatus(null);
          setResult("");
        }, 5000);
      } else {
        setStatus("error");
        setResult("দুঃখিত, কোনো সমস্যা হয়েছে।");
      }
    } catch (error) {
      setStatus("error");
      setResult("নেটওয়ার্ক সমস্যা। আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="form-wrapper-blur h-100">
      <form onSubmit={onSubmit} className="ghibli-form">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="contactName"
                placeholder="আপনার নাম"
                required
              />
              <label htmlFor="contactName">আপনার নাম</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="contactEmail"
                placeholder="ইমেইল ঠিকানা"
                required
              />
              <label htmlFor="contactEmail">ইমেইল ঠিকানা</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-4">
          <textarea
            name="message"
            className="form-control"
            placeholder="আপনার বার্তা"
            id="contactMessage"
            style={{ height: '120px' }}
            required
          ></textarea>
          <label htmlFor="contactMessage">আপনার বার্তা</label>
        </div>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          <button
            type="submit"
            className={`btn-premium px-5 ${status === 'sending' ? 'opacity-75 disabled' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>প্রেরণ হচ্ছে...</>
            ) : (
              <>বার্তা পাঠান <Send size={18} /></>
            )}
          </button>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className={`d-flex align-items-center gap-2 fw-bold ${status === 'success' ? 'text-success' : status === 'error' ? 'text-danger' : 'text-primary'}`}
                style={{ fontSize: '0.9rem' }}
              >
                {status === 'success' && <CheckCircle size={18} />}
                {status === 'error' && <AlertCircle size={18} />}
                {result}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
