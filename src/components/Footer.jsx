import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/ansarSultan999', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ansar-sultan-555465274/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ansarsultan2002@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ansar<span className="text-white">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating exceptional digital experiences that make a difference.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Get In Touch</h3>
            <div className="space-y-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ansarsultan2002@gmail.com" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <Mail size={15} className="flex-shrink-0" /> ansarsultan2002@gmail.com
              </a>
              <a href="tel:03157511825" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                <Phone size={15} className="flex-shrink-0" /> 0315 7511825
              </a>
              <span className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={15} className="flex-shrink-0" /> Bahria Town Phase 6, Islamabad
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ansar Sultan. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-current mx-1" /> by Ansar Sultan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;