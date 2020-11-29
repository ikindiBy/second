import React from 'react';
import { Link } from "react-router-dom";

import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    PRICE_LABEL,
    PRICE_CURRENCY,
    TYPE_LABEL,
 } from '../../constants/text';

import Button from '../Button';

import './ProductTile.css';

const ProductTile = ({
    isDomenstration=true,
    imageSrc,
    title,
    description,
    price,
    type,
    id,
    inBasket,
    onAddToBAsketClick,
    onRemoveFromBasketClick,
}) => {
    const changeBasketState = () => {
        inBasket ? onRemoveFromBasketClick(id) : onAddToBAsketClick(id);
    };
// TODO: make appropriate conditions
    return (
        <div className={`product-tile
            ${isDomenstration && "product-tile--demo"}`
        }>
            <Link to={`/product/${id}`}>
                <div className="product-tile__image">
                        <img className="tile-image"
                        src={imageSrc}
                        alt="Image of Tile + descrition"/>
                    
                </div>
            </Link>
            <div className="product-tile__description-wrapper">
                <div className="product-tile__description">
                    <Link to={`/product/${id}`} className="product-tile__title">
                        <h4>{title}</h4>
                    </Link>
                    {description && <p>{description}</p>}
                    {!isDomenstration && <span>{PRICE_LABEL}: {`${price} ${PRICE_CURRENCY}`}</span>}
                    {type ? <span>{TYPE_LABEL}: {type}</span> : null}
                </div>
                <div className="product-tile__control">
                    {!isDomenstration && <Button
                            text={!inBasket ? ADD_TO_BASKET : REMOVE_FROM_BASKET}
                            className={`product-tile__button ${inBasket ? "product-tile__button--added" : ""}`}
                            onClick={changeBasketState}
                    />}
                </div>
            </div>
        </div>
    )
};

export default ProductTile;