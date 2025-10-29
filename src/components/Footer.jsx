import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#0b0f17] text-gray-400 py-10 px-6 md:px-20 border-t border-gray-800 text-center">
    <h3 className="font-semibold text-lg text-white mb-4">Lautaro Sosa</h3>
    <div className="flex justify-center gap-6 text-2xl mb-4">
      <a href="https://github.com/FACUU04" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/lautaro-facundo-sosa-155a392b9/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
      <a href="mailto:facundososa550@gmail.com" className="hover:text-orange-400 transition"><FaEnvelope /></a>
    </div>
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;
