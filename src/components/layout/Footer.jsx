import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { contactInfo, navLinks } from '../../data/dummyData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-3xl font-bold tracking-tighter mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-purple-500">
              Grawish<span className="text-purple-500">.</span>
            </h3>
            <p className="mb-6 leading-relaxed">
              We are a leading digital marketing agency offering 360° Digital Marketing Services to help clients drive revenue for their businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-blue-500">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink to={link.path} className="flex items-center gap-2 hover:text-purple-400 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-purple-400" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-blue-500">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li><NavLink to="/services" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><ArrowRight className="w-3 h-3 text-slate-500" /> Digital Marketing</NavLink></li>
              <li><NavLink to="/services" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><ArrowRight className="w-3 h-3 text-slate-500" /> Search Engine Optimization</NavLink></li>
              <li><NavLink to="/services" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><ArrowRight className="w-3 h-3 text-slate-500" /> Website Development</NavLink></li>
              <li><NavLink to="/services" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><ArrowRight className="w-3 h-3 text-slate-500" /> Social Media Management</NavLink></li>
              <li><NavLink to="/services" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><ArrowRight className="w-3 h-3 text-slate-500" /> Graphic Designing</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-blue-500">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <div className="flex flex-col">
                  <span>{contactInfo.phone1}</span>
                  <span>{contactInfo.phone2}</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} Grawish Web Services. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-purple-400">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
