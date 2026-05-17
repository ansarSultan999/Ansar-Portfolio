import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={"fixed top-0 left-0 w-full z-50 transition-all duration-300 " +
      (scrolled ? "bg-[#050508]/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Ansar<span className="text-white">.</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink key={item.path} to={item.path} end={item.path === "/"}
                className={({ isActive }) =>
                  "text-sm font-medium transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 " +
                  (isActive ? "text-blue-400 after:w-full" : "after:w-0 hover:after:w-full text-gray-400 hover:text-white")
                }>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact"
              className="px-5 py-2.5 bg-white text-gray-900 text-sm font-black rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Hire Me
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.06] bg-[#050508]/95 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col space-y-1 px-2">
              {navItems.map(item => (
                <NavLink key={item.path} to={item.path} end={item.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 text-sm font-medium rounded-xl transition-colors " +
                    (isActive ? "text-blue-400 bg-blue-500/10" : "text-gray-400 hover:text-white hover:bg-white/[0.05]")
                  }>
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}
                className="mx-2 mt-2 text-center py-3 bg-white text-gray-900 text-sm font-black rounded-full hover:bg-blue-50 transition-all">
                Hire Me
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
