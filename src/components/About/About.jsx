import React from 'react';
import "./About.css";
import about1 from "../../assets/about1.jpg"; // Importa correctamente la imagen y asígnala a una variable
import { CgPlayButtonR } from "react-icons/cg";

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about1} alt='' className='about-img' />
        <CgPlayButtonR id='about-icon'/>
      </div>

      <div className="about-right">
        <h3>SOBRE NUESTRA UNIVERSIDAD</h3>
        <h2>Formar hoy a los líderes del mañana</h2>
        <p>Embárcate en un viaje educativo transformador con los completos programas de educación de nuestra universidad. 
            Nuestro plan de estudios de vanguardia está diseñado para capacitar a los estudiantes con los conocimientos,
             habilidades y experiencias necesarias para sobresalir en el dinámico campo de la educación.</p>
             
        <p>Con un enfoque en la innovación, el aprendizaje práctico y la tutoría personalizada,
             nuestros programas preparan a los aspirantes a futuros docentes
             para que tengan un impacto significativo en las aulas, las escuelas y las comunidades..</p>

             <p>Tanto si aspiras a convertirte en profesor, administrador, orientador o líder educativo, 
                nuestra variada gama de programas te ofrece el camino perfecto para alcanzar tus objetivos 
                y liberar todo tu potencial para dar forma al futuro de la educación</p>
      </div>
    </div>
  )
}

export default About;
