import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    MAIN_PARAMETERS_LABEL,
    USING_LABEL,
    CARE_LABEL,
    INTERESTING_LABEL,
 } from '../../constants/text';

import InputCounter from '../InputCounter/InputCounter';


import {
    addToBasketAction,
    removeFromBasketAction,
    changeQuantityAction
} from '../../actions';

import Button from '../Button';
import Carousel from '../Carousel/Carousel';

import './DetailPage.css';  

const _DetailPage = (props) => {
    const {
        match: {
            params,
        },
        addToBasket,
        removeFromBasket,
        products,
        changeQuantity,
    } = props;

    const [amountOnDP, setAmountOnDP] = useState(1);

    const currentID = parseInt(params.id, 10);
    const product = products.find(product => product.productId === currentID);
    const { inBasket } = product;

    // const changeBasketState = () => {
    //     if (inBasket) {
    //         removeFromBasket(currentID);
    //         changeQuantity(currentID, 0);
    //     } else {
    //         changeQuantity(currentID, amountOnDP);
    //         addToBasket(currentID);
    //     }
    // };

    // const changeAmount = (amount) => {
    //     setAmountOnDP(amount);
    // };

    return (
        <div className="detail-page__container">
            <div className="detail-page__top-container">
                <Carousel product={product} />
                <div className="detail-page__main-description">

                        <h2>{product.title}</h2>
                        {/* <InputCounter onInputChange={changeAmount} quantityInBasket={amountOnDP}/>
                        <Button
                            text={!inBasket ? ADD_TO_BASKET : REMOVE_FROM_BASKET}
                            className={`detail-page__button ${inBasket ? "detail-page__button--added" : ""}`}
                            onClick={changeBasketState}
                        /> */}
                        <div className="detail-page__description-short">
                            <h3>{MAIN_PARAMETERS_LABEL}</h3>
                            <ul>
                                <li>Время цветения: {product.durationFlowering} </li>
                                <li>Высота растения: {product.hight}</li>
                                <li>Диаметр куста: {product.diametrBush} </li>
                                {/* <li>Размер соцветия: 3см </li> */}
                                {/* <li>Морозостойкость: слабая </li> */}
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="detail-page__description-block">
                <div className="detail-page__description-block-left">
                    <h3>{USING_LABEL}</h3>
                    <ul>
                        {/* <li>Время посадки: </li>
                        <li>Расстояние между растениями: </li> */}
                        <li>Освещенность: {product.bright} </li>
                        <li>Почва: {product.ground} </li>
                    </ul>
                    <h3>{INTERESTING_LABEL}</h3>
                </div>
                <div className="detail-page__description-block-right">
                    <h3>{CARE_LABEL}</h3>
                    <ul>
                        <li>Полив: умеренный</li>
                        {/* <li>Обрезка/прищипывание: 1 раз в 2 недели</li> */}
                        <li>Возможные вредители: {product.enimies}</li>
                        <li>Возможные болезни: {product.diseas} </li>
                    </ul>
                </div>
            </div>
            
            {/* <br/>
            <strong>
                Похожие: (ряд тайлов)
            </strong>
            <br/>
            <strong>
                Сним хорошо комбинировать: (ряд тайлов)
            </strong>
            <br/>
            <strong>
                Статьи на тему: (ряд превью тайлов)
            </strong>
            <br/>
            <strong>
                Примеры использования (фото):
            </strong> */}
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.productsReducer.products,
})

const mapDispatchToProps = dispatch => ({
    addToBasket: id => dispatch(addToBasketAction(id)),
    removeFromBasket: id => dispatch(removeFromBasketAction(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantityAction(id, quantity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(_DetailPage)
