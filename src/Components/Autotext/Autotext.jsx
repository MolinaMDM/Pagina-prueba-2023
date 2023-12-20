import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [idx, setIdx] = useState(1);
  const [speed, setSpeed] = useState(70);
  const [text, setText] = useState('Nosotros somos un empresa de familia ubicada en la ciudad de Mendoza  que desde hace mas de 10 años se dedica a organizar y ambientar cumpleaños , eventos y demas de manera personalizada y trabajando con mucha dedicacion para el mejor servicio de los clientes . Te agradecemos el paso por esta pagina y te invitamos a sumarte a este mundo del "NUNCA JAMAS" ' 
  
  
  
  );

  const writeText = () => {
    const textEl = document.getElementById('text');
    textEl.innerText = text.slice(0, idx);
    setIdx((prevIdx) => (prevIdx % text.length) + 1);
  };

  const handleSpeedChange = (e) => {
    setSpeed(300 / e.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(writeText, speed);

    return () => clearInterval(intervalId);
  }, [idx, speed, text]);

  return (
    <div>
      <h1 id="text">Starting...</h1>
      
    </div>
  );
};

export { TypingEffect };
