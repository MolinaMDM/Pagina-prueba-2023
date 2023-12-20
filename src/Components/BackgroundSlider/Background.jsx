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
import carpasnueva1 from '../../Images/carpanueva1.jpg';
import carpasnueva2 from '../../Images/carpanueva2.jpg';
import carpasnueva3 from '../../Images/carpanueva3.jpg';
import carpasnueva4 from '../../Images/carpanueva4.jpg';
import carpasnueva5 from '../../Images/carpanueva5.jpg';



class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [

        carpasnueva5, 
        carpasnueva2,
        carpasnueva3,
        carpasnueva1,
        carpasnueva4, 
     
       
        // 'https://img.freepik.com/fotos-premium/pared-fondo-abstracto-color-ladrillo-multicolor_124507-14185.jpg?w=740',
        // 'https://img.freepik.com/vector-gratis/fondo-abstracto-liquido-degradado_23-2148903051.jpg?w=740&t=st=1700014619~exp=1700015219~hmac=3ce8ef76685c70fd7eb51c0204c236051922183b0e14ab91bce678ab9e92e63f',
        // 'https://img.freepik.com/foto-gratis/diseno-colorido-diseno-espiral_188544-9588.jpg?w=740&t=st=1700014843~exp=1700015443~hmac=18ab3cef393a3e6d5dd05ae2a916cfb5667d8356a7c93b3871fc9e5b20469314',
        // 'https://img.freepik.com/vector-premium/patron-abstracto-multicolor-costuras-ilustracion-vectorial_257845-3426.jpg?w=740',
       
       
        // Agrega más imágenes aquí
       
      ],
      currentIndex: 0,
      
    };
    
    
  }

  componentDidMount() {
    this.interval = setInterval(this.nextSlide, 2000); // Cambia la imagen cada 3 segundos
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
          <div className="slide-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <div className="slide-content">
            <h2>PIJAMADAS NUNCA MAS   <br></br>
            Festeja de manera diferente !!</h2>
            <div><svg width="125px" height="125px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.65 84.13s-1.83 3.38-1.97 5.49c-.14 2.11 1.27 19.29 4.36 23.09s12.53 13.8 40.4 14.08c27.87.28 42.09-12.39 43.64-14.92c1.55-2.53 3.52-14.36 3.66-23.65S60.33 85.4 60.33 85.4l-40.68-1.27z" fill="#fbb75a"></path><path d="M61.88 106.65c24.78.7 47.72-14.5 47.72-14.5l-.7 7.6s-18.86 14.5-46.6 13.8s-43.78-13.8-43.78-13.8l-.7-6.62s22.39 12.9 44.06 13.52z" fill="#f2a05b"></path><radialGradient id="IconifyId17ecdb2904d178eab5799" cx="65.314" cy="62.727" r="45.785" gradientTransform="matrix(-.0195 .9998 -2.1765 -.0425 203.115 .09)" gradientUnits="userSpaceOnUse"><stop offset=".445" stop-color="#feeac9"></stop><stop offset=".565" stop-color="#fee7c2"></stop><stop offset=".741" stop-color="#fedeae"></stop><stop offset=".952" stop-color="#ffcf8d"></stop><stop offset="1" stop-color="#ffcb85"></stop></radialGradient><path d="M64.98 47.52c-10.56.05-42.37 2.53-45.61 16.05s-2.82 26.19-2.25 27.31c.56 1.13 1.82-.82 4.79.28c3.8 1.41 3.52 11.68 10.42 13.51s7.04-7.6 14.92-7.04c7.88.56 4.22 11.13 14.64 11.26c10.7.14 6.73-10.46 14.22-11.4c7.41-.94 3.52 10.56 13.8 9.01S99 90.32 104.26 88.77c3.99-1.17 3.65 2.75 5.54 2.58c1.55-.14.94-21.59-.47-26.37s-14.65-17.6-44.35-17.46z" fill="url(#IconifyId17ecdb2904d178eab5799)"></path><path d="M32.95 77.72c-7.49-3.16-9.91-6.15-11.12-7.67c-.84-1.06-2.11-1.48-2.82-.63c-.7.84-.35 1.76.42 2.67c.77.92 4.22 6.19 13.09 9.08c7.8 2.54 12.95 2.89 14.92 2.96c2.19.08 3.1-2.67.21-3.03c-3.31-.41-6.53.07-14.7-3.38z" fill="#fdffff"></path><path d="M55.45 82.11c-1.92-.05-2.63 1.03-2.63 1.88c0 1.03.89 1.6 2.44 1.69c1.55.09 2.44-.94 2.44-1.64c.01-.71-.42-1.89-2.25-1.93z" fill="#fdffff"></path><path d="M25.14 88.78c-.88.86-.51 1.86-.09 2.38c.69.85 1.93.99 2.57.49c.73-.56.64-1.6.18-2.29c-.59-.9-1.79-1.44-2.66-.58z" fill="#fce9ca"></path><path d="M27.6 92.48c-1.21.68-.67 2.19-.02 3.43c1.39 2.64 1.83 4.79 3.43 5.85c1.62 1.07 3.62.33 3.43-.78c-.3-1.77-1.39-.43-2.33-2.67c-.39-.93-1.19-2.42-2.12-4.43c-.54-1.18-1.17-2.09-2.39-1.4z" fill="#fce9ca"></path><path d="M55.78 99.61c-1.19.85-.47 3 1.03 4.69c1.5 1.69 3.61 3.05 5.91 2.44c1.78-.47 1.64-2.44.42-3s-2.67-.23-3.99-1.97c-.64-.85-1.54-3.47-3.37-2.16z" fill="#fce9ca"></path><path d="M84.04 97.76c-1.18.87-.07 2.68.66 3.93s3.14 3.65 4.55 2.23c1.03-1.04-.91-2.3-1.82-3.66c-.68-1.03-1.82-3.67-3.39-2.5z" fill="#fce9ca"></path><path d="M82.01 94.5c-.78.57-.66 1.47-.38 1.97c.38.66 1.6.94 2.3.33c.68-.59.28-1.55-.09-2.02s-1.31-.66-1.83-.28z" fill="#fce9ca"></path><path d="M86.4 39.57s-7.73 10.66-7.24 12.78c.38 1.67 2.18 3.46 6.03 3.72s6.26-1.53 6.81-3.23c.74-2.26-1.67-9.46-2.54-10.89c-1.23-2.03-2.34-2.32-3.06-2.38z" fill="#ee5b4a"></path><path d="M102.38 49.19l-8.31 11.64s.25 2.55 2.75 3.65c2.61 1.14 7.94 1.21 9.47-1.02c1.74-2.53.99-6.88.11-9.51c-.68-2.06-2.12-4.98-4.02-4.76z" fill="#ee5b4a"></path><path d="M88.31 62.34l-8.04 12.35s-.09 3.06 3.54 3.91c2.88.67 8.17.7 10.14-.99c1.97-1.69 1.81-5.09.11-8.66c-1.86-3.88-4.62-7.53-5.75-6.61z" fill="#ee5b4a"></path><path d="M68.29 65.37L57.76 78.11s-.21 2.46 2.39 3.66c3.34 1.55 8.48 1.47 11.09.07c2.29-1.23 2.64-5.13 1.81-7.57c-.68-1.99-1.62-3.68-1.97-4.6c-.35-.91-1.53-3.74-2.79-4.3z" fill="#ee5b4a"></path><path d="M45.62 61.07l-8.97 14.01s.28 3.27 3.7 3.94c2.95.58 7.81.92 9.5-1.2s1.76-7.5.14-11.3c-1.62-3.79-3.03-4.95-4.37-5.45z" fill="#ee5b4a"></path><path d="M32 47.86l-1.2-.43l-8 12.64s-.23 2.23 1.63 3.42c1.76 1.13 7.36 1.69 10.38.21c3.03-1.48 2.81-6.44.7-10.7c-1.95-3.95-3.51-5.14-3.51-5.14z" fill="#ee5b4a"></path><path d="M46.68 38.53l-7.77 13.41s.34 1.74 3.02 2.5c2.63.75 6.07.61 7.83-.75c1.77-1.36 2.24-4.35 1.43-7.82c-.55-2.37-2.68-6.66-4.51-7.34z" fill="#ee5b4a"></path><path d="M39.01 65.96c-1.67 3.6-4.01 8.94-1.34 10.7c2.67 1.76 6.62-1.06 8.02-6.34s1.62-7.92.28-9.05c-1.33-1.11-4.78-.02-6.96 4.69z" fill="#fd6f42"></path><path d="M29.95 47.02c-1.9.12-4.08 3.06-5.17 5.95s-2.36 6.48-1.9 7.64s3.59 2.57 4.93.11c1.34-2.46 1.07-5.75 1.37-7.43c.53-2.96 2.82-5.42 2.82-5.42s-.78-.93-2.05-.85z" fill="#fd6f42"></path><path d="M45.01 37.95c-1.36.08-2.65.65-3.81 4.45c-.63 2.08-2.41 4.49-2.58 6.76c-.17 2.28.34 2.87.34 2.87s3.26.63 4.53-1.91c1.22-2.43.84-4.91 1.25-6.06c.41-1.16 2.28-5.37 2.28-5.37s-.82-.8-2.01-.74z" fill="#fd6f42"></path><path d="M86.07 39.5c-1.43-.07-3.52 1.7-4.85 4.86c-1.34 3.16-2.15 6.59-2.09 7.6s5.34 1.13 7.2-1.92c1.17-1.92 1.11-7.07.98-8.31c-.12-1.25.25-2.16-1.24-2.23z" fill="#ff6e45"></path><path d="M101.94 49.15c-1.23.2-4.13.91-6.47 5.96c-1.46 3.15-1.9 6.18-.84 6.62s3.95.88 5.27-.77c1.32-1.65 2.78-6.14 3.11-8.38c.32-2.22.54-3.69-1.07-3.43z" fill="#ff6e45"></path><path d="M80.57 75.54c1.58 1.44 4.59.08 5.67-1.2c1.65-1.97 3.03-6.09 3.1-8.97c.05-2.09.53-3.27-1.3-3.17c-.63.04-2.36.35-4.36 3.31c-1.59 2.34-2.5 4.19-3.03 6.48c-.45 1.9-.54 3.13-.08 3.55z" fill="#ff6e45"></path><path d="M66.21 64.66c-1.02-.04-2.96.56-4.96 3.87c-2.01 3.31-4.29 8.66-3.31 10.31c.99 1.65 3.41 1.83 5.88.81c2.46-1.02 4.15-4.58 4.29-6.02c.14-1.44 1.09-7.6.28-8.2c-.81-.59-1.3-.73-2.18-.77z" fill="#ff6e45"></path><radialGradient id="IconifyId17ecdb2904d178eab5800" cx="64.791" cy="26.285" r="39.024" gradientTransform="matrix(1 0 0 .6157 0 10.1)" gradientUnits="userSpaceOnUse"><stop offset=".034" stop-color="#ffe265" stop-opacity=".7"></stop><stop offset=".112" stop-color="#ffe575" stop-opacity=".643"></stop><stop offset=".417" stop-color="#fff0b0" stop-opacity=".422"></stop><stop offset=".677" stop-color="#fff8db" stop-opacity=".234"></stop><stop offset=".88" stop-color="#fffdf5" stop-opacity=".087"></stop><stop offset="1" stop-color="#ffffff" stop-opacity="0"></stop></radialGradient><path d="M104.3 26.03c0 13.93-22.26 26.28-39.61 26.28s-39.42-13.1-39.42-27.03S47.03.26 64.37.26S104.3 12.1 104.3 26.03z" fill="url(#IconifyId17ecdb2904d178eab5800)"></path><path d="M72.79 31.12c.35-.49 6.94.06 7.53.21c.28.07.21 25.2-.14 25.41c-.3.18-1.48 1.27-3.73 1.27s-3.52-.77-3.94-1.06c-.42-.28-.07-25.34.28-25.83z" fill="#fea8a8"></path><path d="M60.69 37.32c-.27.23-.35 24.5-.14 24.71c.21.21 1.62 1.48 4.36 1.41c2.75-.07 4.01-1.06 4.22-1.27c.21-.21.14-24.85-.07-24.99c-.21-.15-7.95-.22-8.37.14z" fill="#ec7fae"></path><path d="M48.86 32.11c-.34.2-.35 24.85-.21 25.06c.14.21 2.18.92 4.08.92s3.73-.42 3.94-.63c.21-.21.07-25.06-.14-25.34s-7.32-.22-7.67-.01z" fill="#93c7ee"></path><radialGradient id="IconifyId17ecdb2904d178eab5801" cx="64.909" cy="35.978" r="19.428" gradientUnits="userSpaceOnUse"><stop offset=".17" stop-color="#ff9616"></stop><stop offset=".654" stop-color="#ffd429"></stop></radialGradient><path d="M64.98 15c.42 0 .99 3.31 1.76 5.21s3.66 6.62 2.53 10.7c-1.23 4.47-8.2 5.34-9.71-.49c-1.06-4.08 2.53-8.31 3.45-10.21c.63-1.31 1.68-5.21 1.97-5.21z" fill="url(#IconifyId17ecdb2904d178eab5801)"></path><radialGradient id="IconifyId17ecdb2904d178eab5802" cx="77.212" cy="30.827" r="19.044" gradientUnits="userSpaceOnUse"><stop offset=".17" stop-color="#ff9616"></stop><stop offset=".654" stop-color="#ffd429"></stop></radialGradient><path d="M76.31 9.86s-1.04 4.74-2.32 6.76c-1.83 2.89-2.99 6.84-1.55 10.07c1.83 4.08 9.16 3.87 9.29-3.1c.07-3.66-1.53-5.6-2.67-7.67c-.78-1.41-2.26-5.92-2.75-6.06z" fill="url(#IconifyId17ecdb2904d178eab5802)"></path><radialGradient id="IconifyId17ecdb2904d178eab5803" cx="52.822" cy="30.822" r="18.853" gradientUnits="userSpaceOnUse"><stop offset=".17" stop-color="#ff9616"></stop><stop offset=".654" stop-color="#ffd429"></stop></radialGradient><path d="M53.01 10.64s-1.9 4.72-3.1 6.48s-3.33 5.91-2.11 9.22c1.48 4.01 8.03 4.49 9.29-.77c.84-3.52-.99-6.19-2.25-9.08c-.79-1.82-1.83-5.85-1.83-5.85z" fill="url(#IconifyId17ecdb2904d178eab5803)"></path></g></svg></div>
          
            <br></br>
            <p>A tu estilo !! A tu manera !! </p>
            {/* Agrega cualquier contenido HTML adicional aquí */}
          </div>
          <div className="slide-content1">
            <div>
            <svg width="151px" height="151px" viewBox="-102.4 -102.4 1228.80 1228.80" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M900.5 370.6v92.6c0 9.4-5.9 17.8-14.8 20.9l-151.9 52.2V396.5l-101.9-33.1 105.6-45.6c11.9-6.1 21.9-12 30-17.8l117.3 48c9.4 3.5 15.7 12.6 15.7 22.6z" fill="#ffcec2"></path><path d="M887.1 492.2v4.4l-12.3 4.2v-8.6z" fill="#490d18"></path><path d="M874.8 500.8v262.3l-141 54V549.2z" fill="#e123ae"></path><path d="M912.8 370.6v92.6c0 14.7-9.3 27.8-23.2 32.6l-2.5 0.9v-4.4h-12.3v8.6l-141 48.4v-13L885.6 484c8.9-3.1 14.8-11.5 14.8-20.9v-92.6c0-10-6.3-19-15.7-22.5l-117.3-48c4.2-2.8 7.9-5.7 11.1-8.6l110.6 45.2c14.2 5.1 23.7 18.8 23.7 34zM771.9 213.5c12.8 17.8 17.5 32.5 14.6 44.9-2.1 9.1-8.4 17.8-19.5 26.8-8.6 6.9-20.1 14-34.8 21.5l-116.4 50.1c-3.8-20.9-24.2-38.3-53-47.2l92.2-101c14.1-19.3 33.3-30.5 54.5-31.5 17.8-1 35.6 6.1 46.2 18l16.2 18.4z" fill="#490d18"></path><path d="M769 287.5l9.6 4c-3.2 3-6.9 5.8-11.1 8.6l-3.1-1.2 4.6-11.4zM733.8 817.1v6.2h-12.4v-1.5zM733.8 536.3v12.9l-3.1 1.2-4.1-11.7zM721.4 405.5v416.3L635 854.9v-419l-58.4-22.4c21.5-9.8 36.2-24.8 39.3-42.4l105.5 34.4zM635 854.9v8.9h-12.4v-4.2z" fill="#490d18"></path><path d="M635 435.9v419l-12.3 4.7V600.2l8.4-3.1-4.3-11.6-4.1 1.5V444.3l-63.8-24.5c6.3-1.6 12.3-3.8 17.8-6.3l58.3 22.4z" fill="#490d18"></path><path d="M764.4 298.8l3.1 1.2c-8.2 5.8-18.2 11.7-30 17.8l-105.6 45.6 101.9 33.1v139.8l-7.2 2.5 4.1 11.6 3.1-1.1v267.8l-12.3 4.7V405.5l-105.6-34.3c0.4-2.2 0.6-4.7 0.6-7 0-2.5-0.2-4.9-0.7-7.3l116.4-50.1c14.7-7.5 26.2-14.6 34.8-21.5l2 2.2-4.6 11.3zM626.7 585.5l4.3 11.7-8.4 3V587z" fill="#490d18"></path><path d="M622.6 600.2v259.3l-110 42.1-123-47.4V588.5L497 632.7c6.1 2.6 12.3 3.8 18.8 3.8 5.4 0 11-1 16.3-2.8l90.5-33.5z" fill="#e123ae"></path><path d="M622.6 444.3V587l-94.7 35.1c-8.5 3.1-17.7 2.8-26.1-0.7l-112.2-46.1V440.9l65.4-29.6c17 8.6 38.9 13.8 63.2 13.8 14.6 0 28.2-1.9 40.5-5.3l63.9 24.5z" fill="#ffcec2"></path><path d="M621.4 233.2l-4.7 11.4-8-3.3 8.7-9.7z" fill="#490d18"></path><path d="M781.4 205.8c15.6 21.2 21 39.3 17 55.6-2.6 10.6-8.9 20.4-19.9 30l-9.6-4-2-2.2c11.1-9 17.4-17.7 19.5-26.8 3-12.5-1.7-27.2-14.6-44.9l-16.3-18.3c-10.6-12-28.4-19-46.2-18-21.1 1-40.4 12.2-54.5 31.5l-92.2 101c-4.3-1.4-8.8-2.5-13.5-3.3l59.4-65.1 8 3.3 4.7-11.4-4-1.6 28-30.7c15.8-21.9 38.5-34.9 63.3-36.1 21.7-1.1 42.7 7.2 55.9 22.1l17 18.9zM615.7 356.9c0.5 2.3 0.7 4.8 0.7 7.3 0 2.3-0.2 4.8-0.6 7l-7.4-2.5-0.1-8.8 4.1-1.6 3.3-1.4z" fill="#490d18"></path><path d="M608.7 241.3l-59.4 65.1c-9.6-2.1-20.1-3.1-31-3.1-9.3 0-18.2 0.7-26.7 2.2l-55.4-71.7 70-24.7c8.5-3.3 17.8-3.2 26.2 0.4l76.3 31.8z" fill="#ffcec2"></path><path d="M561.1 407.6l15.4 5.9c-5.4 2.5-11.5 4.7-17.8 6.3l-2.1-0.7 4.5-11.5zM562.7 309.7l-6.8 7.5-9-8.3 2.3-2.6c4.8 0.9 9.2 2 13.5 3.4zM518.3 315.6c46.6 0 85.8 22.2 85.8 48.5 0 17.8-17.7 33.6-43.5 42.1-12.5 4.2-27 6.5-42.4 6.5-46.7 0-85.9-22.2-85.9-48.7 0-4.6 1.2-9 3.5-13.3 10.5-19.9 43.9-35.1 82.5-35.1zM506.2 209l-70 24.7-7.9-10.2 73.6-25.9c11.2-4.4 23.8-4.3 35.3 0.4l80.3 33.7-8.8 9.6-76.3-31.9c-8.4-3.6-17.7-3.7-26.2-0.4zM501.9 621.4c8.4 3.6 17.5 3.8 26.1 0.7l94.7-35.1v13.2l-90.5 33.5c-5.3 1.9-10.9 2.8-16.3 2.8-6.4 0-12.7-1.2-18.8-3.8l-107.4-44.2v-13.2l112.2 46.1zM491.6 305.5l0.1 0.1-9.8 7.5-3.7-4.8c4.4-1.1 8.8-2.1 13.4-2.8z" fill="#490d18"></path><path d="M384.3 186.8l94 121.5c-22.7 6.2-40.8 17.4-50.5 31.6l-1.6 0.7-118.4-57.4a43.9 43.9 0 0 1-24.5-33.7c-2.1-14.6 3.5-29.1 14.6-39l33.1-28.9c7.7-6.8 17.5-10 27.8-9 10.2 1 19.2 6.1 25.5 14.2zM442.5 403.4l8.5-3.8 5.1 11.2-1 0.5c-4.6-2.5-8.8-5.1-12.6-7.9z" fill="#490d18"></path><path d="M482 313.1l9.8-7.5-0.1-0.1c8.5-1.5 17.4-2.2 26.7-2.2 10.9 0 21.4 1 31 3.1l-2.3 2.6 9 8.3 6.8-7.5c28.8 8.9 49.1 26.3 53 47.2l-3.3 1.5-4.1 1.6 0.1 8.8 7.4 2.5c-3.1 17.5-17.8 32.6-39.3 42.4l-15.4-5.9-0.5-1.4c25.8-8.5 43.5-24.3 43.5-42.1 0-26.3-39.3-48.5-85.8-48.5-38.5 0-72 15.2-82.5 35.2l-1.1-0.5-4.9-11.2-2 0.9c9.8-14.2 27.8-25.4 50.5-31.6l3.5 4.4zM442.5 403.4L377.3 433v416.4l-80.8-31.1V412.2l124.2-55.6c-0.5 2.5-0.7 4.9-0.7 7.5 0 15.1 8.4 28.8 22.5 39.3zM428.3 223.5l7.9 10.2-8.1 2.9-4-11.6z" fill="#490d18"></path><path d="M451 399.6l-8.5 3.8c-14.1-10.5-22.5-24.2-22.5-39.3 0-2.6 0.2-5.1 0.7-7.5l14-6.3 1.1 0.5c-2.2 4.3-3.5 8.8-3.5 13.3 0 26.4 39.3 48.7 85.9 48.7 15.3 0 29.9-2.3 42.4-6.5l0.5 1.4-4.4 11.5 2.1 0.7c-12.3 3.5-25.9 5.3-40.5 5.3-24.3 0-46.2-5.2-63.2-13.8l1-0.5-5.1-11.3zM428.7 341.9l-5.3 11.1-1.6-0.7c1.1-4 3-7.7 5.2-11.2l1.7 0.8z" fill="#490d18"></path><path d="M426.2 340.7l1.6-0.7c-0.2 0.4-0.5 0.7-0.7 1.1l-0.9-0.4z" fill="#231815"></path><path d="M426.2 340.7l0.9 0.4c-2.2 3.6-4.1 7.3-5.2 11.2l-10.4-5.1 14.7-6.5z" fill="#490d18"></path><path d="M429.7 339.1l4.9 11.2-14 6.3c0.2-1.5 0.6-3 1.1-4.3l1.6 0.7 5.3-11.1-1.6-0.9c0.2-0.4 0.5-0.7 0.7-1.1l2-0.8zM389.6 854.3v4.2h-12.3v-9.1z" fill="#490d18"></path><path d="M389.6 588.5v265.8l-12.3-4.9V584.7h2.9zM389.6 575.3v13.2l-9.4-3.8 4.7-11.4z" fill="#490d18"></path><path d="M377.3 584.7V433l65.2-29.6c3.8 2.8 8 5.4 12.6 7.9l-65.4 29.6v134.4l-4.7-2-4.7 11.4h-3zM296.5 818.3v6.9h-12.4v-11.7z" fill="#490d18"></path><path d="M296.5 412.2v406.1l-12.3-4.8v-266l4.3 1.4 3.7-11.7-8-2.5V404.1l127.3-56.9 10.4 5.1c-0.5 1.4-0.9 2.8-1.1 4.3l-124.3 55.6zM887.1 496.6v274.9L512.6 914.9l-228.9-88.3 0.4-1.4h12.4v-6.9l80.8 31.1v9.1h12.3v-4.2l123 47.4 110-42.1v4.2H635v-8.9l86.4-33.1v1.5h12.4v-6.2l141-54V500.8z" fill="#490d18"></path><path d="M292.5 289.4l-0.6-1.6c3.2 2.7 6.7 4.8 10.4 6.7l109.2 52.7-127.3 56.9v130.5L164 496.9v-0.2h-0.7l-28.3-8.9c-7.4-2.2-12.5-9-12.5-16.8V369.7c0-8.5 5.1-16.1 12.8-19.3l157.2-61z" fill="#ffcec2"></path><path d="M292.2 537.1l-3.7 11.8-4.4-1.4v-12.8zM288.1 277.9l3.8 9.9c-3.1-2.3-5.9-5.1-8.4-8.2l4.6-1.7z" fill="#490d18"></path><path d="M284.1 547.5v266l-101.5-39.1c-11.1-4.3-18.6-15.2-18.6-27.2V509.9l120.1 37.6z" fill="#e123ae"></path><path d="M284.1 534.7v12.8L164 509.9v-13zM270.9 251.3c-2.5-18.8 4.4-37.5 18.8-50l33.1-28.9c10.2-9.1 23.5-13.3 37.2-12 13.6 1.2 25.7 8 34.1 18.9l34.2 44.2-4.2 1.5 4.1 11.6 8-2.8 55.4 71.7c-4.6 0.7-9 1.7-13.3 2.8l-94-121.5c-6.3-8.2-15.3-13.2-25.6-14.2-10.2-1-20.1 2.2-27.8 9l-33.1 28.9c-11.1 9.9-16.7 24.5-14.6 39 2 14.7 11.1 27.3 24.5 33.7l118.4 57.4-14.7 6.5-109.2-52.7c-3.7-1.9-7.2-4-10.4-6.7l-3.8-9.9-4.6 1.7c-6.5-7.7-11-17.6-12.5-28.2zM164 496.9v13l-12.4-3.9v-9.4h11.7z" fill="#490d18"></path><path d="M164 496.6v0.3l-0.7-0.3z" fill="#231815"></path><path d="M151.6 747.2V506l12.3 3.8v237.3c0 12 7.5 22.8 18.6 27.2L284 813.4v11.7l-0.5 1.4L178 785.7c-15.6-5.9-26.4-21.5-26.4-38.5z" fill="#490d18"></path><path d="M110.2 369.7c0-13.5 8.2-25.6 20.6-30.7l152.8-59.3c2.5 3.1 5.3 5.8 8.4 8.2l0.6 1.6-157.2 61c-7.8 3.2-12.8 10.7-12.8 19.3V471c0 7.8 5.1 14.6 12.5 16.8l28.3 8.9h-11.6v9.4l-20.4-6.4c-12.6-4-21.1-15.4-21.1-28.6V369.7z" fill="#490d18"></path></g></svg>


            </div>
            <h2>Servicio Personalizado </h2>
            <p> Cumpleaños / Dia del Padre - Madre / Halloween / Enamorados y muchos mas .. </p>
            {/* Agrega cualquier contenido HTML adicional aquí */}
          </div>
        </div>
      
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
