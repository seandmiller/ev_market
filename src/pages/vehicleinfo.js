import React from 'react';
import { useParams } from "react-router-dom";


export default function VehicleInfo(props) {
   
    
  const params = useParams();

  const vehicle = params.data


    return (
        <div className='vehicleinfo-wrapper'>
            <h1>{vehicle}</h1>
            <h2>{vehicle.carName}</h2>
            <img alt='' src={vehicle.img}/>

        </div>
    )
}