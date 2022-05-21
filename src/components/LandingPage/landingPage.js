import React from 'react';
import BridgeImg from './../../Img/VerrazanoB.jpg'
// import Button from 'react-bootstrap/Button';
import "./landingPage.css";
function LandingPage () {
return (
    <div className='page LandingPage' id='home'>
        <h1>landingPage</h1>
        <img src= {BridgeImg} alt='NYC Bridge'/>
    </div>
)
}
export default LandingPage