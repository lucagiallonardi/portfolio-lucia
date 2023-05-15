import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div>
           <div className="row row-cols-1 row-cols-md-3 g-4 item-card">
            <div className="col cardCol">
                    <img src={props.src1} className="card-img" alt="..."/>
                 </div>


                 <div className="col cardCol">
                    <img src={props.src2} className="card-img" alt="..."/>
                 </div>


                 <div className="col cardCol">
                    <img src={props.src3} className="card-img" alt="..."/>
                 </div>


                 <div className="col cardCol">
                    <img src={props.src4} className="card-img" alt="..."/>
                 </div>
            </div>             
        </div>
    );
};

export default Card;