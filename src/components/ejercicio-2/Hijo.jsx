import React from 'react';

const Hijo = ({ numeros, numerosImpares }) => {
  const numerosFiltrados = numerosImpares ? numeros.filter((number) => number % 2 !== 0) : numeros;

  return (
    <div>
      <h3>Componente Hijo</h3>
      <ul className='list-group d-flex align-items-center'>
        {numerosFiltrados.map((number) => (
          <li className='list-group-item m-3 p-3 border border-primary rounded' key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hijo;
