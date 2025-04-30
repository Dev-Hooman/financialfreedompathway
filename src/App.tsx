import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-story" element={<div className="p-12 text-center">My Story Page Coming Soon</div>} />
            <Route path="/financial-coaching" element={<div className="p-12 text-center">Financial Coaching Page Coming Soon</div>} />
            <Route path="/resources" element={<div className="p-12 text-center">Resources Page Coming Soon</div>} />
            <Route path="/testimonials" element={<div className="p-12 text-center">Testimonials Page Coming Soon</div>} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
