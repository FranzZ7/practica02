import React, { useState } from 'react';
import Hijo from './Hijo';

const Padre = () => {
  const [numeros, setNumeros] = useState([...Array(100).keys()].map((i) => i + 1));
  const [numerosImpares, setNumerosImpares] = useState(true);

  const handleToggleRender = () => {
    setNumerosImpares(!numerosImpares);
  };

  return (
    <div>
      <h2>Componente Padre</h2>
      <button onClick={handleToggleRender}>
        Números renderizados: {numerosImpares ? 'Números Impares' : 'Todos los números'}
      </button>
      <Hijo numeros={numeros} numerosImpares={numerosImpares} />
    </div>
  );
};

export default Padre;
