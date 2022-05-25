import React from 'react';
import Calculatorimg from '../../Img/calculatorimg.png'
import Fabulousfliximg from '../../Img/Fabulous Flix.png'
import Carousel from 'react-bootstrap/Carousel'
import './projects.css'
function Projects () {
return (
    <div className='page projectsPage' id='projects'>
        <h1>Projects</h1>
        <Carousel>
          <Carousel.Item interval={1000}>
              <h1>Calculator Project</h1>
              <img className='Calculatorimg' src={Calculatorimg}></img>
              <p>This is my first project as a learning Developer, she is my first Developer baby and this project shows just how far I have come!</p>
              <button>View my Handheld Calculator Project</button>
          </Carousel.Item>
          <Carousel.Item interval={500}>
              <h1>Fabulous Flix</h1>
              <img className='Fabulousfliximg' src={Fabulousfliximg}></img>
              <p>The game project was my second child as a learning Developer, maybe even you can see how far I have come</p>
              <button>Let's See!</button>
          </Carousel.Item>
          <Carousel.Item>
              <p>Music App</p>
          </Carousel.Item>
        </Carousel>
    </div>
)
}
export default Projects