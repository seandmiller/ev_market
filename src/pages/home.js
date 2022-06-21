import React from 'react';
import TrendingCars from './trendingCars';


export default class Home extends React.Component {
    constructor() {
        super();
  
        this.state = {
            cars : [ {img:'https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2',
                     carName:'Tesla Model Y' 
                      },
                    {img:'https://media.ford.com/content/fordmedia/fna/us/en/products/evs/mustang-mach-e/mustang-mach-e/jcr:content/content/media-section-parsys/textimage_f597/image.img.951.535.jpg/1608221793793.jpg',
                     carName:'Ford Mache E'},
                    {img:'https://cdn.motor1.com/images/mgl/nY6yy/s1/2021-volkswagen-id.4-exterior-in-motion.jpg',
                     carName:'Volkswagen ID4'} ]
        }
      


    }

  
render() {

  const  renderCars = this.state.cars.map(car => {
            return  <TrendingCars key={car.carName}  car={car} />
        })
    
    return (<div>
        <div className='home-wrapper' >
       <div className='home-container'>
         <div className='text-wrapper'>
           <p> The Electric Future is here!  
            this page was built with the intention of educating new EV buyers and guiding them through their electric journey. </p>
         </div>

         <div className='home-img'>
             <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgaN63lkjrpMwzjq8RXDPbdLVTd2g4oN9xA&usqp=CAU'/>
         </div>
         </div>
        </div>
        <div className='bottom-container' >
            <h2>Top Trending Vehicles</h2>
        <div  className='bottom-homepage'>
       
         {renderCars}  
         
        </div>
      </div>
        </div>
    )
}

}

