import React from 'react';


export default function TrendingCars(props) {
 const car = props.car ;

    return (<a className='trending-car' href={`http://localhost:3000/cars/${car.carName}`}>
         <img alt='' src={car.img} />
         <p> {car.carName}</p>
           </a>)
}