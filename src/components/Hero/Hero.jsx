import React, { useState } from 'react'
import "./Hero.css"
import { HiArrowNarrowRight } from "react-icons/hi";


const Hero = () => {

  const [AddClick, setAddClick] = useState (false);

  return (
    <div className='hero container'>
    <div className='hero-text'>
        <h1>Garantizamos una educación mejor para un mundo mejor</h1>
        <p>Nuestro plan de estudios de vanguardia está diseñado para capacitar a los estudiantes con los conocimientos, 
            habilidades y experiencias necesarias para sobresalir en el dinámico campo de la educación.</p>
            <button className='btn' onClick={() => setAddClick (!AddClick)}>
               Más Información <HiArrowNarrowRight />
               </button>
               {AddClick && (
                <p className='additional-info'> -El aprendizaje y la colaboración son flexibles y accesibles con Edusity. 
                Los usuarios pueden interactuar con el contenido a su propio ritmo desde cualquier lugar del mundo. 
                Esta flexibilidad se adapta a diferentes estilos y horarios de aprendizaje, lo que garantiza que el conocimiento se absorba de manera eficaz. 
                Edusity está diseñado para cumplir con WCAG, ADA y AODA.
                <hr></hr>
                -El contenido personalizable, 
                las funciones interactivas y una interfaz fácil de usar hacen que el aprendizaje sea agradable para todos
                <hr></hr>
                -Los videos pregrabados brindan a los estudiantes la flexibilidad que necesitan para comenzar, 
                detener y reproducir tantas veces como necesiten para procesar el material del curso.
                </p>

               )}
           
    </div>
    </div>
  )
};

export default Hero