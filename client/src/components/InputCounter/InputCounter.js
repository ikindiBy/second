import React from 'react';
import Button from '../Button';

import './InputCounter.css';

const MIN_COUNT = 1;
const MAX_COUNT = 999;

const InputCounter = ({ onInputChange, quantityInBasket, className }) => {

    const decreaseAmount = () => {
            onInputChange(quantityInBasket - 1);
    };
    const increaseAmount = () => {
        onInputChange(quantityInBasket + 1);
    };

    const handleAmountChange = (e) => {
        const amountNumber = parseInt(e.target.value, 10);
        if (e.target.value === '') {
            onInputChange(MIN_COUNT);
        } else if (amountNumber <= MAX_COUNT && amountNumber >= MIN_COUNT) {
            onInputChange(amountNumber);
        }
    }

    return (
        <div className={`input-counter ${className}`}>
            <Button
                    text="-"
                    className={
                        `input-counter__button
                        ${quantityInBasket === MIN_COUNT && "input-counter__button--disabled"}`
                    }
                    onClick={decreaseAmount}
                    disabled={quantityInBasket === MIN_COUNT}
            />
            <input
                type="number"
                name="amount"
                value={quantityInBasket}
                onChange={handleAmountChange}
            />
            <Button
                    text="+"
                    className={
                        `input-counter__button
                        ${quantityInBasket === MAX_COUNT && "input-counter__button--disabled"}`
                    }
                    onClick={increaseAmount}
                    disabled={quantityInBasket === MAX_COUNT}
            />
        </div>
    )
};

export default InputCounter;

