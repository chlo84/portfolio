import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function App() {
  return (
    <React.Fragment>
   <Navbar/>
   <Hero/>
   </React.Fragment>
  );
}

export default App;
