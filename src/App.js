import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import LandingPage from './components/LandingPage/landingPage';
import AboutMe from './components/AboutMe/aboutMe';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import Footer from './components/Footer/footer';

import React from 'react';
function App() {
  return (
    <React.Fragment>
   <Navbar/>
   <LandingPage/>
   <AboutMe/>
   <Projects/>
   <Skills/>
   <Footer/>
   
   </React.Fragment>
  );
}

export default App;
