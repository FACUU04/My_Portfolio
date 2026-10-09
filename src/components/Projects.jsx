import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaGithub, FaReact, FaJava, FaAws } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiSpringboot, SiMysql } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const topProjects = [
    {
      id: 1,
      title: t("projects.titles.falcar"),
      description: t("projects.descriptions.falcar"),
      image: "/WebFalcar.png",
      repo: "https://github.com/FACUU04/Web_para_Emprendimiento",
      demo: "https://falcarservice.com/",
      destacado: true,
      techs: [
        { icon: <FaReact size={18} className="text-sky-400" />, name: "React" },
        { icon: <SiVite size={18} className="text-purple-400" />, name: "Vite" },
        { icon: <SiTailwindcss size={18} className="text-cyan-400" />, name: "Tailwind" }
      ]
    },
    {
      id: 3,
      title: t("projects.titles.mylogist"),
      description: t("projects.descriptions.mylogist"),
      image: "/MyLogist.jpeg",
      repo: "https://github.com/FACUU04/Web_Inventario",
      demo: "https://mylogistapp.com/",
      destacado: true,
      techs: [
        { icon: <FaJava size={18} className="text-red-500" />, name: "Java 17" },
        { icon: <SiSpringboot size={18} className="text-green-400" />, name: "Spring Boot" },
        { icon: <FaReact size={18} className="text-sky-400" />, name: "React" },
        { icon: <FaAws size={18} className="text-orange-400" />, name: "AWS EC2" },
        { icon: <SiMysql size={18} className="text-blue-300" />, name: "MySQL" }
      ]
    },
    {
      id: 5,
      title: t("projects.titles.currency"),
      description: t("projects.descriptions.currency"),
      image: "/ConversorMonedas.png",
      repo: "https://github.com/FACUU04/Proyecto_ConversorMonedas/tree/master",
      demo: "#",
      linkedin: "https://www.linkedin.com/in/lautaro-facundo-sosa-155a392b9/",
      destacado: true,
      techs: [
        { icon: <FaJava size={18} className="text-red-500" />, name: "Java" }
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#0d1117] text-center">
      <h3 className="text-2xl text-gray-400 mb-2">{t("projects.label")}</h3>
      <h2 className="text-4xl sm:text-5xl font-bold leading-snug bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-4 pb-2">
        {t("projects.title")}
      </h2>
      
      <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
        {t("projects.descriptionPre")}<strong>{t("projects.top3")}</strong>{t("projects.descriptionPost")}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {topProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)" }}
            className="relative bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden flex flex-col text-left group"
          >
            {project.destacado && (
              <div className="absolute top-3 right-3 z-20 bg-[#161b22]/80 p-2 rounded-full border border-yellow-500/50 backdrop-blur-sm shadow-lg" title={t("projects.featured")}>
                <FaStar size={18} className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              </div>
            )}

            <div className="overflow-hidden h-48 w-full shrink-0">
              <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500" />
            </div>

            <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="p-6 flex flex-col flex-grow relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Stack Tecnológico con Iconos */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech, i) => (
                  <div key={i} className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-md border border-gray-700" title={tech.name}>
                    {tech.icon}
                    <span className="text-xs text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto flex gap-4 flex-wrap items-center pt-4 border-t border-gray-800/50">
                <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  <FaGithub size={16} /> {t("projects.code")}
                </a>

                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                    {t("projects.visitWeb")}
                  </a>
                )}

                {project.linkedin && project.linkedin !== "#" && (
                  <a href={project.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    {t("projects.viewPost")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16">
        <a href="https://github.com/FACUU04" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
          <FaGithub size={20} /> {t("projects.allGithub")}
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;