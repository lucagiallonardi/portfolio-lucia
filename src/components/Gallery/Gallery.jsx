import React from 'react';
import Card from './Card';
import './Gallery.css'
import misProyectos from './media/misproyectos.png';
import proyCover from './media/linea2.png';

function Gallery() {
  return (
    <div className='backg gallery' id='galeria'>
      <img  className='coverProy' src={proyCover} alt='covproy'/>
          <div className='misProyectos'>
          <img className='img-proy' src={misProyectos} alt='decorative'/>
        </div>
            <div id="carouselExample" className="carousel slide gama-carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Card
      src1="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      src2="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      src3="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      src4="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
    <div className="carousel-item">
    <Card
      src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefULZJV11kvpTHPVXQzbPSEXYNrSz_IUFNl17tJ0a&s"
      src2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefULZJV11kvpTHPVXQzbPSEXYNrSz_IUFNl17tJ0a&s"
      src3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefULZJV11kvpTHPVXQzbPSEXYNrSz_IUFNl17tJ0a&s"
      src4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefULZJV11kvpTHPVXQzbPSEXYNrSz_IUFNl17tJ0a&s"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
  );
}

export default Gallery;