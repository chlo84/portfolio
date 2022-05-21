// import React, { useEffect } from 'react'; 
import { Link } from "react-scroll";
// import Button from 'react-bootstrap/Button';
import './Navbar.css';
import { AiOutlineMenu } from "react-icons/ai";




function Navbar() {
return (
  <nav className='navBar'>
  <Link className='navLogo navBarLi' to='landingPage' smooth={true}>
    
  </Link>
    <nav className="Nb navbar navbar-expand-lg navbar-light bg-light">
      
   
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
       <li className="nav-item">
       <Link to='home' className='navLink'> Home</Link>
       </li>
       <li className="nav-item">
         <Link to='about' smooth={true} className='navLink'> AboutMe</Link>
       </li>
       <li className="nav-item">
         <Link to='projects' smooth={true} className='navLink'> Projects</Link>
       </li>
       <li className="nav-item">
         <Link to='skills' smooth={true} className='navLink'> Skills</Link>
       </li>
       <li className="nav-item">
         <Link to='contact' smooth={true} className='navLink'> Contact Information</Link>
       </li>
       
  {<AiOutlineMenu/>}
    </ul> 
  </div>
</nav>
   </nav> 

       
     
  
 
    
)

};
export default Navbar;