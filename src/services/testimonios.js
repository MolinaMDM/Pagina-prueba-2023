
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
      photo: "https://scontent.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/391625689_10231332103628100_2544409268066041301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFYXjUe4GsosZnth2CnNaIlbkKmCQlrtkVuQqYJCWu2RUsxg4fWgjgdjLFM1GbsWAM&_nc_ohc=G5b2MzzwfbIAX9AEHXa&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfDijQziXyT9zuLjM2ss6h9GKowpiacZi7HkDsGpQbmKeA&oe=65D2D753",       
      text:
      "Los trabajos son de calidad y los chicos muy amables y atentos . Los tendre en cuenta para mis proximas fiesta . Lo Recomiendo !! Gracias . ",
    },
    
    {
      name: 'Luna y Matias',
      position: 'Clientes',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/201645582_4886280054731736_1230562519130677219_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFXDVCQK5IDBKMuYvFx9MKWaptANlKnoHFqm0A2UqegcbiAOQrmxGFRyAIAGrapsuo&_nc_ohc=qj9TkrOBtKMAX8PtZFV&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfB-g0GMDht1mOyMq6BpJclIrV8IK4BTOIvR6S85fUTDIg&oe=65F4D1E3",   
      text:
      "La buena onda de los chicos y la predisposicion a todo lo que les pedimos , nos dejo muy satisfechos . Sigan asi !! ",
    },
    {
      name: 'Cecilia Melmoco',
      position: 'Cliente',
      photo:  "https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.6435-9/36634377_10211961952149704_2179159499959435264_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeHk2LwN8Xft_mw6Gj0PhYzLNlJ8YU_bmks2UnxhT9uaS3dyBsDyU8193hQvBD876dM&_nc_ohc=uQdjX2uuPXsAX94XFl-&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfD9S0kkIt2l9YoG5roH1P_k0luMzs8nAuABgEGCgp37ug&oe=65F4AB5B", 
      text:
      "Estoy impresionado por el profesionalismo y la creatividad de estos jóvenes. Han demostrado un gran potencial y han superado nuestras expectativas. ¡Gracias por su trabajo sobresaliente!",
    },
    {
      name: 'Mauricio Salamanca',
      position: 'Contador',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/117444868_10223699193778665_2332084503832067133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHg9gL4_GLP7FJad0qApZeE6nUyJ8UHfxrqdTInxQd_GkFFvhNWMytfoesQQyMXhcI&_nc_ohc=qfriqLAK4foAX-iAVDD&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfBx6niScFBTkw-Kk3N9PKnWQcbB6JgvsGt2bZbZQCMEow&oe=65F499DF", 
      text:
      "Felicito a estos jóvenes por su compromiso y esfuerzo en este proyecto. Han demostrado una madurez sorprendente y han entregado resultados de alta calidad. ¡Gracias por su dedicación!"
    },
    {
      name: 'Pablo Bezon',
      position: 'Diseñador',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/57456958_10156370495913129_6979238434850209792_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=68be17&_nc_eui2=AeEdWicwo-gyNvjC7X5yClA6JBYrmrj6dBEkFiuauPp0EcQxKOMAmrA6GD5AvXBIG04&_nc_ohc=z9CuOBg9PHgAX_jlkjk&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfAb9hGzEe_2EN52gbibowP9g5vVTF9qIQqQtKBySzdXTQ&oe=65F4B318", 
      text:
      "Gracias por todo !! el cumpleaños estubo excelente , los tendre en cuenta para mis proximos festejos .. Son unos Genios!!",
    },
    {
      name: 'Matias Messi',
      position: 'Comerciante',
      photo:  "https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/293643785_10228025729570815_4957075714677853944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFG2SJNF5vuTKUkcLHhrsje5jY6IEC_FwLmNjogQL8XAhtZ3XhCUtBF1Zj6iLJQSmw&_nc_ohc=KGCdubkg2QYAX-Z53ne&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfAabMVEBK0zXnMbwBvhP3KkwyaXnCo5OK3T2f54ubXSLg&oe=65D207BD",     
      text:
      "Quiero expresar mi gratitud por su trabajo sobresaliente. La atención al detalle y la calidad de los productos es exepcional . Gracias",
    },
   
  ]


  export {testimonials} ; 