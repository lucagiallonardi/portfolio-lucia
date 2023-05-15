import React, {useEffect} from 'react';
import './Info.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div className='info-container'>
        <div className='info' >
            <h1>RESPONSABILIDAD Y COMPROMISO ASEGURADOS</h1>
            </div>
    </div>
  )
}

export default Info