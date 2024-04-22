import React, { useState } from 'react';
import Button from './Button';

const ActiveButtons = ({ cardArray, buttonStates, handleClick }) => {
   

    return (
        <div className='active-buttons-wrapper'>
            {buttonStates.map((isActive, index) => (
                <Button
                    key={index}
                    index={index}
                    isActive={isActive}
                    handleClick={() => handleClick(index)}
                    cliche={cardArray[index]}
                />
            ))}
        </div>
    );
}

export default ActiveButtons;