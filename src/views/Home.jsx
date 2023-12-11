import  './Home.css'
import { Layout } from "../Components/Layout/Layout";
import { Slider } from '../Components/BackgroundSlider/Background';





const Home =() => {
  return ( 
   
  
  <Layout> 


  <Slider/>
  <section className='sect1'>
 <div className='divpadre'>
 <br />
 <h1 className='div1'>
 <li>Centros de Mesa </li>
 <li>Piñatas Personalizados </li>
 <li>Calendarios Personalizados</li>
 <li>Cotillon </li>
 <li>y Mucho mas ... </li>
 </h1>



 <h1 className='div3'>Todos nuestros  
 <br /> Productos  y 
 Servicios  <br />  son personalizados para 
  <br /> una mejor experiencia...</h1>

  <h1 className='div2'>  Servicio de Pijamadas 
 <li>Carpas Tipi </li>
 <li>Colchonetas y Sabanas Individuales </li>
 <li>Guirnaldas con luces</li>
 <li>Juegos de mesa </li>
 <li>y Mucho mas ... </li>
  </h1>

 </div>
 </section> 
    </Layout> 
  );  
};

export {Home}