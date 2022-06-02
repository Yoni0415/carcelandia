import React from 'react'
import image1 from '../assets/image1.jpg'

function Card(){

    return(
        <div className="card">
            <img src={image1}/>
            <div className="card-body">
                <h4 className='card-title'>Mi Titulo</h4>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima? Nam a, explicabo harum, optio, id dolorum amet impedit error officiis exercitationem quod quibusdam quaerat reiciendis veritatis facilis soluta odit.</p>
                <a href="#" className='btn btn-warning'>
                    Ver Info
                </a>
            </div>
        </div>
    );
}

export default Card;