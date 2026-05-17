import React from 'react';
import { ExternalLink } from 'lucide-react';
import dans from "../../public/images/Dans.png";
import dublio from "../../public/images/dublio.png";
import Service from "../../public/images/talent-hub.png";
import vms from "../../public/images/bigfleet.png";
import portfolio from "../../public/images/ecf.png";

const Projects = () => {
  const projects = [
    {
      title: "Vividhood - Beauty Salon Booking Platform",
      description: "Vividhood is a full-stack beauty salon booking platform for Hong Kong built with Next.js, TypeScript, and Tailwind CSS. Real-time availability search by service, location, and date/time, verified salon profiles with reviews, trending sections, and a business registration portal for beauty professionals.",
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary"],
      liveUrl: "https://vividhood.com/en",
      accent: "violet",
    },
    {
      title: "Elite Club Fitness - Gym Website",
      description: "A professional and fully responsive gym website for a premium UK fitness facility. Sleek modern design with membership sections, class schedules, personal training services, and compelling CTAs — built to drive member engagement and conversions.",
      image: portfolio,
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://www.eliteclubfitness.co.uk/elite-gym",
      accent: "blue",
    },
    {
      title: "Plantory - Plant Business Directory",
      description: "A modern online directory connecting users with trusted plant-based businesses — nurseries, landscapers, florists and botanical gardens. Features smart search with category and location filters, admin-verified listings, and detailed business profiles.",
      image: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://platory-project.vercel.app/",
      accent: "teal",
    },
    {
      title: "Dans Air Space Management API",
      description: "A government-level project for the Dubai aviation sector. Manages and visualizes restricted airspace zones with precision — real-time airspace scheduling, altitude configuration, and efficient data handling tailored for administrative use.",
      image: dans,
      tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
      liveUrl: "https://stellular-cheesecake-aa80ab.netlify.app/",
      accent: "blue",
    },
    {
      title: "Task Management App",
      description: "A freelance product showcase website with smooth scrolling, interactive UI elements, and animated sections using AOS (Animate On Scroll). Built for performance and usability with a visually appealing interface that drives brand engagement.",
      image: dublio,
      tags: ["HTML", "CSS", "Javascript", "Bootstrap", "AOS"],
      liveUrl: "https://dubliopk.netlify.app/",
      accent: "violet",
    },
    {
      title: "Service Provider Website",
      description: "A responsive web application built with React and TypeScript, powered by Supabase for backend services. Features dynamic routing, role-based layouts, and a clean scalable UI with smooth user experience across all devices.",
      image: Service,
      tags: ["React", "Supabase", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fazi-project.vercel.app/",
      accent: "teal",
    },
    {
      title: "BigFleet - Car Booking Platform",
      description: "A comprehensive fleet management platform with three dedicated dashboards — Vendor, Corporate, and Admin. Enables real-time booking management, fleet oversight, and role-specific workflows with a clean, responsive UI.",
      image: vms,
      tags: ["Next.js", "TypeScript", "JavaScript"],
      liveUrl: "https://bigfleet.salyhal.com/",
      accent: "blue",
    },
  ];

  const accentMap = {
    violet: {
      tag: "bg-violet-500/10 border border-violet-500/20 text-violet-300",
      btn: "bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:bg-violet-500/20",
      dot: "bg-violet-400",
      glow: "hover:shadow-violet-500/10",
    },
    blue: {
      tag: "bg-blue-500/10 border border-blue-500/20 text-blue-300",
      btn: "bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20",
      dot: "bg-blue-400",
      glow: "hover:shadow-blue-500/10",
    },
    teal: {
      tag: "bg-teal-500/10 border border-teal-500/20 text-teal-300",
      btn: "bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20",
      dot: "bg-teal-400",
      glow: "hover:shadow-teal-500/10",
    },
  };

  return (
    <section id="projects" className="py-24 bg-[#050508] relative overflow-hidden">
      {/* subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)", backgroundSize: "64px 64px" }}
      />
      {/* ambient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-violet-300 text-xs font-semibold mb-6 tracking-widest uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            My Work
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Real-world projects built with modern technologies — each one solving actual problems and delivering real value.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const a = accentMap[project.accent] || accentMap.blue;
            return (
              <div
                key={index}
                className={`group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.14] bg-white/[0.02] hover:-translate-y-2 hover:shadow-2xl ${a.glow} transition-all duration-500`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-[#0d0d14] shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-black/20 to-transparent" />
                  {/* live link hover button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-lg border border-white/25 text-white text-xs font-semibold hover:bg-white/25 transition-colors"
                    >
                      <ExternalLink size={12} />
                      Live
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* dot + title */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                    <h3 className="text-white font-bold text-base leading-snug tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-2.5 py-1 rounded-full text-xs font-medium ${a.tag}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${a.btn}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <ExternalLink size={14} />
                    View Live Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;



const Projects = () => {
  const projects = [
    
    {
      title: "Vividhood - Beauty Salon Booking Platform",
      description: "Vividhood is a full-stack beauty salon booking platform for Hong Kong built with Next.js, TypeScript, and Tailwind CSS. It enables users to discover and book verified beauty salons offering Nails, Lashes, Brows, Facials, Hair, Massage, Lip, Ear cleaning, Hair Removal, and Yoga & Pilates services. Key features include real-time availability search by service, location, and date/time, curated salon profiles with photos and customer reviews, trending and featured salon sections, a business registration portal for beauty professionals, and a Cloudinary-powered media pipeline. Available in English, the platform is designed for seamless booking in just a few taps.",
      image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary"],
      liveUrl: "https://vividhood.com/en",
    },
    {
      title: "Elite Club Fitness - Gym Website",
      description: "A professional and fully responsive gym website built for Elite Club Fitness, a premium fitness facility in the UK. The site features a sleek modern design with sections for gym memberships, class schedules, personal training services, and facility highlights. Designed to drive member engagement and conversions, it delivers a smooth browsing experience across all devices with an energetic layout, compelling call-to-action buttons, and a clean user interface that reflects the brand's elite identity.",
      image: portfolio,
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://www.eliteclubfitness.co.uk/elite-gym",
      // githubUrl: "https://github.com/ansarSultan999/Portfolio-Ansar.git"
    },
    {
      title: "Plantory - Plant Business Directory",
      description: "Plantory is a modern online directory platform built with Next.js and TypeScript that connects users with trusted plant-based businesses — including nurseries, plant shops, landscapers, florists, herbalists, and botanical gardens. The platform features smart search with category and location filters, admin-verified business listings, detailed business profiles with photos and reviews, and a seamless business registration flow. Users can browse hundreds of listings, compare services, and connect with businesses directly via phone, email, or website.",
      image: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      liveUrl: "https://platory-project.vercel.app/",
    },
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
      // githubUrl: "https://github.com/ansarSultan999/Fazi-project.git"
    },
    {
      title: "BigFleet - Car Booking Platform",
      description: "A comprehensive car booking and fleet management platform built with Next.js, TypeScript, and JavaScript. BigFleet offers a seamless vehicle reservation experience with three dedicated dashboards — Vendor, Corporate, and Admin — each tailored with role-specific controls and workflows. The platform enables vendors to manage their fleets, corporates to handle employee bookings, and admins to oversee the entire system. Designed with a clean, responsive UI and robust backend integration for real-time booking management.",
      image: vms,
      tags: ["Next.js", "TypeScript", "JavaScript"],
      liveUrl: "https://bigfleet.salyhal.com/",
    }
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