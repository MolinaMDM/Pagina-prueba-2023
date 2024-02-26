
// import imagen1 from '../Images/Comentario1.jpg';
// // import imagen2 from '../Images/Comentario2.jpg';
// import imagen3 from '../Images/Comentario3.jpg';
// import imagen4 from '../Images/Comentario4.jpg';
// import imagen5 from '../Images/Comentario5.jpg';
// import imagen6 from '../Images/Comentario6.jpg';


const testimonials = [
   
  {
      name: 'Flor Moretti',
      position: 'Comerciante',
      photo: "https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/273897008_10227101300300661_7722454292265863994_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeH5bCzBtG4SRx-0UJDvKQmVFWc2lwmSaBgVZzaXCZJoGEEk8gUuPh0XAKD0G-JBM1E&_nc_ohc=_XqJ1gusG9gAX_qTGDb&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDI6cuvjZZXhI540Jl2YNXJn16pQlPDjfrkfGZr2No6IQ&oe=65E1DF69",       
      text:
      "Los trabajos son de calidad y los chicos muy amables y atentos . Los tendre en cuenta para mis proximas fiesta . Lo Recomiendo !! Gracias . ",
    },
    
    {
      name: 'Luna y Matias',
      position: 'Clientes',
      photo:  "https://scontent.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/312349312_10229301392021738_7318649266023281131_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE6fQRlUgrMmy-NTC4HnafIRhBFQ2igrBlGEEVDaKCsGcNM6SaBLK6Xuokxr_Y4VQs&_nc_ohc=xpyhnhivwc8AX_Ne1uL&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfBw7vYB1sKugPIJHce3xAVSPeZNpQpqretguAepGsai5w&oe=65E26BA6",   
      text:
      "La buena onda de los chicos y la predisposicion a todo lo que les pedimos , nos dejo muy satisfechos . Sigan asi !! ",
    },
    {
      name: 'Cecilia Melmoco',
      position: 'Cliente',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/104954303_10222813515668725_1390088754728880342_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeF6V8OOBLqW1p-7KJjJvh2NCANE7tp5yfoIA0Tu2nnJ-mg1FFK4ov-mGSpxcWXHiBo&_nc_ohc=ueyfQtc-QLUAX_FP8x_&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDRslK6uoczs3zcOU55RAmqLhOINhOoSU4E0OjyvM-8Ug&oe=66048B2F", 
      text:
      "Estoy impresionado por el profesionalismo y la creatividad de estos jóvenes. Han demostrado un gran potencial y han superado nuestras expectativas. ¡Gracias por su trabajo sobresaliente!",
    },
    {
      name: 'Mauricio Salamanca',
      position: 'Contador',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/117444868_10223699193778665_2332084503832067133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHg9gL4_GLP7FJad0qApZeE6nUyJ8UHfxrqdTInxQd_GkFFvhNWMytfoesQQyMXhcI&_nc_ohc=o83cmt-df08AX82XgTV&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDRWy4Bm7tPHKKedWOvUuG4VgoLIzAd0nMsrLZgmDqj4w&oe=66046BDF", 
      text:
      "Felicito a estos jóvenes por su compromiso y esfuerzo en este proyecto. Han demostrado una madurez sorprendente y han entregado resultados de alta calidad. ¡Gracias por su dedicación!"
    },
    {
      name: 'Pablo Bezon',
      position: 'Diseñador',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.18169-9/14265009_10210369060285118_7238750239322315393_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeH043XaXQLkp1sdcqmqvaCnlmt4UlzzRx2Wa3hSXPNHHRxec0GsiZAmz7_ITByOiuU&_nc_ohc=fUU7bDiYFpMAX-OYHhj&_nc_oc=AQlBWNheNp5UWdF3C6rA0mDxG_EIybRcrqBaoFdRLaBJmdGMxCsO3YUSWT1ShbIbtT8&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfD3Fa3yPv-YIhFLvcwCjn-2yvuTOq13KcnfH_AoRg4jTw&oe=66047913", 
      text:
      "Gracias por todo !! el cumpleaños estubo excelente , los tendre en cuenta para mis proximos festejos .. Son unos Genios!!",
    },
    {
      name: 'Matias Messi',
      position: 'Comerciante',
      photo:  "https://scontent.fmdz5-1.fna.fbcdn.net/v/t31.18172-8/13391483_10209464556513089_2432601167733225122_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGNQwGe1zK4ZGi5ScknpX83WcygyqgutP5ZzKDKqC60_o7ATquz5n2ZYaJV6feuaGc&_nc_ohc=AXd7fmj-F5cAX-izmQ0&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfCpBN-lx9hZChQ1YkV9eE9nCQctHb5AB2uSWdXOMa1ylg&oe=66049081",     
      text:
      "Quiero expresar mi gratitud por su trabajo sobresaliente. La atención al detalle y la calidad de los productos es exepcional . Gracias",
    },
   
  ]


  export {testimonials} ; 