import React from 'react';
import './Habilidades.css';
import nubecitaHab from './media/nubecitaHab.png';
import retrato from './media/Retrato.png';

const Habilidades = () => {
  return (
    <div className='hab-container' >
      <img className='habCover' id='est'src={nubecitaHab} alt="nubecita de fondo hab"/>
      <div className='hab'>
      <img className='retrato' src={retrato} alt="retrato"/>
      <ul className='lista'>
      <h3 className='estudios'>Estudios</h3>
        <li className='li1'>Curso de Diseño Gráfico</li>
        <li>Curso de Diseño Proyectual</li>
        <li>Carrera de Diseño Gráfico</li>
      </ul>
      </div>
    </div>
  )
}

export default Habilidades