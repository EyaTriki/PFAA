import './App.css';
import NavBar from './components/header/NavBar';
import NewNavBar from './components/newNavbar/NewNavBar';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import SignIn from './components/signin_signup/SignIn';
import SignUp from './components/signin_signup/SignUp';
import Cart from './components/cart/Cart';
import {Routes,Route} from 'react-router-dom';
import Buynow from './components/buynow/Buynow';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <NewNavBar/>
    <Routes>
      <Route path="/" element={<MainComp/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/getproductsone/:id" element={<Cart/>}/>
      <Route path="/buynow" element={<Buynow/>}/>
    </Routes>
  
    <Footer/>
    </>
  );
}

export default App;
