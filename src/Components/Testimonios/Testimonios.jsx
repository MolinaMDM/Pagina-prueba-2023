import React, { useState, useEffect } from 'react';
import './Testimonios.css';
import { testimonials } from '../../services/testimonios'; // Importa los datos de testimonios desde el archivo local


const Testimonios = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    // Cambia al siguiente testimonio cada 2 segundos
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const { name, position, photo, text } = testimonials[currentTestimonialIndex];

  return (
  
    <div className="testimonial-container">
      
      
      <i className="fas fa-quote-right fa-quote"></i>
      <p className="testimonial">{text}</p>
      <div className="user">
        <img src={photo} alt={name} className="user-image" />
        <div className="user-details">
          <h4 className="username">{name}</h4>
          <p className="role">{position}</p>          
        </div>      
      </div>
      <br />
      <div className="progress-bar1"></div>
    </div>

  );
};

export {Testimonios};