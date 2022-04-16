
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Header from './Pages/Header/Header';
import HealthMedicine from './Pages/HealthMedicine/HealthMedicine';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='service/:serviceId' element ={<ServiceDetails></ServiceDetails>}></Route>
      <Route path='health' element={<HealthMedicine></HealthMedicine>}></Route>
        <Route path='about' element={<About></About>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
