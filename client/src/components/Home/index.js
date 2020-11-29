import React from 'react';
import { connect } from 'react-redux';


import {
    POPULAR_GOODS_LABEL,
 } from '../../constants/text';

import ProductTile from '../ProductTile';
import Slider from '../HomeSlider/Slider';

import './Home.css';

const getPopularProducts = (products) => {
    const popularProducts = products.filter(product => product.isPopular);
    return popularProducts.slice(0,4);
  }

const _Home = ({products}) => {
    return (
        <div className="home">
            <Slider />
            <div className="block-tiles">
                <h2 className="block-tiles__title">{POPULAR_GOODS_LABEL}</h2>
                <div className="block-tiles__row">
                {products.map(product => 
                    <ProductTile
                        isDomenstration={true}
                        key={product.productId}
                        imageSrc={`${process.env.PUBLIC_URL}${product.imageSrc}`}
                        title={product.title}
                        type={product.type}
                        id={product.productId}
                    />
                )}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    products: getPopularProducts(state.productsReducer.products),
})

export default connect(mapStateToProps)(_Home)
