import React from 'react';


export default function AllCars(props) {
 const car = props.car ;
 
    return ( 
    <a className='all-cars' href={`http://localhost:3000/cars/${car.carName}`}>

        <img alt='' src={car.img} />
         <h4> {car.carName}</h4>
         <p>Car Rating {car.rating}</p>
       


       </a>)
}