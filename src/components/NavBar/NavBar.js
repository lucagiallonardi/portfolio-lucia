import React, {useState} from 'react';
import './NavBar.css';
import BurgerButton from './BurgerButton.js';

function NavBar() {

  const [clicked, setClicked] = useState(false);

  const handleClick =() =>{
    setClicked(!clicked)
  }

  return (
    <div className='navbarContainer'>
        <div className={`links ${clicked ? 'active' : ''}`}>
        <div className='nav-items'>
        <div className='cuadro'>
        <a href='#inicio' onClick={handleClick} className='links-nav'>INICIO</a>
        </div>
        <div className='cuadro'>
        <a href='#about' onClick={handleClick} className='links-nav'>HABILIDADES</a>
        </div>
        <div className='cuadro'>
        <a href='#est' onClick={handleClick} className='links-nav'>ESTUDIOS</a>
        </div>
        <div className='cuadro'>
        <a href='#galeria' onClick={handleClick} className='links-nav'>GALERIA</a>
        </div>
        <div className='cuadro'>
        <a href='#footer' onClick={handleClick} className='links-nav'>CONTACTO</a>
        </div>
        </div>
        </div>
        <div className='burger'>
        <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className ={`bgDiv ${clicked ? 'active' : ''}`}></div>
    </div>
  )
}

export default NavBar;
