import React, { useState } from 'react';

const Listas = () => {
  // Creamos los estados para poder obtener los datos del input y poder renderizar la cantidad
  // que quiero mostrar
  const [numeroListas, setNumeroListas] = useState(0);
  const [listItems, setListItems] = useState([]);
// Manejamos los cambios que hay en el teclado del input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumeroListas(value);
  };

  const handleRenderList = () => {
    const items = [];
// con un for creamos las listas
    for (let i = 1; i <= numeroListas; i++) {
      items.push(<li key={i}>Linea {i}</li>);
    }

    setListItems(items);
  };

  return (
    <div className='m-5'>
      <h2>Listas</h2>
      <div>
        <label>Cantidad de items:</label>
        <input type="text" value={numeroListas} onChange={handleInputChange} />
      </div>
      <button onClick={handleRenderList}>Mostrar las listas</button>
      {/* Aqui le creamos una condición de que si tiene un valor mayor a 0 se muestren las
      listas ol que están en el input y en caso contrario no muestre nada */}
      {numeroListas > 0 && (
        <ol>
          {listItems.map((item) => item
          )}
        </ol>
      )}
    </div>
  );
};

export default Listas;


