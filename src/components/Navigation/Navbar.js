import React from 'react'; 
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'
function Navbar() {
return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Block level button
  </Button>
  <Button variant="secondary" size="lg">
    Block level button
  </Button>
</div>
   
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       <li class="nav-item">
       <Link to='home' className='navLink'> Home</Link>
       </li>
       <li class="nav-item">
         <Link to='about' smooth={true} className='navLink'> AboutMe</Link>
       </li>
       <li class="nav-item">
         <Link to='projects' smooth={true} className='navLink'> Projects</Link>
       </li>
       <li class="nav-item">
         <Link to='skills' smooth={true} className='navLink'> Skills</Link>
       </li>
       <li class="nav-item">
         <Link to='contact' smooth={true} className='navLink'> Contact Information</Link>
       </li>
       
       
     </ul>
   </div>
 
</nav> 
    
)

};
export default Navbar;