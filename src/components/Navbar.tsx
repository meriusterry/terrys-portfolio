import React, { useState, useEffect } from "react";
import Logo from "../assets/images/bg.jpeg"; // adjust path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const fullText = "Turning Complexity into Simplicity.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const links = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Typing animation
  useEffect(() => {
    const typingSpeed = isDeleting ? 0 : 200;
    const timeout = setTimeout(() => {
      setDisplayedText(fullText.substring(0, index));
      if (!isDeleting && index < fullText.length) {
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setIndex(index - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 8000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(link.toLowerCase());
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-700/90 backdrop-blur-md shadow-lg rounded-b-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="cursor-pointer flex flex-col"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex items-center gap-3">
            
            <span className="text-xl font-bold text-white hover:text-teal-500 transition">
             TERRY TECHNOLOGY SOLUTIONS (TTS)
            </span>
          </div>
          {/* Typing Animation */}
          <span className="text-green-400 font-medium text-sm mt-1">
            {displayedText}
            
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition-colors duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-teal-400 font-bold"
                    : "hover:text-teal-400"
                }`}
              >
                {link}
              </a>
              <span
                className={`absolute left-0 -bottom-1 h-1 bg-teal-400 transition-all duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer hover:text-teal-400 transition"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>



 {/* Mobile Slide-In Menu */}
      <div
        className={`
          md:hidden fixed top-20 right-0 h-half bg-gray-900 shadow-lg
          w-2/4 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col items-left p-10 gap-6 py-6">
          {links.map((link) => (
            <li
              key={link}
              className={`text-md transition duration-300 ${
                activeSection === link.toLowerCase()
                  ? "text-teal-400 font-bold"
                  : "text-white hover:text-teal-600 hover:scale-105"
              }`}
            >
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Cursor Animation */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            margin-left: 2px;
            width: 1px;
            background-color: white;
            animation: blink 0.7s infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
