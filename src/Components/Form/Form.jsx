import  './Form.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Pedido = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhr24zn', 'template_26d4f7k', form.current, 'sEVn3PMXf93ViSbQg')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); 
          setMensajeEnviado(true); // Establecer el estado a verdadero
      }, (error) => {
          console.log(error.text);
      });
   
  };
  
  
  return (
    <div className='mensajepadre'>
      {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es verdadero
        <div className='mensaje'>Gracias por tu mensaje , pronto te estaremos respondiendo</div>
        
      ) : (
        <form ref={form} onSubmit={sendEmail}>
            <div class="titulo"> Ingresa tus Pedidos o Consultas aqui !! <svg fill="#731770" width="64px" height="64px" viewBox="0 0 56.00 56.00" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#731770" stroke-width="0.28"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 4.0469 31.1875 C 4.0469 41.0781 10.4687 46.8906 21.2968 46.8906 L 25.7968 46.8906 C 29.9219 46.8906 32.4297 44.8984 32.4297 42.6719 C 32.4297 42.1563 32.1719 41.8984 31.6797 41.8984 L 29.6875 41.8984 C 28.7500 41.8984 28.2812 41.4063 28.2812 40.8437 C 28.2812 40.2344 28.7500 39.7656 29.6875 39.7656 L 31.0000 39.7656 C 33.4141 39.7656 35.0078 38.1953 35.0078 36.1094 C 35.0078 35.1485 34.6094 34.7266 33.8125 34.7266 L 31.0937 34.7266 C 30.1562 34.7266 29.6875 34.2578 29.6875 33.6953 C 29.6875 33.0859 30.1562 32.5937 31.0937 32.5937 L 33.6015 32.5937 C 36.3203 32.5937 37.6094 31.0000 37.6094 28.9844 C 37.6094 28.0703 37.1875 27.6016 36.4141 27.6016 L 31.0937 27.6016 C 30.1562 27.6016 29.6875 27.1094 29.6875 26.5469 C 29.6875 25.9375 30.1562 25.4688 31.0937 25.4688 L 49.0938 25.4688 C 50.8280 25.4688 51.9531 24.3203 51.9531 22.8672 C 51.9531 21.2969 50.8280 20.1953 49.0938 20.1953 L 22.3750 20.1953 C 21.7656 20.1953 21.4375 19.8203 21.4375 19.4453 C 21.4375 19.0469 21.6953 18.7656 22.2812 18.4844 L 31.4219 14.4766 C 32.9922 13.7734 33.4609 12.3437 32.9687 11.1016 C 32.5000 9.9063 31.0703 9.1094 29.3594 9.7656 L 17.5000 14.2422 C 7.5859 17.9688 4.0469 23.6406 4.0469 31.1875 Z"></path></g></svg> </div> 
            

          <div class="alinear">
          <div class="mb-3">

          <label>Nombre y Apellido</label>
          <input class="form-control" type="text" name="user_name" />
          <label class="form-label" >Correo Electronico</label>
          <input class="form-control" type="email" name="user_email" />
          <label class="form-label" >Mensaje</label>
          <textarea class="form-control" name="message" />

          </div>
          <input class="stylebutton" type="submit" value="Enviar" />
          </div>
        </form>
      )}
    </div>
  );
};


  
//   return (
   
//   <form ref={form} onSubmit={sendEmail}>

//    <div class="titulo"> INGRESA TUS PEDIDOS AQUI !! </div>

//     <div class="alinear">
//     <div class="mb-3">

//     <label>Nombre y Apellido</label>
//     <input class="form-control" type="text" name="user_name" />
//     <label class="form-label" >Correo Electronico</label>
//     <input class="form-control" type="email" name="user_email" />
//     <label class="form-label" >Mensaje</label>
//     <textarea class="form-control" name="message" />
   
//     </div>
//     <input class="stylebutton" type="submit" value="Enviar" />
//     </div>
//     </form>
  
  
       
//       )

// }

export {Pedido}






