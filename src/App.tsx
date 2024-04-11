
  import React, { Children } from 'react';
  import {Route,Router, Routes, BrowserRouter} from 'react-router-dom';
  import './index.css';
  import Home from "./page/Home"
  import SignIn from "./page/signin"  
  import SignUp from './page/signup';
  import Profile from "./page/profile"
  import Macbook from "./page/macbook"
  import Asus from "./page/asus"
  import Msi from "./page/msi"
  import Lenovo from "./page/lenovo"
  import Hp from "./page/hp"
  import Acer from "./page/acer"
  import LG from "./page/LG"
  import Dell from "./page/Dell"
  import Swiper from './page/swiper';
  import Post from './post/post1';

  function App() {
    return (
  <>
            <BrowserRouter >
              <Routes>
                <Route path ='/' element = {<Home/>}/>
                <Route path = '/SignIn' element = {<SignIn />}/>
                <Route path = '/SignUp' element = {<SignUp />}/>
                <Route path = '/profile' element = {<Profile />}/>
                <Route path = '/macbook' element = {<Macbook/>}/>
                <Route path = '/asus' element = {<Asus/>}/>
                <Route path = '/msi' element = {<Msi/>}/>
                <Route path = '/lenovo' element = {<Lenovo/>}/>
                <Route path = '/hp' element = {<Hp/>}/>
                <Route path = '/acer' element = {<Acer/>}/>
                <Route path = '/LG' element = {<LG/>}/>
                <Route path = '/Dell' element = {<Dell/>}/>
                <Route path = '/Swiper' element = {<Swiper/>}/>
                <Route path = '/post' element = {<Post/>}/>
                
              </Routes>
            </BrowserRouter>
  </>
    )
  }
  
  export default App;
