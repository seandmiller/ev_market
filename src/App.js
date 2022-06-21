
import './App.css';
import Home from './pages/home';
import Cars from './pages/cars';
import Navi from './pages/navi';
import VehicleInfo from './pages/vehicleinfo';

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App" >

      <Router>
        <Navi/>
      
       <Routes>
       <Route path='/' element={<Home/>}></Route>

        <Route path='/cars' element={<Cars/>}></Route>
       <Route path='/signin' element={<SignIn/>}> </Route>
        <Route path='/cars/:data' element={<VehicleInfo/>}></Route> 

        </Routes>
    
  
    </Router>
    </div>
  );
}

export default App;
