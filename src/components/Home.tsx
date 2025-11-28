import React, { useState, useEffect } from "react";

export default function Home() {
  const fullText = "Empowering Digital Transformation";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 0 : 150;

    const timeout = setTimeout(() => {
      setDisplayedText(fullText.substring(0, index));

      if (!isDeleting && index < fullText.length) {
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setIndex(index - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 10000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-gray-800 text-white flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT SECTION */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-teal-300 mb-6">
            {displayedText}
            
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            At Terry Technology Solutions, we build modern, scalable, and reliable
            systems that help your business grow, operate efficiently, and stay ahead
            in a fast-changing digital world.
          </p>

          <a
            href="#services"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>

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
    </section>
  );
}
