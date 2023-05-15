import React from 'react';
import './Footer.css';
import footImg from './media/foot.png';
import linea3 from './media/linea3.png';
import mancha from './media/Mancha.png';


const Footer = () => {
    return (
      <div className='footer-container' id='footer'>
        <img className='linea3' src={linea3} alt='linea 3 de fondo'/>
        <img className='mancha' src={mancha} alt='mancha de fondo'/>
          <div className='todo'>
            <div className='img-div'>
          <img className='footerImg' src={footImg} alt="imagen con info de contacto" />
            </div>
          <div className='der'>
            <form className='form'>
                <label className='name'>NOMBRE COMPLETO</label>
                <input className='input-name'/>
                <label className='email'>EMAIL</label>
                <input className='input-email'/>
                <label className='message'>MENSAJE</label>
                <textarea className='input-text' />
                <button className='submit'>ENVIAR</button>
            </form>
            <div className='sns-links'>
            <a 
            className='iconos icono-i' 
            href='https://www.instagram.com/luciahdoval/' 
            target="_blank"
            rel="noreferrer">
                <i className='fab fa-instagram instagram'></i>
            </a>
            <a 
            className='iconos icono-w' 
            href='https://api.whatsapp.com/send/?phone=2226500552&text&type=phone_number&app_absent=0' 
            target='_blank'
            rel="noreferrer">
                <i className='fab fa-whatsapp whatsapp'></i>
            </a>
            </div>
          </div>
          </div>
      </div>
    )
  }
  
  export default Footer;