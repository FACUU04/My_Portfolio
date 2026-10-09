import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

const App = () => {
  const [mostrarCertificados, setMostrarCertificados] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-[#0d1117] text-[#f3f4f6] font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        
        {/* Botón para mostrar/ocultar certificados */}
        <div className="bg-[#0d1117] pb-20 pt-10 flex flex-col items-center">
          <motion.button
            onClick={() => setMostrarCertificados(!mostrarCertificados)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#161b22] border border-orange-500 text-orange-400 font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-orange-600/20 z-10"
          >
            {mostrarCertificados ? t("certificates.hide") : t("certificates.show")}
          </motion.button>

          <AnimatePresence>
            {mostrarCertificados && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full overflow-hidden mt-8"
              >
                <Certificates />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;