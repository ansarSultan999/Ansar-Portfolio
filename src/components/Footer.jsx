import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ansar Sultan
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference. 
            Always learning, always building, always improving.
          </p>
          <div className="flex items-center justify-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Ansar Sultan</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ansar Sultan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;