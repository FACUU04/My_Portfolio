import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificados = [
  { id: 1, title: "SQL y Bases de Datos", institucion: "Coderhouse – 2024", image: "/Certificado_SQL.jpeg" },
  { id: 2, title: "HTML y CSS", institucion: "Oracle Next Education – 2024", image: "/Certificado_HTMLCSS.jpeg" },
  { id: 4, title: "JavaScript", institucion: "Oracle Next Education – 2024", image: "/Certificado_Javascript.jpeg" },
  { id: 5, title: "JAVA", institucion: "Oracle Next Education – 2024", image: "/Certificado_JAVa.jpeg" },
  { id: 6, title: "Java", institucion: "Oracle Next Education – 2024", image: "/Certificado_JAVA2.jpeg" },
  { id: 7, title: "Git", institucion: "Oracle Next Education – 2024", image: "/Certificado_Git.jpeg" },
  { id: 8, title: "Habilidades Blandas", institucion: "Oracle Next Education – 2024", image: "/Certificado_HabilidadesBlandas.jpeg" },
  { id: 9, title: "HTML", institucion: "UBA Rojas – 2021", image: "/Certificado_HTML.jpeg" },
  { id: 10, title: "Clean_Code", institucion: "UDEMY - 2026", image: "/public/CertificadoCleanCODE.png" },
  { id: 11, title: "Git", institucion: "UDEMY - 2026", image: "/public/CertificadoGit.png" },
  { id: 12, title: "Java", institucion: "UDEMY - 2026", image: "/public/CertificadoPatronesDiseño.png" },
  { id: 13, title: "PLSQL", institucion: "UDEMY - 2026", image: "/public/CertificadoPLSQL.png" },
  { id: 14, title: "SCRUM", institucion: "UDEMY - 2026", image: "/public/CertificadoSCRUM.png" },
  { id: 15, title: "Swagger and OpenAPI", institucion: "UDEMY - 2026", image: "/public/CertificadoSwagger.png" },
  { id: 16, title: "UnitTest", institucion: "UDEMY - 2026", image: "/public/CertificadoUnitTest.png" },
  { id: 17, title: "Habilidades Blandas", institucion: "Oracle Next Education – 2024", image: "/public/aprender.jpg" },
  { id: 18, title: "JAVA", institucion: "Oracle Next Education – 2024", image: "/public/certificado challenge encriptador de texto completado.jpg" },
  { id: 19, title: "JavaScript", institucion: "Oracle Next Education – 2024", image: "/public/Certificado finalizacion Javascript.jpg" },
  { id: 20, title: "Habilidades Blandas", institucion: "Oracle Next Education – 2024", image: "/public/certificado formacion desarrollo personal.png" },
  { id: 21, title: "Frontend", institucion: "Oracle Next Education – 2024", image: "/public/Certificado HTML y CSS Alura.png" },
  { id: 22, title: "Frontend", institucion: "Oracle Next Education – 2024", image: "/public/Certificado HTMLCSS responsiv.jpg" },
  { id: 23, title: "Java", institucion: "Oracle Next Education – 2024", image: "/public/Certificado JAVA.png" },
  { id: 24, title: "Habilidades Blandas", institucion: "Oracle Next Education – 2024", image: "/public/foco.png" },
  { id: 25, title: "Habilidades Blandas", institucion: "Oracle Next Education – 2024", image: "/public/habitos.png" },
  { id: 26, title: "Java", institucion: "Oracle Next Education – 2024", image: "/public/JAVA listas y colecciones de datos.png" },
  { id: 27, title: "Java", institucion: "Oracle Next Education – 2024", image: "/public/JAVA, spring.jpg" },
  { id: 28, title: "Java", institucion: "Oracle Next Education – 2024", image: "/public/JAVA_conversorDeMonedas.jpg" },
  { id: 29, title: "Frontend", institucion: "Universidad Tecnológica Nacional Ricardo Rojas– 2024", image: "/public/CSSuba.png" },
  { id: 30, title: "Frontend", institucion: "Universidad Tecnológica Nacional Ricardo Rojas– 2024", image: "/public/Javascript.png" },
];

const Certificados = () => {
  const [selected, setSelected] = useState(null);
  const carouselRef = useRef(null);

  // Función para mover el carrusel
  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      // Desplaza el equivalente a casi todo el ancho visible
      const scrollAmount = clientWidth * 0.8;
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="certificados"
      className="py-20 bg-[#0d1117] text-center overflow-hidden"
    >
      <div className="px-6 md:px-20 mb-12">
        <h3 className="text-2xl text-gray-400 mb-2">Logros</h3>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          Mis certificados
        </h2>
      </div>

      {/* Contenedor relativo para posicionar los botones */}
      <div className="relative group w-full px-4 md:px-12">
        
        {/* Botón Izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex shadow-[0_0_15px_rgba(249,115,22,0.3)] border border-gray-700"
        >
          &#10094;
        </button>

        {/* Contenedor del Carrusel (Ahora con 3 filas en PC y 2 en móvil) */}
        <div
          ref={carouselRef}
          className="grid grid-rows-2 md:grid-rows-3 grid-flow-col gap-6 overflow-x-auto py-4 snap-x snap-mandatory w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ gridAutoColumns: "280px" }}
        >
          {certificados.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden cursor-pointer group/card snap-center"
              onClick={() => setSelected(cert)}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover object-top transform group-hover/card:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-white mb-1 truncate">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-xs truncate">{cert.institucion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex shadow-[0_0_15px_rgba(249,115,22,0.3)] border border-gray-700"
        >
          &#10095;
        </button>
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
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white bg-gray-800/50 hover:bg-gray-800/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg z-10"
              >
                ×
              </button>

              <div className="p-4 text-center border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">
                  {selected.title}
                </h3>
                <p className="text-gray-400 text-sm">{selected.institucion}</p>
              </div>

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