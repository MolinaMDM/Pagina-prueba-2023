import React, { useEffect } from 'react';
import  './Scroll.css'

const ScrollAnimationComponent = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const checkBoxes = () => {
      const triggerBottom = window.innerHeight / 5 * 4;

      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();

    return () => {
      // Limpiar el listener al desmontar el componente
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []); // El array vacío asegura que useEffect solo se ejecute una vez, equivalente a componentDidMount en una clase

  return (
    <div className='scroll'>
      <h1>Scroll to see the animation</h1>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      {/* Agrega el resto de tus cajas aquí */}
    </div>
  );
};

export {ScrollAnimationComponent} ;
