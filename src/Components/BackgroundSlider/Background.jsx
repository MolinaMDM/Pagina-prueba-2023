// import  './Background.css'
// import React, { useState } from 'react';
// import { slidesData } from '../../services/slidesData';


// function Slider() {
//   const [activeSlide, setActiveSlide] = useState(0);

 


//   const nextSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
//   };

//   const previousSlide = () => {
//     setActiveSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="slider-container">
//       {slidesData.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide ${index === activeSlide ? 'active' : ''} `}
//           style={{ 
//           transform: `translateX(-${100 * activeSlide}%)`,  
//           backgroundImage: `url(${slide.imageUrl})`, 
          
          
         
          
//         }}

//         >HOLAAAAA  </div>
//       ))}
    
//      <button className="arrow left-arrow" onClick={previousSlide}>
//         <i className="fas fa-arrow-left"></i>
//       </button>

//       <button className="arrow right-arrow" onClick={nextSlide}>
//         <i className="fas fa-arrow-right"></i>
//       </button>
     
     
      
//     </div>
//   );
// }



// export {Slider}


import React, { Component } from 'react';
import './Background.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        // Agrega más imágenes aquí
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextSlide, 5000); // Cambia la imagen cada 3 segundos
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.state.images.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const { images, currentIndex } = this.state;
    return (
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="prev" onClick={this.prevSlide}>
          &#8249;
        </button>
        <button className="next" onClick={this.nextSlide}>
          &#8250;
        </button>
      </div>
    );
  }
}

export {Slider} ;
