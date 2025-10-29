import React from "react";

const About = () => {
  return (
    <section
  id="sobre-mi"
  className="py-20 px-4 md:px-20 bg-gray-900 text-white"
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center tracking-wide">
      Sobre mí
    </h2>

    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <img
       src="/perfil3.jpeg"
       alt="Foto de Sosa Lautaro"
       className="w-72 h-72 rounded-full object-cover object-top border-4 border-white"
      />

      <div className="text-gray-300 text-base sm:text-lg leading-relaxed">
        <p className="mb-4">
          Hola! Soy Sosa Lautaro, un desarrollador apasionado por la tecnología, por crear soluciones eficientes y por aprender nuevas tecnologías constantemente.
        </p>
        <p className="mb-4">
          Desde el año 2021 comencé a formarme en el mundo de la programación, explorando distintos lenguajes y tecnologías. 
          Lo que empezó como curiosidad se transformó en una verdadera pasión. Soy autodidacta: gran parte de lo que sé lo aprendí por mi cuenta, 
          investigando, practicando y enfrentando desafíos reales.

          Me impulsa un deseo constante de seguir aprendiendo, creciendo y mejorando tanto a nivel técnico como personal. 
          Cada proyecto es una oportunidad para evolucionar, y cada error, una puerta hacia una solución más creativa.
        </p>
        <p>
          Me especializo en desarrollo fullstack con React, JavaScript, Java y análisis de bases de datos SQL. Disfruto enfrentar desafíos técnicos, optimizar procesos y colaborar en proyectos que generen impacto real.
        </p>
      </div>
    </div>
  </div>
</section>



  );
};

export default About;
