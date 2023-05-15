import React from 'react';
import './About.css';
import nubecita from './media/nubecita-fondo.png';
import aboutImg from './media/about.png';

const About = () => {
  return (
      <div className='about-container' id='about'>
        <img className='aboutCover' src={nubecita} alt="nubecita de fondo"/>
        <div  className='about-img'>
            <img src={aboutImg} alt='about'/>
        </div>
        <div  className='about-desc'>
            <p>Hola! Soy estudiante de diseño gráfico en la
Facultad de Aquitectura, Diseño y
Urbanismo de la Universidad de Buenos
Aires. Gracias a mis estudios y diferentes
cursos realizados mis conocimientos
abarcan la utilización de Corel Draw,
Photoshop y Adobe InDesign.
              </p>
        </div>
    </div>
  )
}
export default About 