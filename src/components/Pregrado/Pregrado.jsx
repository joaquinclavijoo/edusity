import React, { useState } from 'react'
import './Pregrado.css'

const Pregrado = () => {
  
  const [visibleSection, setVisibleSection] = useState(null);

    const toggleContent=(section) => {
      setVisibleSection (visibleSection=== section ? null : section);
    };
  
  
  return (

    <div className='pregrado'>

<h3 className='pregrado-h3'> PROPUESTA ACADÉMICA DE PREGRADO</h3>
<h1 className='pregrado-h1'>QUÉ OFRECEMOS</h1>
<p className='pregrado-p'>Las Carreras Universitarias de Pregrado brindan una formación general y 
    básica y la capacitación laboral en determinados campos de conocimientos, definidos por los objetivos y 
    alcances del titulo que otorgan. Estas carreras se enmarcan en el Programa de Carreras a Término de la UNL (PROCAT), 
    se dictan en la modalidad a distancia y 
    están destinadas a interesados cuya condición es ser egresados del nivel medio o polimodal.</p>

    <nav className='info-pre'>
      <button className='perfil-pre' onClick={() => toggleContent('planestudio-pre')}>Perfil Profesional</button>
        {visibleSection === 'planestudio-pre' &&(
          <ul>
            <li>• El egresado de la Tecnicatura en Administración y Gestión Pública estará capacitado para: </li>
              <li>• Desempeñar tareas de apoyo administrativo en cualquier ámbito del Estado Nacional, Provincial y Municipal </li>
              <li>• Colaborar en la elaboración y ejecución de proyectos específicos de aplicación de políticas públicas </li>
              <li>• Colaborar en el desarrollo, ejecución y administración de programas de mejoramiento del sector público </li>
               <li>• Participar en la implementación de técnicas de gestión y de evaluación y control de tareas administrativas.</li>
          </ul>
        )}

        <button className='trabajo-pre' onClick={() => toggleContent ('trabajo-pree')}> ¿Dónde Podés Trabajar?</button>
        {visibleSection === 'trabajo-pree' && (
          <ul>
            <li>• Ministerios</li>
            <li>• Municipales</li>
            <li>• Empresas Estatales</li>
            <li>• Servicios Públicos</li>
            <li>• Instituciones privadas que requieran apoyo en la gestión y administración</li>
          </ul>
        )}

        <button className='requisitos-pre' onClick={() => toggleContent ('requisito')}> Requisitos</button>
        {visibleSection === 'requisito' && (
          <ul>
            <li> ► Certificados de Estudios Secundarios Completo En copia legalizada. </li>

            <li>• Fotocopia de DNI Tarjeta (Frente y Torso) </li>
            <li>• Fotocopia legalizada de la partida de nacimiento</li>
            <li>• Pago de la cuota de la Asociación Cooperadora</li>

          </ul>
        )}
    </nav>

    <h3 className='h3-grado'>PLAN DE ESTUDIO</h3>
      <ul className='primer-grado'>PRIMER AÑO</ul>
      <li>Introducción a la Administración Pública</li>
      <li> Historia Política de la Argentina Contemporánea</li>
      <li>Elementos de Administración</li>
      <li>La Administración Pública y sus Sistemas Racionalizadores</li>
      <li>Principios de Derecho Administrativo</li>

      <ul className='segundo-grado'>SEGUNDO AÑO</ul>
      <li> Elementos de Micro y Macroeconomía</li>
      <li>Introducción a la Formulación y Evaluación de Proyectos Públicos</li>
      <li>Gestión Pública y Administración de Programas</li>
      <li>Administración Financiera y Contabilidad Pública</li>
      <li> El Pensamiento Weberiano y la Nueva Gerencia Pública</li>
      <li>Taller de Diseño de Trabajo Final </li>
      <li>Trabajo Final</li>


      <div className='footer'>
        <p>© 2024 Edustiy. Todos los derechos reservados </p>
        <ul>
            <li> Términos de los Servicios</li>
            <li> Politicas de Privacidad</li>
        </ul>
    </div>
    
    </div>
  )
}

export default Pregrado