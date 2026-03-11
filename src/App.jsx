import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Categories from './pages/Categories';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/Blog">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
