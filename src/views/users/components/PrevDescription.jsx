/* eslint-disable react/prop-types */
import React from 'react';

const PrevDescription = ({ descriptions = [] }) => {
    console.log(descriptions);

    // Asegurar que descriptions siempre sea tratado como un array
    if (!Array.isArray(descriptions)) {
        console.error('Se espera que Descriptions sea un array', descriptions);
        return null; // o podría devolver algún UI alternativo, como un mensaje de error
    }
    
    return (
        <div>
            {descriptions.map((des, idx) => (
                <p key={idx}>{des.description}</p>
            ))}
        </div>
    );
};

export default PrevDescription;