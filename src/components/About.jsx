import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="py-20 px-4 md:px-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center tracking-wide">
          {t("about.title")}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/perfil3.jpeg"
            alt="Foto de Sosa Lautaro"
            className="w-72 h-72 rounded-full object-cover object-top border-4 border-white"
          />

          <div className="text-gray-300 text-base sm:text-lg leading-relaxed">
            <p className="mb-4">{t("about.p1")}</p>
            <p className="mb-4">{t("about.p2")}</p>
            <p className="mb-4">{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;