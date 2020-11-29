import React from 'react';
import { connect } from 'react-redux';

import { addToBasketAction, removeFromBasketAction } from '../../actions';

import { SHOW_ALL } from '../../constants';
import ProductTile from '../ProductTile';
import Sidebar from './Sidebar';

import './Shop.css';

const getVisibleProducts = (products, filter) => {
    if (filter === SHOW_ALL) {
        return products;
    } else if (!!filter) {
        return products.filter(product => {
            if (product.groupId === filter.group) {
                if (!filter.subGroup || filter.subGroup && product.subGroupId === filter.subGroup) {
                    return true;
                }
            }
        })
    } else {
        throw new Error('Unknown filter: ' + filter);
    }
  }

const _Shop = ({products, addToBasket, removeFromBasket}) => {
    return (
        <div className="shop-container">
            <Sidebar />
            <div className='shop__list'>
                {products.map(product => 
                    <ProductTile
                        key={product.productId}
                        imageSrc={`${process.env.PUBLIC_URL}${product.imageSrc}`}
                        title={product.title}
                        price={product.price}
                        type={product.type}
                        id={product.productId}
                        inBasket={product.inBasket}
                        onAddToBAsketClick={addToBasket}
                        onRemoveFromBasketClick={removeFromBasket}
                    />
                )}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    products: getVisibleProducts(state.productsReducer.products, state.visibilityFilter),
})

const mapDispatchToProps = dispatch => ({
    addToBasket: id => dispatch(addToBasketAction(id)),
    removeFromBasket: id => dispatch(removeFromBasketAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(_Shop)
