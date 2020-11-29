import React from 'react';
import Button from '../Button';
import InputCounter from '../InputCounter/InputCounter';

import {
    REMOVE_FROM_BASKET,
 } from '../../constants/text';


const BasketItem = ({product, removeFromBasket, changeQuantity}) => {
    const { title, imageSrc, price, productId, quantityInBasket } = product;

    const removeItem = () => {
        removeFromBasket(productId);
    };

    const changeAmount = (amount) => {
        changeQuantity(productId, amount);
    };

    return (
        <div className='basket-item'>
            <div className='basket-item__preview'>
                <img
                        src={`${process.env.PUBLIC_URL}${imageSrc}`}
                        alt="Image of DetailPage + descrition"
                />
                <span>{title}</span>
            </div>
            <div className='basket-item__managed-part'>
                <div className='basket-item__price'>
                    <span>{price}</span>
                    <InputCounter
                        onInputChange={changeAmount}
                        quantityInBasket={quantityInBasket}
                        className='basket-item__input-counter'
                    />
                    <span>{quantityInBasket * price}</span>
                </div>
                <Button
                        text={REMOVE_FROM_BASKET}
                        className="basket-item__remove-button"
                        onClick={removeItem}
                />
            </div>
        </div>
    )
};

export default BasketItem;

