import React, { useState } from 'react';

const Resultado = () => {
    const [primerNumero, setPrimerNumero] = useState('');
    const [segundoNumero, setSegundoNumero] = useState('');
    const [resultados, setResultados] = useState(null);
    console.log(resultados)

    const manejarCambioPrimerNumero = (e) => {
        setPrimerNumero(e.target.value);
    };

    const manejarCambioSegundoNumero = (e) => {
        setSegundoNumero(e.target.value);
    };

    const manejarCalculo = () => {
        // Aquí cambiamos el tipo de dato porque lo que recibimos es un string y
        // necesitamos uno de tipo número para poder hacer los cálculos
        const cambioNumero1 = parseFloat(primerNumero);
        const cambioNumero2 = parseFloat(segundoNumero);

        if (!isNaN(cambioNumero1) && !isNaN(cambioNumero2)) {
            const suma = cambioNumero1 + cambioNumero2;
            const diferencia = cambioNumero1 - cambioNumero2;
            const producto = cambioNumero1 * cambioNumero2;
            const division = cambioNumero1 / cambioNumero2;

            setResultados({ suma, diferencia, producto, division });
        } else {
            setResultados(null);
        }
    };

    return (
        <div>
            <h2>Resultado</h2>
            <div>
                <label>Número 1:</label>
                <input type="text" value={primerNumero} onChange={manejarCambioPrimerNumero} />
            </div>
            <div>
                <label>Número 2:</label>
                <input type="text" value={segundoNumero} onChange={manejarCambioSegundoNumero} />
            </div>
            <button onClick={manejarCalculo}>Calcular</button>
            {/* Aqui le ponemos una condición para que muestre si se obtienen datos en los
            inputs y en caso contrario no se mostrará nada, es como un ternario pero
            simplificado */}
            {resultados && (
                <div className='m-4'>
                    <h3>Resultado:</h3>
                    <p>Suma: {resultados.suma}</p>
                    <p>Diferencia: {resultados.diferencia}</p>
                    <p>Producto: {resultados.producto}</p>
                    <p>División: {resultados.division}</p>
                </div>
            )}
        </div>
    );
};

export default Resultado;
