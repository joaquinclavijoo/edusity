import React, { useState } from 'react';
import './Grado.css';

const Grado = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleContent = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='carrera-grado'>
      <h3 className='gradoh3'> PROPUESTA ACADÉMICA DE GRADO</h3>
      <h1 className='gradoh1'>QUÉ OFRECEMOS</h1>
      <p className='pgrado'>
        Como docente, conoces mejor que nadie los desafíos a los que la educación se enfrenta actualmente. 
        En un contexto de revolución tecnológica permanente y de cambios sociales y culturales vertiginosos,
         se suman las tradicionales demandas en formación y actualización permanente. 
         Esta carrera te ayudará a asumir tales desafíos con herramientas para incorporar las TICs en el aula,
          implementar plataformas de educación a distancia e innovar desde la pedagogía y 
          las nuevas didáctica en todos los niveles. Al graduarte de Licenciado en Educación, 
          a tu formación docente sumarás competencias para desenvolverte en la gestión de instituciones educativas, 
          áreas de asesoramiento y evaluación pedagógica, investigación de programas en curso y 
          abordaje de nuevas problemáticas de estudio. 
          Serás capaz de desarrollar nuevas estrategias, evaluar entornos y encontrar caminos para aunar las premisas 
        educativas básicas con la diversidad de un mundo tan digital como analógico.
      </p>

      <nav className='info-grado'>
        <button className='perfil-g' onClick={() => toggleContent('plandestudio1')}>Perfil Profesional</button>
        {visibleSection === 'plandestudio1' && (
          <ul>
            <li>* Diseñar, gestionar y evaluar proyectos educativos.</li>
            <li>* Dominar las nuevas tecnologías como soporte educativo.</li>
            <li>* Asesorar en la creación de materiales específicos para educación.</li>
            <li>* Formar equipos de investigación educativa.</li>
            <li>* Generar formación continua docente.</li>
          </ul>
        )}

        <button className='trabajo-g' onClick={() => toggleContent('trabajo')}>¿Dónde Podés Trabajar?</button>
        {visibleSection === 'trabajo' && (
          <ul>
            <li>* Instituciones educativas</li>
            <li>* Nuevos proyectos educativos</li>
            <li>* Emprendimientos educativos y de formación</li>
            <li>* Ministerios, secretarías, instituciones, y todo equipo que tenga a su cargo alguna acción educativa</li>
            <li>* Equipos interdisciplinarios de formación</li>
          </ul>
        )}



        <button className='requisitos-g' onClick={() => toggleContent('requisitos')}>Requisitos</button>
        {visibleSection === 'requisitos' && (
          <p>Poseer título de profesor otorgado por la institución autorizada, con una duración de al menos dos años y 
            carga horaria no inferior a 1200 horas reloj..</p>
        )}
      </nav>
      
      <h3 className='h3-grado'>PLAN DE ESTUDIO</h3>
      <ul className='primer-grado'>PRIMER AÑO</ul>
      <li>• Introducción a la Filosofía</li>
      <li>• Las ciencias de la educación en la práctica educativa</li>
      <li>• Sociología general</li>
      <li>• Tecnología e innovación en la educación (2c)</li>
      <li>• La educación a distancia y los desafíos tutoriales del E-learning  (2c)</li>
      <li>• La gestión de la calidad en las instituciones educativas  (2c) </li>
      <li>• Las nuevas didácticas educativas  (2c) </li>
      <li>• Nuevas tecnologías en entornos de aprendizaje  (2c) </li>

      <ul className='segundo-grado'>SEGUNDO AÑO</ul>
      <li>• El Planeamiento de Proyectos Educativos</li>
      <li>• Métodos y Técnicas de Investigación Social</li>
      <li>• Psicología Social</li>
      <li>• Teoría y Práctica de la Currícula</li>
      <li>• Diseño de Materiales Virtuales</li>
      <li>• La Evaluación del Aprendizaje</li>
      <li>• Psicologías del Aprendizaje y Creación de Nuevos Escenarios Educativos</li>

      

      <div className='footer'>
        <p>© 2024 Edustiy. Todos los derechos reservados </p>
        <ul>
            <li> Términos de los Servicios</li>
            <li> Politicas de Privacidad</li>
        </ul>
    </div>

    </div>

 
  );
};

export default Grado;
