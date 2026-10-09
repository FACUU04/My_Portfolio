import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="py-20 px-4 md:px-20 bg-[#0d1117] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          {t("experience.title")}
        </h2>

        <div className="relative border-l border-gray-700 ml-3 md:ml-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            <span className="absolute -left-12 flex items-center justify-center w-8 h-8 bg-[#161b22] rounded-full border border-purple-500 text-purple-400">
              <FaBriefcase size={14} />
            </span>
            
            <h3 className="text-xl font-bold">{t("experience.role")}</h3>
            <h4 className="text-lg text-orange-400 font-semibold mb-2">Moby Digital</h4>
            <p className="text-gray-400 text-sm mb-4">{t("experience.date")}</p>
            <p className="text-gray-300 leading-relaxed">
              {t("experience.description")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;