import React from 'react';
import './Cover.css';
import coverImg from './media/nube.png';
import linea1 from './media/linea1.png';

const Cover = () => {
  return (
    <div className='cover-container' id='inicio'>
        <img className='coverImg' src={coverImg} alt='fondo de la presentación'/>
        <img className='linea1' src={linea1} alt='linea1 de fondo'/>
        <div className='title-container'>
          <h1>LUCIA HARGUINDEGUY DOVAL</h1>
        </div>
    </div>
  )
}

export default Cover