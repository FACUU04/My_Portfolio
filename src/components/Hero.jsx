import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white text-center px-4"
    >
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-orange-400 to-violet-500 bg-clip-text text-transparent"
      >
        Sosa Lautaro
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-2xl md:text-3xl mt-4 text-gray-300"
      >
        Desarrollador Java | FullStack & Analista SQL
      </motion.h2>

      <p className="mt-6 text-gray-400 max-w-md">
        Apasionado por el desarrollo de software fullstack, la optimización de bases de datos
        y las soluciones creativas para la web y aplicaciones modernas.
      </p>

      
      <div className="flex gap-6 mt-8">
        <motion.a
          href="https://github.com/FACUU04"
          target="_blank"
          whileHover={{
            scale: 1.2,
            rotate: 5,
            boxShadow: "0 0 15px #8b5cf6",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-[#161b22] text-violet-400 p-3 rounded-full border border-violet-500 hover:bg-violet-600/20 transition-colors"
        >
          <FaGithub size={24} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/lautaro-facundo-sosa-155a392b9/"
          target="_blank"
          whileHover={{
            scale: 1.2,
            rotate: -5,
            boxShadow: "0 0 15px #f97316",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-[#161b22] text-orange-400 p-3 rounded-full border border-orange-500 hover:bg-orange-600/20 transition-colors"
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>

      
      <a href="/CV Sosa Lautaro.pdf" download>
  <motion.button
    onClick={() => setIsClicked(true)}
    className="relative overflow-hidden mt-8 bg-gradient-to-r from-violet-500 to-orange-400 text-white font-semibold px-8 py-3 rounded-lg"
  >
    <span className="relative z-10">
      {isClicked ? "Descargando..." : "Descargar CV"}
    </span>
    <motion.span
      className="absolute inset-0 bg-[#22d3ee] opacity-30"
      initial={{ y: "100%" }}
      animate={isClicked ? { y: 0 } : { y: "100%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={() => setIsClicked(false)}
    />
  </motion.button>
</a>

    </section>
  );
};

export default Hero;
//by FACU0408