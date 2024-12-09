import React from 'react';
import "./Testimonios.css";

import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";

const Testimonios = () => {
  return (
    
    <div className='Testimonios'>
        <img src='' alt='' className='naxt-btn'/>
        <img src='' alt='' className='back-btn'/>
        <div className="slider">
        <div className="icon-wrapper">
  
</div>
<div className="icon-wrapperr">
        
        </div>
        </div>
        <ul>
            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user1} alt='' />
                        <div>
                            <h3>Corina Fontana</h3>
                            <span>Edusity, Argentina</span>
                        </div>
                    </div>
                    <p>“Nada se consigue sin esfuerzo y perseverancia”.
                         Corina es egresada de Contador Público de Edisity
                        y hoy en día, tras adquirir experiencia en diferentes trabajos ligados a la profesión, tiene 
                        su propio estudio contable. Hablamos con ella acerca 
                        de su etapa como alumna y el desarrollo de su perfil profesional..</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user2} alt='' />
                        <div>
                            <h3>Franco Whites</h3>
                            <span>Edusity, Argentina</span>
                        </div>
                    </div>
                    <p>"Aprendí que no hay límites" . 
                        Franco es Licenciado en Diseño y Comunicación Visual de Edisity. 
                        Actualmente, además de ser docente de la institución, es el encargado del área de diseño gráfico 
                        en una agencia que desarrolla sitios 
                        de e-commerce y también tiene su propia imprenta tipográfica, Letterpress.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user3} alt='' />
                        <div>
                            <h3>Juana Prenot</h3>
                            <span>Edusity, Argentina</span>
                        </div>
                    </div>
                    <p>"EDUSITY me permitió formarme como profesional y fue clave para conocer profesores con experiencia".
                        Juana  Licenciada en Relaciones Públicas e Institucionales de Edisity, 
                        actualmente trabaja en Telecom y es Responsable del área Go to Market, de la Gerencia de Servicio Móvil Prepago, 
                        dentro de la dirección de Marketing. 
                        Hablamos con ella sobre su experiencia como alumna y profesional.
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className="user-info">
                        <img src={user4} alt='' />
                        <div>
                            <h3>Jazmín Pérez</h3>
                            <span>Edusity, México</span>
                        </div>
                    </div>
                    <p>“Me siento feliz de haber terminado la carrera, me siento preparada y con mucha 
                        confianza para afrontar cualquier desafío”.
                        Jazmín  se convirtió en Licenciada en Recursos Humanos en agosto de este año, de manera virtual.
                         Nos cuenta acerca de su experiencia como alumna y también sobre cómo fue finalizar sus 
                        estudios de manera a distancia, en un año con un contexto desafiante.</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Testimonios