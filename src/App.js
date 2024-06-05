
import { RiOctagonFill } from 'react-icons/ri';
import './App.css';
import Downfoot from './components/Downfoot';
import Header from './components/Header';
import Ourfood from './components/Ourfood';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Signin from './components/Signin';
import Home from './components/Home';
import { useState } from 'react';



function App() {

let [count, setCount] = useState(0)
let cart = ()=>{
  setCount(count+1)
}

  return (
    <div className='ms:container'>
      <BrowserRouter>
        <Header count = {count}/>
        <Routes>
          <Route path='/' element={<Home cart = {cart}/>}/>
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/ourfood' element={<Ourfood cart = {cart} />}/>
          <Route path='/signin' element={<Signin />}/>     
        </Routes>
        <Downfoot />
      </BrowserRouter>
    </div>
  );
}

export default App;
