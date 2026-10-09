import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  { id: 31, title: "MobyDigital", institucion: "2026", image: "/public/certificadoAcademy.png" },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  // Dividimos los certificados en 3 filas para el carrusel
  const row1 = certificados.slice(0, 10);
  const row2 = certificados.slice(10, 20);
  const row3 = certificados.slice(20);

  // Componente interno para renderizar cada tarjeta
  const CertificateCard = ({ cert }) => (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)" }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="relative bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden cursor-pointer group/card w-[280px] shrink-0 mx-3"
      onClick={() => setSelected(cert)}
    >
      <div className="overflow-hidden">
        <motion.img
          src={cert.image}
          alt={cert.title}
          className="w-full h-40 object-cover object-top transform group-hover/card:scale-110 transition-transform duration-500"
        />
      </div>
      <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-white mb-1 truncate">{cert.title}</h3>
        <p className="text-gray-400 text-xs truncate">{cert.institucion}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="certificados" className="py-20 bg-[#0d1117] text-center overflow-hidden">
      
      {/* Estilos CSS puros para el Marquee Infinito */}
      <style>{`
        .marquee-wrapper {
          display: flex;
          width: max-content;
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="px-6 md:px-20 mb-12">
        <h3 className="text-2xl text-gray-400 mb-2">{t("certificates.label")}</h3>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          {t("certificates.title")}
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Fila 1: Movimiento de Izquierda a Derecha */}
        <div className="marquee-wrapper animate-marquee-right">
          {row1.map((cert) => <CertificateCard key={cert.id} cert={cert} />)}
          {/* Duplicamos los elementos para que el loop sea infinito e invisible */}
          {row1.map((cert) => <CertificateCard key={`${cert.id}-dup`} cert={cert} />)}
        </div>

        {/* Fila 2: Movimiento de Derecha a Izquierda */}
        <div className="marquee-wrapper animate-marquee-left">
          {row2.map((cert) => <CertificateCard key={cert.id} cert={cert} />)}
          {row2.map((cert) => <CertificateCard key={`${cert.id}-dup`} cert={cert} />)}
        </div>

        {/* Fila 3: Movimiento de Izquierda a Derecha */}
        <div className="marquee-wrapper animate-marquee-right">
          {row3.map((cert) => <CertificateCard key={cert.id} cert={cert} />)}
          {row3.map((cert) => <CertificateCard key={`${cert.id}-dup`} cert={cert} />)}
        </div>
      </div>

      {/* Modal para ver la imagen en grande */}
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

export default Certificates;