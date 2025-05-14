import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-blue-900">BrightSites<span className="text-orange-500">Digital</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-900 font-medium transition-colors">Home</a>
          <a href="#services" className="text-gray-800 hover:text-blue-900 font-medium transition-colors">Services</a>
          <a href="#work" className="text-gray-800 hover:text-blue-900 font-medium transition-colors">Our Work</a>
          <a href="#about" className="text-gray-800 hover:text-blue-900 font-medium transition-colors">About</a>
          <a href="#blog" className="text-gray-800 hover:text-blue-900 font-medium transition-colors">Blog</a>
          <a href="#contact">
            <Button variant="primary" size="sm">Get In Touch</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-blue-900 font-medium py-2 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-gray-800 hover:text-blue-900 font-medium py-2 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#work" className="text-gray-800 hover:text-blue-900 font-medium py-2 transition-colors" onClick={toggleMenu}>Our Work</a>
            <a href="#about" className="text-gray-800 hover:text-blue-900 font-medium py-2 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#blog" className="text-gray-800 hover:text-blue-900 font-medium py-2 transition-colors" onClick={toggleMenu}>Blog</a>
            <a href="#contact" onClick={toggleMenu}>
              <Button variant="primary" size="sm" fullWidth>Get In Touch</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;