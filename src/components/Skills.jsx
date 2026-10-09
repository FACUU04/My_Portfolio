import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Importamos todos los íconos nuevos
import { 
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaReact, FaGitAlt, FaDatabase, 
  FaNodeJs, FaVial, FaGhost, FaAws, FaDocker, FaBitbucket, FaLinux 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPostgresql, SiMysql, SiPostman, SiIntellijidea, 
  SiSpringboot, SiSpringsecurity, SiApachemaven, SiSwagger, SiOracle, SiRedis 
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  
  // Backend & Lenguajes
  { name: "Java 17", icon: <FaJava className="text-red-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
  { name: "Spring Security", icon: <SiSpringsecurity className="text-green-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  
  // Testing & Documentación
  { name: "JUnit 5", icon: <FaVial className="text-green-400" /> },
  { name: "Mockito", icon: <FaGhost className="text-gray-300" /> },
  { name: "Swagger / OpenAPI", icon: <SiSwagger className="text-green-500" /> },
  
  // Base de Datos
  { name: "SQL", icon: <FaDatabase className="text-purple-400" /> },
  { name: "PL/SQL", icon: <SiOracle className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "Redis", icon: <SiRedis className="text-red-600" /> },
  
  // DevOps, Cloud & Herramientas
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Linux", icon: <FaLinux className="text-yellow-200" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Bitbucket", icon: <FaBitbucket className="text-blue-600" /> },
  { name: "Maven", icon: <SiApachemaven className="text-red-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-purple-500" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400" /> },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="bg-[#0d1117] py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
        {t("skills.title")}
      </h2>

      {/* Ajustamos la grilla para que entren bien todas (ahora son 27 habilidades) */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#161b22] border border-gray-800 hover:border-purple-500 hover:scale-105 transition shadow-sm"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-xs text-gray-300 font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;