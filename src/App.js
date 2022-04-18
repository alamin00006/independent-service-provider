
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Header from './Pages/Header/Header';
import HealthMedicine from './Pages/HealthMedicine/HealthMedicine';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import CheckOutPage from './Pages/Services/CheckOutPage/CheckOutPage';
import SignUp from './Pages/SignUp/SignUp';



function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='service/:serviceId' element ={<RequireAuth><CheckOutPage></CheckOutPage> </RequireAuth>}></Route>
      <Route path='/health' element={<HealthMedicine></HealthMedicine>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='signin' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;
