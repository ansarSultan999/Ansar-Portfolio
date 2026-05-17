import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, MapPin, Mail, Phone, Calendar, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { title: "Frontend", color: "blue", skills: [
    { name: "React / Next.js", level: 90 }, { name: "TypeScript", level: 82 },
    { name: "Tailwind CSS", level: 92 }, { name: "JavaScript (ES6+)", level: 90 },
  ]},
  { title: "Backend", color: "violet", skills: [
    { name: "Node.js / Express", level: 80 }, { name: "MongoDB", level: 78 },
    { name: "PostgreSQL", level: 70 }, { name: "REST APIs", level: 85 },
  ]},
  { title: "Tools", color: "teal", skills: [
    { name: "Git / GitHub", level: 88 }, { name: "Figma", level: 75 },
    { name: "WordPress", level: 80 }, { name: "Firebase", level: 72 },
  ]},
];

const experience = [
  { title: "Full Stack Developer", company: "Softwareforge", period: "2024 - Present", location: "Islamabad", type: "Full Time", desc: "Building and maintaining full-stack web applications using React, Next.js, Node.js, and MongoDB. Delivered multiple production projects across automotive, fitness, and service industries.", color: "blue" },
  { title: "Frontend Developer", company: "Arteontechnology", period: "2024", location: "Karachi", type: "Internship", desc: "Worked on responsive UI components and implemented modern design systems using React and Tailwind CSS.", color: "violet" },
  { title: "Frontend Developer", company: "BCI New Media", period: "2024", location: "Karachi", type: "Internship", desc: "Built responsive websites and landing pages. Collaborated with design team to translate Figma prototypes into pixel-perfect implementations.", color: "teal" },
  { title: "MERN Stack Trainee", company: "Saylani SMIT", period: "2022 - 2023", location: "Karachi", type: "Training", desc: "Completed intensive MERN Stack training program (Batch 11). Built 5+ projects including e-commerce and dashboard applications.", color: "pink" },
];

const education = [
  { degree: "Bachelor of Science in Computer Science", institution: "Virtual University of Pakistan", period: "2021 - 2025", desc: "BSCS with focus on software engineering, algorithms, and web technologies.", color: "blue" },
  { degree: "Intermediate (Pre-Engineering)", institution: "Punjab Group of Colleges", period: "2019 - 2021", desc: "Pre-Engineering with distinction.", color: "violet" },
  { degree: "Matriculation (Science)", institution: "FA Board School", period: "2017 - 2019", desc: "Science stream with excellent grades.", color: "teal" },
];

const colorMap = {
  blue:   { bar: "bg-blue-500",   pill: "bg-blue-500/10 border-blue-500/20 text-blue-300",   dot: "bg-blue-400",   glow: "bg-blue-500/10 border-blue-500/20" },
  violet: { bar: "bg-violet-500", pill: "bg-violet-500/10 border-violet-500/20 text-violet-300", dot: "bg-violet-400", glow: "bg-violet-500/10 border-violet-500/20" },
  teal:   { bar: "bg-teal-500",   pill: "bg-teal-500/10 border-teal-500/20 text-teal-300",   dot: "bg-teal-400",   glow: "bg-teal-500/10 border-teal-500/20" },
  pink:   { bar: "bg-pink-500",   pill: "bg-pink-500/10 border-pink-500/20 text-pink-300",   dot: "bg-pink-400",   glow: "bg-pink-500/10 border-pink-500/20" },
};

const About = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient orb float
      gsap.to(".about-orb", { y: -20, x: 12, duration: 10, ease: "sine.inOut", repeat: -1, yoyo: true });

      // Hero entrance — staggered blur + rise
      gsap.fromTo(".ab-hero",
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "expo.out", stagger: 0.2 }
      );

      // Skill cards — 3D flip entrance
      gsap.fromTo(".skill-block",
        { opacity: 0, y: 60, rotationX: 14, transformPerspective: 900 },
        { opacity: 1, y: 0, rotationX: 0, stagger: { each: 0.15, from: "start" }, duration: 1.05, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-skills", start: "top 88%", once: true } }
      );

      // Skill bars — animated fill with glow
      document.querySelectorAll(".skill-bar-fill").forEach(el => {
        const level = el.getAttribute("data-level");
        gsap.fromTo(el,
          { width: "0%" },
          { width: level + "%", duration: 1.8, ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true } }
        );
      });

      // Experience items — blur + slide from left, staggered
      gsap.fromTo(".exp-item",
        { opacity: 0, x: -65, filter: "blur(4px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", stagger: { each: 0.15, from: "start" }, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-exp", start: "top 88%", once: true } }
      );

      // Education items — same treatment
      gsap.fromTo(".edu-item",
        { opacity: 0, x: -65, filter: "blur(4px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", stagger: { each: 0.15, from: "start" }, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-edu", start: "top 88%", once: true } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const gridBg = { backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "64px 64px" };

  return (
    <div ref={ref} className="bg-[#050508] min-h-screen">
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0" style={gridBg} />
        <div className="about-orb absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="ab-hero opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-blue-300 text-xs font-semibold mb-8 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> About Me
          </div>
          <h1 className="ab-hero opacity-0 text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Ansar <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Sultan</span>
          </h1>
          <p className="ab-hero opacity-0 text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-10">
            A passionate Full Stack Developer from Islamabad, Pakistan. I love building digital products that are fast, accessible, and visually stunning. Currently crafting software at <span className="text-blue-400 font-semibold">Softwareforge</span>.
          </p>
          <div className="ab-hero opacity-0 flex flex-wrap justify-center gap-4 text-sm">
            {[{ icon: MapPin, text: "Bahria Town Phase 6, Islamabad" }, { icon: Mail, text: "ansarsultan2002@gmail.com" }, { icon: Phone, text: "+92 315 7511825" }].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-gray-400">
                  <Icon size={13} className="text-blue-400" />{item.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec-skills py-32 bg-[#070710]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, ci) => {
              const c = colorMap[cat.color];
              return (
                <div key={ci} className={"skill-block opacity-0 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/12 transition-all duration-300"}>
                  <div className={"inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold mb-7 " + c.pill}>{cat.title}</div>
                  <div className="space-y-5">
                    {cat.skills.map((sk, si) => (
                      <div key={si}>
                        <div className="flex justify-between text-xs mb-2">
                          <span className="text-gray-300 font-medium">{sk.name}</span>
                          <span className="text-gray-500">{sk.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className={"skill-bar-fill h-full rounded-full " + c.bar} data-level={sk.level} style={{ width: "0%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec-exp py-32 bg-[#050508]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">Career</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Experience</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/5 to-transparent" />
            <div className="space-y-8">
              {experience.map((exp, i) => {
                const c = colorMap[exp.color];
                return (
                  <div key={i} className="exp-item opacity-0 relative pl-20">
                    <div className={"absolute left-5 top-7 w-6 h-6 rounded-full border-2 border-[#050508] " + c.dot} />
                    <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/12 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-bold text-base">{exp.title}</h3>
                          <p className={"font-semibold text-sm " + (exp.color === "blue" ? "text-blue-400" : exp.color === "violet" ? "text-violet-400" : exp.color === "teal" ? "text-teal-400" : "text-pink-400")}>{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className={"px-3 py-1 rounded-full text-xs font-semibold border " + c.pill}>{exp.type}</span>
                          <span className="flex items-center gap-1 text-gray-500 text-xs"><Calendar size={11} />{exp.period}</span>
                          <span className="flex items-center gap-1 text-gray-500 text-xs"><MapPin size={11} />{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-edu py-32 bg-[#070710]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">Background</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">Education</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/5 to-transparent" />
            <div className="space-y-8">
              {education.map((edu, i) => {
                const c = colorMap[edu.color];
                return (
                  <div key={i} className="edu-item opacity-0 relative pl-20">
                    <div className={"absolute left-5 top-7 w-6 h-6 rounded-full border-2 border-[#070710] " + c.dot} />
                    <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/12 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-bold text-base">{edu.degree}</h3>
                          <p className={"font-semibold text-sm " + (edu.color === "blue" ? "text-blue-400" : edu.color === "violet" ? "text-violet-400" : "text-teal-400")}>{edu.institution}</p>
                        </div>
                        <span className="flex items-center gap-1 text-gray-500 text-xs"><Calendar size={11} />{edu.period}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{edu.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
