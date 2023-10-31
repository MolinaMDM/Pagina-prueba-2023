import  './Footer.css'
import { Testimonios } from '../Testimonios/Testimonios';
import { Pedido } from '../Form/Form';




const Footer = () => {
    return (
        <>

<div>
<Pedido/>
</div>

<div>
<Testimonios/>
</div>




<section class ="section">
    <div class ="proyect">
      <h1>PROYECTOS</h1>
      <div class="stylelink"><a  href="#">Google</a></div>
      <div class="stylelink"><a  href="#">Google</a></div>
      <div class="stylelink"><a  href="#">Google</a></div>
      <div class="stylelink"><a  href="#">Google</a></div>
    </div>
    <div>
      <h1>CONSULTAS</h1>
      <div class="stylelink"><a href="#">Precios</a></div>
      <div class="stylelink"><a href="#">Herramientas</a></div>
      <div class="stylelink"><a href="#">Pedidos</a></div>
      <div class="stylelink"><a href="#">Ayuda</a></div>
    </div>
    <div>
      <h1>CONTACTO</h1>
      <p>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        < path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
         </svg> Numero Whas 456456 
      </p>
      <p>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
         <path d="M16.5 7.5l0 .01" />
      </svg> iNSTAGRAN
      </p>
      <p>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg> FACEBOOK
      </p>

    </div>
    </section>
   
    <div class ="final">
      <p id="stylecopy">© 2023 Copyright: <a href="#">nombre</a></p>
    </div>

        </>

    );
};

export {Footer} ;