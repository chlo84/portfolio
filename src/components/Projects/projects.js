import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
function Projects () {
return (
    <div className='page projectsPage' id='projects'>
        <h1>Projects</h1>
        <Carousel>
          <Carousel.Item interval={1000}>
              <h1>Calculator Project</h1>
              <p>This is my first project as a learning Developer, she is my first Developer baby and this project shows just how far I have come!</p>
              <button>View my Handheld Calculator Project</button>
          </Carousel.Item>
          <Carousel.Item interval={500}>
              <h1>Game Project</h1>
              <p>The game project was my second child as a learning Developer, maybe even you can see how far I have come</p>
              <button>Let's See!</button>
          </Carousel.Item>
          <Carousel.Item>
              <p>This is my third project</p>
          </Carousel.Item>
        </Carousel>
    </div>
)
}
export default Projects