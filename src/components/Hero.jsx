import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-black to-purple-50 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
        style={{ objectPosition: 'center' }}
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#000000ba]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Ansar Sultan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              A passionate Frontend developer who creates beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <a
  href="/AnsarSultan.pdf"
  download="AnsarSultan_CV.pdf"
>
  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:border-blue-600 hover:text-blue-600  transform hover:scale-105 transition-all duration-300">
    Download CV
  </button>
</a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/ansarSultan999"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/ansar-sultan-555465274/"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-gray-700 hover:text-blue-600" />
            </a>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ansarsultan2002@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-50"
>
  <Mail size={24} className="text-gray-700 hover:text-blue-600" />
</a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;