import  './Footer.css'

const Footer = () => {
    return (

        <>

<section class ="section">
    <div >
      <h1>NOMBRE</h1>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex eos incidunt minus non dolorem odit. Voluptates explicabo sed quidem labore officia rerum nesciunt tempore porro quos repellendus. Facere, quae?</p>
    </div>
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
      <p class="stylelink">Mendoza, Argentina</p>
      <p class="stylelink">infogrupo2@gmail.com</p>
      <p class="stylelink">+2634848524</p>
      <p class="stylelink">+2614848524</p>
    </div>
    </section>
   
    <div class ="final">
      <p id="stylecopy">© 2023 Copyright: <a href="#">nombre</a></p>
    </div>

        </>

    );
};

export {Footer} ;