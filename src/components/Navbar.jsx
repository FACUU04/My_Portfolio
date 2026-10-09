import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const links = [
    { name: t("navbar.home"), href: "#inicio" },
    { name: t("navbar.about"), href: "#sobre-mi" },
    { name: t("navbar.projects"), href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0d1117]/90 backdrop-blur-sm text-white shadow-md z-50 px-6 py-3 border-b border-gray-800">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo / Nombre */}
        <div className="flex items-center gap-3">
          <img
            src="/perfil2.jpeg"
            alt="Foto"
            className="w-10 h-10 rounded-full border border-violet-500 object-cover"
          />
          <span className="font-semibold text-lg">Sosa Lautaro</span>
        </div>

        {/* Menú Desktop y Botón de Idioma */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-gray-300">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <a href={link.href} className="transition-all duration-300 group-hover:text-orange-400 font-medium">
                  {link.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#161b22] border border-gray-700 hover:border-purple-500 transition-all hover:scale-110 shadow-lg"
            title={i18n.language.startsWith("es") ? "Switch to English" : "Cambiar a Español"}
          >
            {/* AQUÍ LA CORRECCIÓN: leading-none y -mt-[2px] centran el emoji a la perfección */}
            <span className="text-xl leading-none -mt-[2px]">
              {i18n.language.startsWith("es") ? "🇦🇷" : "🇺🇸"}
            </span>
          </button>
        </div>

        {/* Controles Mobile (Hamburguesa + Idioma) */}
        <div className="md:hidden flex items-center gap-4">
          {/* MISMA CORRECCIÓN PARA CELULAR */}
          <button 
            onClick={toggleLanguage} 
            className="text-2xl transition-transform active:scale-90 flex items-center justify-center leading-none -mt-[2px]"
          >
            {i18n.language.startsWith("es") ? "🇦🇷" : "🇺🇸"}
          </button>
          
          <button onClick={() => setOpen(!open)} className="text-2xl text-gray-300 flex items-center justify-center">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-gray-300 bg-[#161b22] rounded-lg p-4 shadow-lg border border-gray-800">
          {links.map((link) => (
            <li key={link.name} className="group">
              <a href={link.href} className="block transition-all duration-300 group-hover:text-orange-400 font-medium" onClick={() => setOpen(false)}>
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