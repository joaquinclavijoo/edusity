import React from 'react'
import "./Maestria.css";
import profesorado from "../../assets/profesorado.jpg";


const Maestria = () => {
  return (
    <div className='maestria-container'>
        
        <h3 className='h3t'> PROPUESTA ACADÉMICA DE MAESTRIA</h3>
        <h1 className='h1t'>QUÉ OFRECEMOS</h1>
        <p className='hpt'> La Maestría proporciona una formación académica y  profesional. 
            Profundiza el conocimiento teórico, metodológico, tecnológico, de gestión, o artístico, 
            en función del estado de desarrollo correspondiente a una disciplina, 
            área interdisciplinaria o campo profesional de una o más profesiones</p>            
            <img className='imag-maestria' src={profesorado} alt='profesorado' />
            
            <hr></hr>

            <ul className='ul-right'>
        <li>Maestría en Docencia Universitaria</li>
        <h4>MODALIDAD DE CURSADO</h4>
        <p>Presencial, los viernes por la tarde y los sábados por la mañana.</p>
        
        <h4 className='objetv'>OBJETIVOS</h4>
        <p className='objet'>La carrera de Maestría en Docencia Universitaria tiene por objetivo 
          proporcionar a los docentes universitarios 
          la oportunidad de alcanzar una formación académica y profesional de alto nivel que tenga impacto 
          efectivo en el ejercicio de las prácticas de la enseñanza en los distintos campos disciplinares. 
          Capacitarse y formarse para la investigación y resolución de problemas relacionados con las 
          prácticas pedagógicas</p>
        </ul>
       
      <h4 className='pds'>PROGRAMA CURRICULAR</h4>
      <p className='plan-estudio'>*Ocho seminarios generales (siete de 60 h y uno de 45 hs).</p>
      <p className='plan-estudio'>*Un seminario de 60 hs vinculado con la modalidad de trabajo final (el maestrando 
        podrá optar entre Diseño y evaluación de proyectos para la educación superior
         o Diseño y evaluación de proyectos de investigación educativos).</p>
         <p className='plan-estudio'>*Un Taller de Trabajo Final (compuesto por tres módulos de 15 hs cada uno)
           cuyo cursado se articula con el resto de los espacios curriculares de la carrera.</p>
           <p className='plan-estudio'>*Además, el maestrando deberá realizar y aprobar ante un Jurado un Trabajo Final, 
            que adoptará una de las siguientes modalidades: a) tesis, o b) proyecto educativo.</p>
            <p className='plan-estudio'>*La carga horaria total es de 780 hs (52 UCAs), 570 (38 UCAs)
               hs corresponden al programa curricular y 210 hs (14 UCAs) al Trabajo Final. 
               La carga horaria correspondiente a los espacios curriculares, a su vez, se distribuye entre 400 hs teóricas y 170 hs
                prácticas. Las actividades prácticas vinculadas con la profesión docente en el nivel superior 
              se realizan en el marco de y en concordancia con los espacios curriculares teórico–prácticos de la carrera.</p>

              <h4 className='h4-plan'>PLAN DE ESTUDIOS</h4>
              <ul className='listado'>
        <li>1) Problemas teóricos-epistemológicos de la Ciencia y la Tecnología</li>
        <li>2) Socio-política de la educación superior</li>
        <li>3) Teoría y diseño curricular universitario</li>
        <li>4) Teorías del aprendizaje</li>
        <li>5) Las prácticas de enseñanza en la Universidad</li>
        <li>6) Organización y Gestión de Instituciones y Sistemas Educativos de Nivel Superior</li>
        <li>7) Taller de Trabajo Final (Módulo I)</li>
        <li>8) Evaluación de aprendizajes</li>
        <li>9) Materiales para la enseñanza universitaria</li>
        <li>10) Taller de Trabajo Final (Módulo II)</li>
        <li>11) Diseño y evaluación de proyectos para la educación superior / Proyectos de investigación educativos</li>
        <li>12) Taller de Trabajo Final (Módulo III)</li>
        <li><strong>Tesis – Total: 15 UCAs</strong></li>
      </ul>
      <hr></hr>  
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





export default Maestria