import React from "react";
import Navbar from "../components/Landing Page/Navbar";
const teamMembers = [
  { name: "Julio Castro Alejos", photo: "/images/julio.png" },
  { name: "Sergio Aguirre Castillo", photo: "/images/aguirre.jpg" },
  { name: "Brenda Tarazona Machuca", photo: "/images/brenda.jpg" },
  { name: "Juan Daniel Castro Taype", photo: "/images/daniel.jpg" },
  { name: "Alvaro Chacaltana Cueva", photo: "/images/alvaro.png" },
];
const page = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="bg-[#EEEEE2] min-h-screen w-full flex items-center justify-center p-8">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">
            Conoce al equipo
          </h2>
          <p className="text-center text-2xl mb-12">
            Somos un grupo de alumnos del curso de Análisis y Requerimientos de
            la UPC, un equipo dedicado y apasionado por la innovación
            tecnológica. Nuestro objetivo es entender y satisfacer las
            necesidades de los usuarios a través de soluciones efectivas y
            eficientes. Orgullosamente peruanos, estamos comprometidos con la
            excelencia académica y profesional.
          </p>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
                  <div className="w-full h-48 flex-shrink-0">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="mt-4 text-center flex-grow flex items-end">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
