import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaReact ,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql ,
  SiMysql ,
  SiPostman ,
  SiIntellijidea ,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-purple-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-purple-500" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400" /> },
];

const Skills = () => (
  <section id="skills" className="bg-[#0d1117] py-20 px-6 text-center">
    <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
      Habilidades
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#161b22] border border-gray-800 hover:border-purple-500 hover:scale-105 transition"
        >
          <div className="text-4xl mb-2">{skill.icon}</div>
          <p className="text-sm text-gray-300">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
