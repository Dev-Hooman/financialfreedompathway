import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Instagram, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import BirdLogo from './BirdLogo';
import logo from '../assets/images/logo.png'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white mb-2">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center bg-[#14145e]">
        <div className="flex items-center">
          <img src={logo} className='h-14 w-14' />

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-6 space-x-6">
            <Link to="/" className="hover:text-[#65b7ff] transition-colors">Home</Link>
            <Link to="/my-story" className="hover:text-[#65b7ff] transition-colors">My Story</Link>
            <Link to="/financial-coaching" className="hover:text-[#65b7ff] transition-colors">Financial Coaching</Link>
            <Link to="/resources" className="hover:text-[#65b7ff] transition-colors">Resources</Link>
            <Link to="/testimonials" className="hover:text-[#65b7ff] transition-colors">Testimonials</Link>
            <Link to="/contact" className="hover:text-[#65b7ff] transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">

          <div className="text-left">
            <h2 className="text-xl font-semibold">Kathy Cuevas</h2>
            <p className="text-xl">Financial Coach</p>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex space-x-3 mr-4">
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Instagram size={20} />
            </a>
          </div>



          {/* Mobile Menu Button */}
          <button
            className="ml-4 md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#14145e] px-4 py-2">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-[#65b7ff] transition-colors py-2">Home</Link>
            <Link to="/my-story" className="hover:text-[#65b7ff] transition-colors py-2">My Story</Link>
            <Link to="/financial-coaching" className="hover:text-[#65b7ff] transition-colors py-2">Financial Coaching</Link>
            <Link to="/resources" className="hover:text-[#65b7ff] transition-colors py-2">Resources</Link>
            <Link to="/testimonials" className="hover:text-[#65b7ff] transition-colors py-2">Testimonials</Link>
            <Link to="/contact" className="hover:text-[#65b7ff] transition-colors py-2">Contact</Link>
          </div>
          <div className="flex space-x-5 mt-4 py-2">
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-[#65b7ff] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;