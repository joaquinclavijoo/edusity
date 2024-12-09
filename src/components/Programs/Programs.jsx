import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import { LuGraduationCap } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <Link to="/maestria">
          <img src={program1} alt="Maestria" target="_blank" rel='noopener noreferrer' />
          <div className='caption'>
            <LuGraduationCap />
            <p>Maestria</p>
          </div>
        </Link>

      </div>
      <div className='program'>
        <Link to="/grado">
          <img src={program2} alt="Grado" />
          <div className='caption'>
            <PiChalkboardTeacher />
            <p>Grado</p>
          </div>
        </Link>
      </div>
      
      <div className='program'>
        <Link to="/pregrado">
          <img src={program3} alt="Pregrado" />
          <div className='caption'>
            <FaChildren />
            <p>Pregrado</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Programs;


