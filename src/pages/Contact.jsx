import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient orb float
      gsap.to(".contact-orb", { y: -22, x: 16, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true });

      // Hero entrance — blur + rise stagger
      gsap.fromTo(".ch",
        { opacity: 0, y: 55, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "expo.out", stagger: 0.2 }
      );

      // Contact info cards — blur + slide from left, staggered
      gsap.fromTo(".ci",
        { opacity: 0, x: -65, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, stagger: { each: 0.15, from: "start" }, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: ".sec-contact", start: "top 88%", once: true } }
      );

      // Form panel — scale + slide from right
      gsap.fromTo(".cf",
        { opacity: 0, x: 65, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "expo.out", delay: 0.1,
          scrollTrigger: { trigger: ".sec-contact", start: "top 88%", once: true } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill in all required fields."); return; }
    setError(""); setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false); setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const gridBg = { backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "64px 64px" };

  const contacts = [
    { icon: Mail, label: "Email", value: "ansarsultan2002@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ansarsultan2002@gmail.com", color: "blue" },
    { icon: Phone, label: "Phone", value: "+92 315 7511825", href: "tel:+923157511825", color: "teal" },
    { icon: MapPin, label: "Location", value: "Bahria Town Phase 6, Islamabad", href: null, color: "violet" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", handle: "@ansarSultan999", href: "https://github.com/ansarSultan999" },
    { icon: Linkedin, label: "LinkedIn", handle: "Ansar Sultan", href: "https://www.linkedin.com/in/ansar-sultan-555465274/" },
    { icon: Mail, label: "Gmail", handle: "ansarsultan2002", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ansarsultan2002@gmail.com" },
  ];

  const colorMap = {
    blue:   { icon: "text-blue-400",   ring: "border-blue-500/20",   bg: "from-blue-500/10"   },
    teal:   { icon: "text-teal-400",   ring: "border-teal-500/20",   bg: "from-teal-500/10"   },
    violet: { icon: "text-violet-400", ring: "border-violet-500/20", bg: "from-violet-500/10" },
  };

  return (
    <div ref={ref} className="bg-[#050508] min-h-screen">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={gridBg} />
        <div className="contact-orb absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-600/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="ch opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-teal-300 text-xs font-semibold mb-8 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Lets Connect
          </div>
          <h1 className="ch opacity-0 text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Get In <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="ch opacity-0 text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I would love to hear from you. Send me a message and I will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="sec-contact py-24 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              {contacts.map((c, i) => {
                const Icon = c.icon; const col = colorMap[c.color];
                return (
                  <div key={i} className="ci opacity-0">
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer"
                        className={"group flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r " + col.bg + " to-transparent border " + col.ring + " hover:border-white/20 transition-all duration-300 hover:-translate-y-1"}>
                        <div className={"p-3 bg-white/[0.06] rounded-xl border " + col.ring}>
                          <Icon size={18} className={col.icon} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{c.label}</p>
                          <p className="text-white font-semibold text-sm truncate">{c.value}</p>
                        </div>
                        <ExternalLink size={13} className="text-gray-600 group-hover:text-gray-400 transition-colors mt-1 shrink-0" />
                      </a>
                    ) : (
                      <div className={"flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r " + col.bg + " to-transparent border " + col.ring}>
                        <div className={"p-3 bg-white/[0.06] rounded-xl border " + col.ring}>
                          <Icon size={18} className={col.icon} />
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{c.label}</p>
                          <p className="text-white font-semibold text-sm">{c.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="ci opacity-0 pt-4">
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-4 font-semibold">Follow Me</p>
                <div className="flex gap-3">
                  {socials.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                        className="group flex flex-col items-center gap-1.5 p-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex-1">
                        <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-gray-600 text-xs group-hover:text-gray-400 transition-colors">{s.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 cf opacity-0">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] h-full">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">Thank you for reaching out. I will get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="px-6 py-3 bg-white/[0.06] border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] space-y-5">
                  <h3 className="text-lg font-black text-white mb-6">Send a Message</h3>
                  {error && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">{error}</div>}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3.5 rounded-xl outline-none placeholder-gray-600 focus:border-blue-500/60 focus:bg-white/[0.05] transition-all duration-200" />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                        className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3.5 rounded-xl outline-none placeholder-gray-600 focus:border-blue-500/60 focus:bg-white/[0.05] transition-all duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?"
                      className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3.5 rounded-xl outline-none placeholder-gray-600 focus:border-blue-500/60 focus:bg-white/[0.05] transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider">Message *</label>
                    <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..."
                      className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3.5 rounded-xl outline-none placeholder-gray-600 focus:border-blue-500/60 focus:bg-white/[0.05] transition-all duration-200 resize-none" />
                  </div>
                  <button type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-white text-gray-900 font-black rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg text-sm">
                    {sending ? (
                      <><span className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={15} />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
