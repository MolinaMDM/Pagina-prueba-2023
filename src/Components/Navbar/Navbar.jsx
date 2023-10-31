import React, { useEffect } from 'react';
import  './Navbar.css'


function Navbar() {
    const fixNav = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }
  
    // Aquí usarás useEffect para añadir y eliminar el evento de scroll.
    useEffect(() => {
      window.addEventListener('scroll', fixNav);
  
      // Asegúrate de eliminar el evento cuando el componente se desmonte.
      return () => {
        window.removeEventListener('scroll', fixNav);
      }
    }, []);
  
  
  }
  
  export{Navbar} ;


















// const nav = document.querySelector('.nav')
// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     if(window.scrollY > nav.offsetHeight + 150) {
//         nav.classList.add('active')
//     } else {
//         nav.classList.remove('active')
//     }
// }

// export {fixNav}