import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, SetmobileMenu] = useState(false);
  const toggleMenu = () => {
        mobileMenu ? SetmobileMenu (false) : SetmobileMenu (true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <i className="bi bi-mortarboard"></i>
      <ul className={mobileMenu? '' :'hide-mobile-menu' }>
      <li> <Link to='hero' smooth={true} offset={0} duration={500}>Inicio</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programas</Link></li>
        <li> <Link to='about' smooth={true} offset={-150} duration={500}>Sobre Nosotros</Link></li>
        <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='Testimonios' smooth={true} offset={-260} duration={500}>Testimonios</Link></li>
        <li><button className='btn'>Contáctanos</button> <Link to='contact' smooth={true} offset={0} duration={500} />
        </li>
      </ul>
      <button className='btnn'>=</button>
    </nav>
  );
};

export default Navbar;
