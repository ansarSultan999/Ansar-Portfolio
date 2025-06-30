import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import dans from "../../public/images/Dans.png";
import dublio from "../../public/images/dublio.png";
import Service from "../../public/images/talent-hub.png";
import vms from "../../public/images/vms.png";
import portfolio from "../../public/images/portfolio.png";


const Projects = () => {
  const projects = [
    {
      title: "Dans Air Space Managment API",
      description: "A government-level project developed for the Dubai aviation sector using HTML, CSS, JavaScript, and Bootstrap. This web application is designed to manage and visualize restricted airspace zones with precision. It features interactive forms, user-friendly layouts, and a responsive design for seamless performance across all devices. The system enables real-time airspace scheduling, altitude configuration, and efficient data handling tailored for administrative use.",
      image: dans,
      tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
      liveUrl: "https://stellular-cheesecake-aa80ab.netlify.app/",
     
    },
    {
      title: "Task Management App",
      description: "A freelance project developed using HTML, CSS, JavaScript, and Bootstrap, designed to promote and display a wide range of products in an elegant and responsive layout. The website features smooth scrolling, interactive UI elements, and animated sections using AOS (Animate On Scroll) for a modern browsing experience. Built with performance and usability in mind, it offers a visually appealing interface ideal for showcasing brand identity and driving customer engagement.",
      image: dublio,
      tags: ["HTML", "CSS", "Javascript", "Bootstrap", "AOS"],
      liveUrl: "https://dubliopk.netlify.app/",
    },
    {
      title: "Service Provider Website",
      description: "A responsive and interactive web application built with React and TypeScript, styled using Tailwind CSS and powered by Supabase for backend services. Developed using Vite for fast builds and optimized performance, this project features dynamic routing via React Router, clean iconography with Lucide Icons, and robust code quality ensured through ESLint and TypeScript tooling. The application is designed to highlight services or profiles in a clean, scalable layout with smooth user experience and high responsiveness across all devices.",
      image: Service,
      tags: ["React", "Tailwind", "Jawasript", "Supabase","TypeScript"],
      liveUrl: "https://fazi-project.vercel.app/",
      githubUrl: "https://github.com/ansarSultan999/Fazi-project.git"
    },
    {
      title: "Dans Air Space Managment VMS",
      description: "A government-level project developed for the Dubai aviation sector using HTML, CSS, JavaScript, and Bootstrap. This web application is designed to manage and visualize restricted airspace zones with precision. It features interactive forms, user-friendly layouts, and a responsive design for seamless performance across all devices. The system enables real-time airspace scheduling, altitude configuration, and efficient data handling tailored for administrative use.",
      image: vms,
      tags: ["Javascript", "HTML", "CSS", "Bootsrap"],
      liveUrl: "https://neon-sunburst-1b8a25.netlify.app/",
     
    },
    {
      title: "Portfolio Website",
      description: "A fully responsive and modern portfolio website built with React, Tailwind CSS, and powered by Vite for high performance and fast development. This project showcases professional experience, technical skills, and featured projects in a clean and interactive layout. Designed with attention to UI/UX details, it includes smooth animations, a contact section, and dynamic routing to present a developer profile effectively. The codebase is organized and maintainable, with ESLint and TypeScript ensuring strong code quality throughout.",
      image: portfolio,
      tags: ["React", "Tailwind CSS", "Swiper", "Font Awesome"],
      liveUrl: "https://portfolio-ansar-k3js.vercel.app/",
      githubUrl: "https://github.com/ansarSultan999/Portfolio-Ansar.git"
    },
    // {
    //   title: "AI Content Generator",
    //   description: "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using advanced language models.",
    //   image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["Python", "OpenAI API", "React", "FastAPI"],
    //   liveUrl: "#",
    //   githubUrl: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 text-center py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex-1 text-center py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;