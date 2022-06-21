import React from "react";
import AllCars from './allCars';

export default class Cars extends React.Component {
    constructor() {
        super();
    
    this.state = {
        searchValue:'',
        cars : [ {img:'https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2',
                 carName:'Tesla Model Y',
                 rating:5 
                  },
                {img:'https://media.ford.com/content/fordmedia/fna/us/en/products/evs/mustang-mach-e/mustang-mach-e/jcr:content/content/media-section-parsys/textimage_f597/image.img.951.535.jpg/1608221793793.jpg',
                 carName:'Ford Mache E',
                  rating:2},
                {img:'https://cdn.motor1.com/images/mgl/nY6yy/s1/2021-volkswagen-id.4-exterior-in-motion.jpg',
                 carName:'Volkswagen ID4',
                rating:1},
                {img : 'https://media.istockphoto.com/photos/white-polestar-2-lectric-car-parked-by-a-marina-picture-id1348125913?k=20&m=1348125913&s=612x612&w=0&h=wMUMAgZK-7pMNrgr_dYh0R_Mkuj7akG-5HT10mEa9mA=',
                   carName:'PoleStar 2',
                rating:5} ]
    } 

   this.handleSearchChange = this.handleSearchChange.bind(this);
   this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

}
  
 handleSearchChange(e) {
     this.setState({
         [e.target.name]:e.target.value
     })
 }

 handleSearchSubmit() {
     this.setState({
         cars:this.state.cars.filter(car => {return this.state.searchValue == car.carName})
     })
 }

    render() {
        const  renderCars = this.state.cars.map(car => {
            return  <AllCars key={car.carName} car={car} />
        })
    
        return (<div className="cars-container">
             <div className="search-wrapper">
                  <input placeholder="Search"
                  value={this.state.searchValue}
                  name='searchValue'
                  onChange={this.handleSearchChange}  /> 
                  <button onClick={this.handleSearchSubmit}>search</button>
                  </div>
            <div className="cars-wrapper">
           
            {renderCars}

            </div>
            </div>
        )
    }
}
