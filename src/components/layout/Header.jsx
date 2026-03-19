import { useState, useEffect } from 'react';
import { navLinks } from '../../data/dummyData';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          {/* Using a placeholder text for Logo, but styling it like a brand */}
          <span className={`text-3xl font-bold tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-blue-950'}`}>Grawish<span className="text-purple-600">.</span></span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 hover:text-purple-600 ${
                  isActive ? 'text-purple-600' : isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="group flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            CONTACT US
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col py-4 px-6 gap-4 shadow-xl pb-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium border-b border-gray-100 pb-2 ${
                      isActive ? 'text-purple-600' : 'text-gray-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold"
              >
                CONTACT US
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
