import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonios from './components/Testimonios/Testimonios';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maestria from './components/Maestria/Maestria';
import Grado from './components/Grado/Grado';
import Pregrado from './components/Pregrado/Pregrado';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Title subTitle="Nuestros Programas" Title="Qué Ofrecemos" />
        <Programs />
        <About />
        <h3 className='tst'>GALERÍA</h3> 
        <h2 className='sbt'>SOBRE NUESTRO CAMPUS </h2>
        <Campus />
        <h3 className='tst'>TÉSTIMONIOS </h3> 
        <h2 className='sbt'>QUÉ DICEN NUESTROS ESTUDIANTES</h2>
        <Testimonios />
        <hr />
        <h2 className='tstt'>CONTÁCTANOS</h2>
        
        <Contact />
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maestria" element={<Maestria />} />
          <Route path="/grado" element={<Grado />} />
          <Route path="/pregrado" element={<div><Pregrado /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


