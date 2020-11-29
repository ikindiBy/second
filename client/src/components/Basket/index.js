import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { removeFromBasketAction, changeQuantityAction } from '../../actions';
import {
    BASKET_EMPTY_LABEL,
    SUMM_LABEL,
 } from '../../constants/text';

import BasketItem from './BasketItem';

import './Basket.css';

const getProductsInBasket = products => products.filter(product => product.inBasket);

const _Basket = ({ productsInBasket, removeFromBasket, changeQuantity }) => {

    const [summ, setSumm] = useState(0);

    const getFullPrice = useCallback(() => {
        let summAllInBasket = productsInBasket.reduce((summ, item) => {
            return summ + item.price * item.quantityInBasket;
        }, 0);

        setSumm(summAllInBasket);
    }, [productsInBasket]);

    useEffect(() => {
        getFullPrice();
    }, [productsInBasket])

    return productsInBasket.length > 0
            ? <div className='basket'>
                {productsInBasket.map(product => 
                    <BasketItem
                        key={product.productId}
                        product={product}
                        removeFromBasket={removeFromBasket}
                        getFullPrice={getFullPrice}
                        changeQuantity={changeQuantity}
                    />
                )}
                <div className='basket__summ-line'>
                    <span>{SUMM_LABEL}</span>
                    <span>{summ}</span>
                </div>
            </div>
            : <div className='basket--empty'>
                    <p>{BASKET_EMPTY_LABEL}</p>
            </div>
};

const mapStateToProps = state => ({
    productsInBasket: getProductsInBasket(state.productsReducer.products),
})

const mapDispatchToProps = dispatch => ({
    removeFromBasket: id => dispatch(removeFromBasketAction(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantityAction(id, quantity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(_Basket);


