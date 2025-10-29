import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificados = [
  {
    id: 1,
    title: "SQL y Bases de Datos",
    institucion: "Coderhouse – 2024",
    image: "/Certificado_SQL.jpeg",
  },
  {
    id: 2,
    title: "HTML y CSS",
    institucion: "Oracle Next Education – 2024",
    image: "/Certificado_HTMLCSS.jpeg",
  },
  {
    id: 4,
    title: "JavaScript",
    institucion: "Oracle Next Education – 2024",
    image: "/Certificado_Javascript.jpeg",
  },
  {
    id: 5,
    title: "JAVA",
    institucion: "Oracle Next Education – 2024",
    image: "/Certificado_JAVa.jpeg",
  },
  {
    id: 6,
    title: "Java",
    institucion: "Oracle Next Education – 2024",
    image: "/Certificado_JAVA2.jpeg",
  },
  {
    id: 7,
    title: "Git",
    institucion: "Oracle Next Education – 2024",
    image: "/Certificado_Git.jpeg",
  },
  {
    id: 8,
    title: "Habilidades Blandas",
    institucion: "Oracle Next Education – 2024",
    image: "/Certificado_HabilidadesBlandas.jpeg",
  },
  {
    id: 9,
    title: "HTML",
    institucion: "UBA Rojas – 2021",
    image: "/Certificado_HTML.jpeg",
  },
];

const Certificados = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificados"
      className="py-20 px-6 md:px-20 bg-[#0d1117] text-center"
    >
      <h3 className="text-2xl text-gray-400 mb-2">Logros</h3>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-12">
        Mis certificados
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificados.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(249, 115, 22, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="relative bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setSelected(cert)}
          >
            <div className="overflow-hidden">
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">{cert.institucion}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-[90%] max-h-[90%] bg-[#161b22] rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white bg-gray-800/50 hover:bg-gray-800/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg z-10"
              >
                ×
              </button>

              {/* Título */}
              <div className="p-4 text-center border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">
                  {selected.title}
                </h3>
                <p className="text-gray-400 text-sm">{selected.institucion}</p>
              </div>

              {/* Imagen */}
              <motion.img
                src={selected.image}
                alt={selected.title}
                className="w-full object-contain max-h-[calc(100%-64px)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificados;
