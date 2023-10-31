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
    <div>
      {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es verdadero
        <div className='mensaje'>Gracias por tu mensaje , pronto te estaremos respondiendo</div>
        
      ) : (
        <form ref={form} onSubmit={sendEmail}>
            <div class="titulo"> INGRESA TUS PEDIDOS AQUI !! </div>

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






