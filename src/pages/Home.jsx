import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Github, Linkedin, Mail, Code, Server, Layout, Zap, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient floating orbs
      gsap.to(".orb-1", { y: -28, x: 18, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(".orb-2", { y: 26, x: -18, duration: 11, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2.5 });

      // Hero entrance — skewY text reveal + blur badge
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .fromTo(".hb",  { opacity: 0, y: 22, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1 })
        .fromTo(".ht-1", { opacity: 0, y: 100, skewY: 5 },           { opacity: 1, y: 0, skewY: 0, duration: 1.3 }, "-=0.5")
        .fromTo(".ht-2", { opacity: 0, y: 100, skewY: 5 },           { opacity: 1, y: 0, skewY: 0, duration: 1.3 }, "-=1.05")
        .fromTo(".hr",  { opacity: 0, scaleX: 0 },                    { opacity: 1, scaleX: 1, duration: 0.9, transformOrigin: "center" }, "-=0.8")
        .fromTo(".hs",  { opacity: 0, y: 32 },                        { opacity: 1, y: 0, duration: 1.0 }, "-=0.7")
        .fromTo(".hc",  { opacity: 0, y: 26 },                        { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
        .fromTo(".hso", { opacity: 0, y: 20, scale: 0.8 },            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(2)" }, "-=0.5");

      // Hero bg image scroll-out — scrub fade as hero scrolls away
      gsap.to(".hero-bg-img", {
        opacity: 0,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1.2 }
      });

      // Service cards — subtle 3D flip entrance
      gsap.fromTo(".svc",
        { opacity: 0, y: 70, rotationX: 14, transformPerspective: 900 },
        { opacity: 1, y: 0, rotationX: 0, stagger: { each: 0.1, from: "start" }, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-svc", start: "top 88%", once: true } });

      // Featured project cards — scale + rise
      gsap.fromTo(".fc",
        { opacity: 0, y: 80, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.18, duration: 1.1, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-feat", start: "top 88%", once: true } });

      // Stats — pop from center with big bounce
      gsap.fromTo(".st",
        { opacity: 0, scale: 0.3, y: 35 },
        { opacity: 1, scale: 1, y: 0, stagger: { each: 0.12, from: "center" }, duration: 0.95, ease: "back.out(2.8)",
          scrollTrigger: { trigger: ".sec-stats", start: "top 88%", once: true } });

      // About — blur-slide from sides
      gsap.fromTo(".al",
        { opacity: 0, x: -70, filter: "blur(6px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-about", start: "top 88%", once: true } });
      gsap.fromTo(".ar",
        { opacity: 0, x: 70, filter: "blur(6px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "expo.out", delay: 0.18,
          scrollTrigger: { trigger: ".sec-about", start: "top 88%", once: true } });

      // Tech pills — wave from left with bounce scale
      gsap.fromTo(".tp",
        { opacity: 0, y: 24, scale: 0.6 },
        { opacity: 1, y: 0, scale: 1, stagger: { each: 0.04, from: "start" }, duration: 0.55, ease: "back.out(2.2)",
          scrollTrigger: { trigger: ".sec-tech", start: "top 88%", once: true } });

      // Reviews — fade + rise stagger
      gsap.fromTo(".rv",
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, stagger: { each: 0.12, from: "start" }, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-reviews", start: "top 88%", once: true } });

      // CTA — dramatic scale + blur entrance
      gsap.fromTo(".cc",
        { opacity: 0, y: 80, scale: 0.9, filter: "blur(8px)" },
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-cta", start: "top 88%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const services = [
    { icon: Layout, title: "Frontend Development", desc: "Pixel-perfect responsive UIs with React, Next.js, and Tailwind CSS.", g: "from-blue-500 to-blue-700", glow: "hover:shadow-blue-500/15" },
    { icon: Server, title: "Full Stack Development", desc: "End-to-end solutions with Node.js, Express, MongoDB, and PostgreSQL.", g: "from-violet-500 to-violet-700", glow: "hover:shadow-violet-500/15" },
    { icon: Code, title: "WordPress Development", desc: "Custom themes, plugins, and CMS solutions for business websites.", g: "from-teal-500 to-teal-700", glow: "hover:shadow-teal-500/15" },
    { icon: Zap, title: "Performance Optimization", desc: "Speed audits, Core Web Vitals improvements, and scalable architecture.", g: "from-orange-500 to-orange-600", glow: "hover:shadow-orange-500/15" },
  ];
  const projects = [
    { title: "Vividhood - Beauty Salon Booking", desc: "Hong Kong beauty salon booking platform with real-time availability, verified salon profiles, and smart search by service, location & date.", img: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Next.js", "TypeScript", "Cloudinary"], url: "https://vividhood.com/en" },
    { title: "Elite Club Fitness", desc: "Premium UK gym website driving memberships with modern UI and design.", img: "/images/ecf.png", tags: ["Next.js", "Tailwind CSS", "TypeScript"], url: "https://www.eliteclubfitness.co.uk/elite-gym" },
    { title: "Plantory - Plant Business Directory", desc: "Online directory connecting users with verified nurseries, plant shops, landscapers & florists. Smart search with category and location filters.", img: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800", tags: ["Next.js", "TypeScript", "Tailwind CSS"], url: "https://platory-project.vercel.app/" },
  ];
  const stats = [{ v: "2+", l: "Years Experience" }, { v: "10+", l: "Projects Completed" }, { v: "5+", l: "Happy Clients" }, { v: "100%", l: "Dedication" }];
  const techs = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Firebase", "WordPress", "Stripe", "Strapi", "HTML", "CSS", "Git"];
  const gridBg = { backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "64px 64px" };
  const gridBg2 = { backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)", backgroundSize: "40px 40px" };

  return (
    <div ref={ref} className="bg-[#050508]">
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image with scroll-out */}
        <div className="hero-bg-img absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* dark overlay so text is readable */}
          <div className="absolute inset-0 bg-[#050508]/75" />
          {/* gradient fade to solid at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/30 via-transparent to-[#050508]" />
        </div>
        <div className="absolute inset-0 z-0" style={gridBg} />
        <div className="orb-1 absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none z-0" />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pt-28 pb-20">
          {/* LEFT: text content */}
          <div className="flex-1">
          <div className="hb opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-blue-300 text-xs font-semibold mb-10 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Available for new projects
          </div>
          <div className="mb-4 leading-none tracking-tight overflow-hidden">
            <div className="ht-1 opacity-0 text-7xl md:text-9xl font-black text-white">Ansar</div>
            <div className="ht-2 opacity-0 text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">Sultan</div>
          </div>
          <div className="hr opacity-0 flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
            <span className="text-blue-400 font-semibold text-xs tracking-[0.25em] uppercase">Full Stack Developer</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/60" />
          </div>
          <p className="hs opacity-0 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Crafting <span className="text-white font-semibold">beautiful</span>, <span className="text-white font-semibold">performant</span> and <span className="text-white font-semibold">user-centered</span> digital experiences from Islamabad, Pakistan.
          </p>
          <div className="hc opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link to="/projects" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-black rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl text-sm">
              View My Work <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/AnsarSultan.pdf" download className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.12] text-white font-bold rounded-full hover:border-blue-400/50 hover:bg-white/[0.04] transition-all duration-300 hover:scale-105 text-sm">
              Download CV
            </a>
          </div>
          <div className="hso opacity-0 flex justify-center gap-3">
            {[{ href: "https://github.com/ansarSultan999", icon: Github, l: "GitHub" }, { href: "https://www.linkedin.com/in/ansar-sultan-555465274/", icon: Linkedin, l: "LinkedIn" }, { href: "https://mail.google.com/mail/?view=cm&fs=1&to=ansarsultan2002@gmail.com", icon: Mail, l: "Email" }].map(s => {
              const Icon = s.icon;
              return (
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.l}
                  className="p-3 bg-white/[0.04] border border-white/10 rounded-xl hover:bg-white/[0.08] hover:border-blue-500/40 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
          </div>{/* end text col */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050508] to-transparent" />
      </section>

      <section className="sec-svc py-32 bg-[#050508]">
        <div className="relative">
          {/* Animated orb background */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-teal-600/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">What I Do</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Services I Offer</h2>
              <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">From concept to deployment - complete web solutions tailored to your needs.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className={"svc opacity-0 group relative p-7 rounded-2xl bg-white/[0.05] border border-white/[0.09] " + s.glow + " hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-xl"}>
                    <div className={"absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-bl " + s.g + " opacity-[0.13] blur-3xl group-hover:opacity-[0.22] transition-opacity rounded-full"} />
                    <div className={"inline-flex p-3 bg-gradient-to-br " + s.g + " rounded-xl text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"}><Icon size={28} /></div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug tracking-tight" style={{fontFamily: "'Space Grotesk', sans-serif"}}>{s.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed" style={{fontFamily: "'Inter', sans-serif"}}>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-feat py-32 bg-[#070710]">
        <div className="relative">
          {/* Animated orb background */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-br from-violet-600/10 via-blue-600/10 to-teal-600/10 rounded-full blur-[130px] pointer-events-none z-0 animate-pulse-slow" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
              <div>
                <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">My Work</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">Featured Projects</h2>
                <p className="text-gray-500 text-sm">A selection of real-world projects I have built</p>
              </div>
              <Link to="/projects" className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors text-sm">
                View All Projects <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="fc opacity-0 group block rounded-2xl overflow-hidden border border-white/[0.09] hover:border-white/[0.22] bg-white/[0.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/[0.10] transition-all duration-500 backdrop-blur-xl">
                  <div className="relative overflow-hidden h-52 bg-gray-900">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 right-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ExternalLink size={13} className="text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug" style={{fontFamily: "'Space Grotesk', sans-serif"}}>{p.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3" style={{fontFamily: "'Inter', sans-serif"}}>{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">{p.tags.map((t, ti) => <span key={ti} className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">{t}</span>)}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-stats py-0 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="st opacity-0 text-center py-16 px-6 hover:bg-white/[0.02] transition-colors">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">{s.v}</div>
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-about py-32 bg-[#070710]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="al opacity-0 space-y-7">
              <div>
                <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">About Me</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">Passionate Developer<br /><span className="text-gray-600">from Pakistan</span></h2>
                <p className="text-gray-400 text-sm leading-relaxed">With 2+ years of hands-on experience, I specialize in building responsive web apps. Currently working as a Full Stack Developer at <span className="text-blue-400 font-semibold">Softwareforge</span>, delivering products across aviation, fitness, automotive, and service industries.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"].map(t => (
                  <span key={t} className="px-3.5 py-2 bg-white/[0.04] border border-white/[0.08] text-gray-400 rounded-full text-xs font-medium hover:border-blue-500/30 hover:text-blue-300 transition-all cursor-default">{t}</span>
                ))}
              </div>
              <Link to="/about" className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-900 font-black rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-sm shadow-lg">
                More About Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="ar opacity-0 grid grid-cols-2 gap-4">
              {[
                { label: "BSCS Graduate", sub: "Virtual University", g: "from-blue-500/15 to-transparent", b: "border-blue-500/15" },
                { label: "Full Stack Dev", sub: "Softwareforge - Current", g: "from-violet-500/15 to-transparent", b: "border-violet-500/15" },
                { label: "Internship 2024", sub: "BCI New Media, Karachi", g: "from-teal-500/15 to-transparent", b: "border-teal-500/15" },
                { label: "Saylani SMIT", sub: "Batch 11, Karachi", g: "from-pink-500/15 to-transparent", b: "border-pink-500/15" },
              ].map((it, i) => (
                <div key={i} className={"relative p-7 bg-gradient-to-br " + it.g + " rounded-2xl border " + it.b + " hover:scale-[1.03] transition-transform duration-300 cursor-default overflow-hidden"}>
                  <div className="font-black text-white text-base leading-snug">{it.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{it.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-tech py-24 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gray-600 font-semibold text-xs uppercase tracking-[0.2em]">Tech Stack</span>
            <h2 className="text-3xl font-black text-white mt-2">Technologies I Work With</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((t, i) => <span key={i} className="tp opacity-0 px-5 py-3 bg-white/[0.03] border border-white/[0.07] rounded-full text-gray-400 text-sm font-medium hover:bg-white/[0.07] hover:border-blue-500/30 hover:text-white transition-all duration-300 cursor-default">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="sec-reviews py-32 bg-[#050508] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={gridBg} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-blue-300 text-xs font-semibold mb-6 tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              Client Reviews
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              What Clients{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Real feedback from clients I&apos;ve had the pleasure of working with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "James Carter",
                role: "CEO, Elite Club Fitness",
                country: "🇬🇧 UK",
                avatar: "JC",
                color: "from-blue-500 to-blue-700",
                stars: 5,
                review: "Ansar delivered an outstanding gym website that exceeded every expectation. The design is sleek, modern, and has genuinely increased our membership inquiries. His attention to detail and ability to translate our brand identity into a digital experience was remarkable."
              },
              {
                name: "Khalid Al-Mansoor",
                role: "Project Manager, DANS",
                country: "🇦🇪 UAE",
                avatar: "KM",
                color: "from-violet-500 to-violet-700",
                stars: 5,
                review: "Working with Ansar on our aviation airspace management system was a great experience. He understood the complexity of government-level requirements and built a precise, reliable, and clean interface. Highly professional throughout the entire project."
              },
              {
                name: "Sofia Reyes",
                role: "Founder, Plantory",
                country: "�🇰 Pakistan",
                avatar: "SR",
                color: "from-teal-500 to-teal-700",
                stars: 5,
                review: "Ansar built our plant business directory with exactly the functionality we needed — smart filters, clean listings, and a beautiful UI. He was communicative, delivered on time, and the end result looks incredibly professional. Highly recommend!"
              },
              {
                name: "Farrukh Tashkentov",
                role: "Owner, Dublio",
                country: "�🇿 Uzbekistan",
                avatar: "FT",
                color: "from-orange-500 to-orange-700",
                stars: 5,
                review: "The product showcase website Ansar created for us has smooth animations and a modern look that perfectly represents our brand. The AOS effects and responsive layout work flawlessly across all devices. Great developer to work with!"
              },
              {
                name: "Faisal Ahmed",
                role: "Director, Service Platform",
                country: "🇵🇰 Pakistan",
                avatar: "FA",
                color: "from-pink-500 to-pink-700",
                stars: 5,
                review: "Ansar developed our service provider platform with a solid Supabase backend and a clean React frontend. Role-based access, dynamic routing, everything works perfectly. He is proactive, skilled, and delivers clean code."
              },
              {
                name: "Mark Sullivan",
                role: "CTO, BigFleet",
                country: "�🇸 USA",
                avatar: "MS",
                color: "from-cyan-500 to-cyan-700",
                stars: 5,
                review: "Ansar built our entire fleet booking platform with three separate dashboards — Vendor, Corporate, and Admin. The complexity was high but he handled it flawlessly. The UI is clean, responsive, and our clients love using it. Top-tier developer."
              },
            ].map((r, i) => (
              <div key={i} className="rv opacity-0 group flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.13] hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                {/* Review text */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">&ldquo;{r.review}&rdquo;</p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">{r.name}</div>
                    <div className="text-gray-500 text-xs">{r.role} &middot; {r.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-cta py-36 bg-[#070710] relative overflow-hidden">
        <div className="absolute inset-0" style={gridBg2} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="cc opacity-0 max-w-3xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">Ready to build<br /><span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">something amazing?</span></h2>
          <p className="text-gray-500 text-base mb-12 leading-relaxed max-w-sm mx-auto">Available for freelance and full-time opportunities. Lets create something great together.</p>
          <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-black rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl text-sm">
            Lets Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;
