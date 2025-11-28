import React from "react";
import Logo from "../assets/images/bg.jpeg"; // adjust relative path

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

      {/* Branding */}
      <div className="md:col-span-1">
        <div className="flex flex-col items-center md:items-start">
        
          <h2 className="text-2xl font-bold text-teal-400 mb-2">Terry Technology Solutions (TTS)</h2>
          <p className="text-sm text-gray-400 leading-6">
           Turning Complexity into Simplicity<br />

          </p>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-teal-400">Navigation</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="hover:text-teal-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-teal-300 transition">About</a></li>
          <li><a href="#services" className="hover:text-teal-300 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-teal-300 transition">Contact</a></li>
        </ul>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-teal-400">Locations</h3>
        <p className="text-sm leading-6">
          Pretoria, 
          Gauteng<br />
          
        </p>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-teal-400">Contact</h3>
        <p className="text-sm leading-6">
          <span className="font-medium text-white">Phone:</span><br />
          <a href="tel:+27761969267" className="text-teal-300 hover:underline">+27 60 757 7774</a>
        </p>
        <p className="text-sm leading-6 mt-2">
          <span className="font-medium text-white">Email:</span><br />
          <a href="mailto:masheleprosperityphum@gmail.com" className="text-teal-300 hover:underline">
            terrymerius@gmail.com
          </a>
        </p>
      </div>

    </div>

    {/* Bottom text */}
    <div className="text-center mt-10 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Terry Technology Solution — All rights reserved.
    </div>
  </footer>
);

export default Footer;
