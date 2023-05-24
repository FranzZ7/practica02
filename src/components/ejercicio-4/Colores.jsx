import React, { useState } from 'react';

const Colores = () => {
    // Creamos las estados para poder manejar los cambios
    const [primerValor, setPrimerValor] = useState('');
    const [segundoValor, setSegundoValor] = useState('');
    const [tercerValor, setTercerValor] = useState('');
    const [colorFondo, setColorFondo] = useState('');

    //   Obtenemos los valores de los inputs para poder utilizarlos
    const handleRedChange = (event) => {
        setPrimerValor(event.target.value);
    };

    const handleGreenChange = (event) => {
        setSegundoValor(event.target.value);
    };

    const handleBlueChange = (event) => {
        setTercerValor(event.target.value);
    };

    const handleColorPick = () => {
        // Aqui obtenemos el valor del background que se pintara el contenedor en RGB
        const rgbColor = `rgb(${primerValor}, ${segundoValor}, ${tercerValor})`;
        setColorFondo(rgbColor);
    };

    return (
        // Le asigno el color que puse en los inputs a todo el contenedor para que se muestre
        // el color
        <div style={{ background: colorFondo }} className='m-4'>
            <h2>Cambio de Color</h2>
            <div>
                <label>Primer Valor:</label>
                <input type="text" value={primerValor} onChange={handleRedChange} />
            </div>
            <div>
                <label>Segundo Valor:</label>
                <input type="text" value={segundoValor} onChange={handleGreenChange} />
            </div>
            <div>
                <label>Tercer Valor:</label>
                <input type="text" value={tercerValor} onChange={handleBlueChange} />
            </div>
            <button onClick={handleColorPick}>Escoger Color</button>
        </div>
    );
};

export default Colores;
