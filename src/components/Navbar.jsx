import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Nitish</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>

        {/* Connect Button (Desktop) */}
        <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105">
          Connect Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
          // aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center space-y-4 px-6 py-4 bg-black transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#home" className="hover:text-gray-400 transition">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400 transition">
          About Me
        </a>
        <a href="#services" className="hover:text-gray-400 transition">
          Services
        </a>
        <a href="#projects" className="hover:text-gray-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
