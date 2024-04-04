import React from 'react';
import {Route, Routes, } from 'react-router-dom'
import './new.css';
import Home from "./Home"
import SignIn from "./signin"
import SignUp from './signup';
import Profile from "./profile"

function App() {
  return (
<>
          <Routes className="navbar">
            <Route className="home" path ='/' element = {<Home/>}/>
            <Route className="list" path = ''/>
            <Route className="news" />
            <Route className="intro"/>
            <Route className="contact"/>
            <Route className="signin" path = '/SignIn' element = {<SignIn />}/>
            <Route className="signup" path = '/SignUp' element = {<SignUp />}/>
            <Route className="Home" path = '/' element = {<Home />}/>
            <Route className="profile" path = '/profile' element = {<Profile />}/>
          </Routes>
</>
  )
}
 
export default App;
