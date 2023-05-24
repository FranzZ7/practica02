import React, { useState, useEffect } from 'react';

const Alerts = () => {
  const [color, setColor] = useState('primary');

  useEffect(() => {
    const colors = ['primary', 'warning', 'danger', 'success', 'secondary'];
    let indexActual = 0;

    const intervalId = setInterval(() => {
      indexActual = (indexActual + 1) % colors.length;
      setColor(colors[indexActual]);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`alert alert-${color} m-5`} role="alert">
      Alerta de Bootstrap de color: {color}.
    </div>
  );
};

export default Alerts;
