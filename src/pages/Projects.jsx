import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Filter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Vividhood - Beauty Salon Booking", desc: "Hong Kong beauty salon booking platform with real-time availability, service categories (Nails, Facials, Massage & more), verified salon profiles, reviews, and a business registration portal for beauty pros.", image: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Next.js", "TypeScript", "Cloudinary"], category: "Next.js", live: "https://vividhood.com/en", github: null, color: "violet" },
  { title: "Elite Club Fitness", desc: "Premium UK gym website with modern UI, driving membership growth through engaging design and seamless UX.", image: "/images/ecf.png", tags: ["Next.js", "TypeScript", "Tailwind CSS"], category: "Next.js", live: "https://www.eliteclubfitness.co.uk/elite-gym", github: null, color: "blue" },
  { title: "BigFleet - Car Booking Platform", desc: "Multi-role fleet management platform with Vendor, Corporate, and Admin dashboards. Full booking lifecycle management.", image: "/images/bigfleet.png", tags: ["Next.js", "TypeScript", "MongoDB"], category: "Next.js", live: "https://bigfleet.salyhal.com/", github: null, color: "violet" },
  { title: "Plantory - Plant Business Directory", desc: "Online directory connecting users with verified nurseries, plant shops, landscapers, florists & botanical gardens. Smart search with category and location filters.", image: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Next.js", "TypeScript", "Tailwind CSS"], category: "Next.js", live: "https://platory-project.vercel.app/", github: null, color: "teal" },
  { title: "Dans Air Space", desc: "Aviation platform featuring real-time flight data, interactive maps, and aircraft tracking for aviation enthusiasts.", image: "/images/Dans.png", tags: ["React", "REST API", "Tailwind CSS"], category: "React", live: "https://dans-air-space.vercel.app/", github: null, color: "blue" },
  { title: "Dublio", desc: "A modern business landing page with smooth animations, video backgrounds, and conversion-optimised sections.", image: "/images/dublio.png", tags: ["HTML/CSS", "JavaScript", "GSAP"], category: "HTML/CSS", live: null, github: "https://github.com/ansarSultan999", color: "violet" },
  { title: "Service Provider Platform", desc: "Role-based service marketplace with Supabase authentication, provider profiles, and booking management.", image: "/images/talent-hub.png", tags: ["React", "Supabase", "TypeScript"], category: "React", live: "https://fazi-project.vercel.app/", github: null, color: "teal" },
];

const categories = ["All", "Next.js", "React", "HTML/CSS"];

const colorMap = {
  blue:   { tag: "bg-blue-500/10 border-blue-500/20 text-blue-300",   dot: "bg-blue-400"   },
  violet: { tag: "bg-violet-500/10 border-violet-500/20 text-violet-300", dot: "bg-violet-400" },
  teal:   { tag: "bg-teal-500/10 border-teal-500/20 text-teal-300",   dot: "bg-teal-400"   },
};

const Projects = () => {
  const ref = useRef(null);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient orb float
      gsap.to(".proj-orb", { y: -25, x: 15, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true });

      // Hero entrance — blur + rise with stagger
      gsap.fromTo(".ph",
        { opacity: 0, y: 55, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "expo.out", stagger: 0.2 }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Cards — 3D entrance on every filter change
    gsap.fromTo(".pc",
      { opacity: 0, y: 65, scale: 0.88, rotationY: 6, transformPerspective: 900 },
      { opacity: 1, y: 0, scale: 1, rotationY: 0, stagger: { each: 0.09, from: "start" }, duration: 0.9, ease: "expo.out" }
    );
  }, [active]);

  const gridBg = { backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "64px 64px" };

  return (
    <div ref={ref} className="bg-[#050508] min-h-screen">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={gridBg} />
        <div className="proj-orb absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="ph opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-violet-300 text-xs font-semibold mb-8 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> My Portfolio
          </div>
          <h1 className="ph opacity-0 text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            My <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="ph opacity-0 text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Real-world projects built with modern technologies. Each one solves actual problems and ships real value.
          </p>
        </div>
      </section>

      <section className="py-6 bg-[#050508] sticky top-16 z-20 border-b border-white/[0.04] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-3 justify-center">
          <Filter size={14} className="text-gray-500" />
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={"px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 " +
                (active === cat
                  ? "bg-white text-gray-900 shadow-lg scale-105"
                  : "bg-white/[0.04] border border-white/10 text-gray-400 hover:bg-white/[0.08] hover:text-white")}>
              {cat}
            </button>
          ))}
          <span className="ml-2 text-gray-600 text-xs">{filtered.length} projects</span>
        </div>
      </section>

      <section className="py-24 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, i) => {
              const c = colorMap[p.color] || colorMap.blue;
              return (
                <div key={i} className="pc opacity-0 group relative rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/15 bg-white/[0.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/[0.08] transition-all duration-500 flex flex-col">
                  <div className="relative overflow-hidden h-52 bg-gray-900 shrink-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-95" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/15 backdrop-blur-sm rounded-lg border border-white/25 hover:bg-white/25 transition-colors">
                          <ExternalLink size={13} className="text-white" />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/15 backdrop-blur-sm rounded-lg border border-white/25 hover:bg-white/25 transition-colors">
                          <Github size={13} className="text-white" />
                        </a>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className={"w-2 h-2 rounded-full inline-block " + c.dot} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">{p.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t, ti) => <span key={ti} className={"px-2.5 py-1 text-xs font-semibold rounded-full border " + c.tag}>{t}</span>)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
