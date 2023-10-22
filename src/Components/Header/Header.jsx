import  './Header.css'
import { Link } from "react-router-dom";


const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


const Header = () => {
    return (
      <>
  
 <nav class="nav">
      <div class="container">
        <h1 class="logo"><a href="/index.html">My Empresa</a></h1>
        <ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Home">Home</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects">Proyectos</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects1">Proyectos1</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects2">Proyectos2</Link></ul>
         <ul><Link to="/"></Link></ul>
         <ul><Link to="/Proyects3">Proyectos3</Link></ul>
         
        </ul>
      </div>
 </nav>

    <div class="hero">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
      </div>
    </div>

    
    

     </>

    )
  }
  
  export {Header} ;