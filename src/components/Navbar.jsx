import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0d1117]/90 backdrop-blur-sm text-white shadow-md z-50 px-6 py-3">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <img
            src="/perfil2.jpeg"
            alt="Foto"
            className="w-10 h-10 rounded-full border border-violet-500 object-cover"
          />
          <span className="font-semibold text-lg">Sosa Lautaro</span>
        </div>

    
        <ul className="hidden md:flex gap-6 text-gray-300">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="transition-all duration-300 group-hover:text-orange-400"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

       
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-gray-300">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-gray-300 bg-[#0d1117]/95 rounded-lg p-4 shadow-lg">
          {links.map((link) => (
            <li key={link.name} className="group">
              <a
                href={link.href}
                className="block transition-all duration-300 group-hover:text-orange-400"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
              <span className="block w-0 h-[2px] bg-gradient-to-r from-violet-500 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
