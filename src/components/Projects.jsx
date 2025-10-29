import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Web Porfolio FALCAR",
    category: "frontend",
    image: "/WebFalcar.png",
    repo: "https://github.com/FACUU04/Web_para_Emprendimiento",
    demo: "https://falcarservice.com/",
  },
  {
    id: 2,
    title: "Web del clima con Javascript y API",
    category: "frontend",
    image: "/weather_app.jpg",
    repo: "https://github.com/FACUU04/WeatherApp",
    demo: "https://facuu04.github.io/WeatherApp/",
  },
  {
    id: 3,
    title: "Web Logistica para Negocio con Base de Datos",
    category: "fullstack",
    image: "/MyLogist.png",
    repo: "https://github.com/FACUU04/Web_Inventario",
    demo: "https://front-inventario-six.vercel.app/",
  },
  {
    id: 4,
    title: "Base de datos SQL con funciones",
    category: "sql",
    image: "/sql.jpg",
    repo: "https://github.com/FACUU04/SQL/tree/main",
    demo: "#",
  },
  {
    id: 5,
    title: "App Java con API conversor de monedas con cotizacion oficial",
    category: "backend",
    image: "/ConversorMonedas.png",
    repo: "https://github.com/FACUU04/Proyecto_ConversorMonedas/tree/master",
    demo: "#",
    video: "https://www.youtube.com/embed/XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/lautaro-facundo-sosa-155a392b9/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("todos");
  const [videoModal, setVideoModal] = useState(null);

  const filteredProjects =
    filter === "todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#0d1117] text-center">
      <h3 className="text-2xl text-gray-400 mb-2">Proyectos</h3>
      <h2 className="text-4xl sm:text-3.2xl font-bold leading-snug bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-28">
        Mis proyectos destacados
      </h2>

      <div className="flex flex-wrap justify-center gap-2 bg-[#161b22] border border-gray-700 rounded-full p-4 mb-12">
        {["todos", "frontend", "backend", "fullstack", "sql"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              filter === cat
                ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)", 
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Imagen */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Glow violeta */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Contenido */}
              <div className="p-6 text-left relative z-10">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    GitHub
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-400 hover:text-orange-300 text-sm font-medium"
                    >
                      Demo
                    </a>
                  )}

                

                  {project.linkedin && project.linkedin !== "#" && (
                    <a
                      href={"https://www.linkedin.com/posts/lautaro-facundo-sosa-155a392b9_java-programaciaejn-desarrollodesoftware-activity-7279906296743485440-xSZB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEyBeJEBdAlTYDbMH18mLJCm9Ku1V7MVEio"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                    >
                      Ver en LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal de video */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-[#161b22] rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModal(null)}
                className="absolute top-3 right-3 text-white bg-gray-800/50 hover:bg-gray-800/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg z-10"
              >
                ×
              </button>

              <div className="p-4">
                <iframe
                  src={videoModal}
                  title="Video demostrativo"
                  className="w-full h-96 sm:h-[500px] rounded-md"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
