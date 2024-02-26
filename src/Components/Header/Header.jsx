import  './Header.css'
import { Link } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';


// const nav = document.querySelector('.nav')
// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     if(window.scrollY > nav.offsetHeight + 150) {
//         nav.classList.add('active')
//     } else {
//         nav.classList.remove('active')
//     }
// }


const Header = () => {
    return (
      <>
<Navbar/>
 <nav class="nav">
  <div class="svg1"> <svg width="120px" height="120px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000" stroke="#000000" stroke-width="0.064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M62 6.5V2C35 2 13.2 23.8 13.2 50.6h4.5C17.7 26.3 37.5 6.5 62 6.5z" fill="#f66"></path><path d="M17.7 50.6h4.5C22.2 28.8 40 11 62 11V6.5c-24.5 0-44.3 19.8-44.3 44.1z" fill="#fffb80"></path><path d="M62 15.5V11c-22 0-39.8 17.7-39.8 39.6h4.5c0-19.4 15.8-35.1 35.3-35.1" fill="#a3e66f"></path><path d="M26.7 50.6h4.5C31.3 33.7 45 20 62 20v-4.5c-19.5 0-35.3 15.7-35.3 35.1z" fill="#66c2ff"></path><path d="M62 24.5V20c-17 0-30.7 13.7-30.7 30.6h4.5c0-14.4 11.7-26.1 26.2-26.1" fill="#9180ff"></path><path d="M10.1 60.7c-.7 0-1.4-.1-2.1-.3c-2.8-.9-4.7-3.5-4.7-6.4c0-1.9.8-3.8 2.3-5.1l1.2-.9l.4-1.6c1.1-3.9 4.8-6.6 8.8-6.6c.4 0 .8 0 1.3.1c.4.1.7.1 1.1.2l.2-.3c1.6-2.9 4.8-4.8 8.1-4.8c5.1 0 9.3 4.2 9.3 9.3v.9c.4.2.8.3 1.2.5c2.5 1.4 4 4.1 4 6.9c0 3.7-2.6 6.9-6.2 7.8c-.6.1-1.2.2-1.8.2l-23.1.1" fill="#ffffff"></path><path d="M26.9 36.4c4.4 0 8 3.5 8 7.9v.6c-1.8.1-3.5.9-4.8 2c1-.6 2.1-.9 3.3-.9c.4 0 .9 0 1.3.1c.7.1 1.4.4 2 .8c2 1.1 3.3 3.3 3.3 5.7c0 3.1-2.2 5.8-5.2 6.5c-.5.1-1 .2-1.5.2H10.1c-.6 0-1.2-.1-1.7-.3c-2.2-.7-3.7-2.7-3.7-5.1c0-1.6.7-3.1 1.9-4.1c.5-.5 1.1-.8 1.8-1c.6-.2 1.2-.3 1.8-.3c1.7 0 3.3.8 4.3 2.1c-1.2-2.1-3.3-3.6-5.8-3.8c.9-3.2 3.9-5.6 7.5-5.6c.4 0 .8 0 1.1.1c.7.1 1.4.3 2.1.6c2.4 1.1 4.2 3.3 4.6 6c0-3.1-1.6-5.7-4-7.3c1.3-2.6 3.9-4.2 6.9-4.2m0-2.7c-3.7 0-7.1 1.9-9 4.9h-.2c-.6-.1-1-.1-1.5-.1c-4.7 0-8.8 3.1-10.1 7.6l-.3 1.1c-.3.2-.7.5-1 .7a7.79 7.79 0 0 0-2.8 6c0 3.5 2.2 6.6 5.6 7.7c.8.3 1.7.4 2.6.4h23.2c.7 0 1.4-.1 2.1-.2c4.3-1 7.3-4.7 7.3-9.1c0-3.3-1.8-6.4-4.7-8.1c-.1-.1-.3-.2-.4-.2v-.1c-.1-5.9-4.9-10.6-10.8-10.6z" fill="#75d6ff"></path></g></svg></div>

      <div class="container">
        
        <p class="logo44">    <a >*NUNCA JAMAS*  <br />Cotillon y Eventos </a>
        </p>
        
        <ul class =" ul1">
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Home">Home</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects">Productos</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects1">Servicios</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects2">Nosotros</Link></ul>
         {/* <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects3">Proyectos3</Link></ul> */}
         
        </ul>
      </div>    
 </nav>

  

    
    

     </>

    )
  }
  
  export {Header} ;