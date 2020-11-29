import React from 'react';
import ShortDescriptionPlate from './ShortDescriptionPlate';
import './Slider.css';

import { articles } from '../../constants/data';

const SliderItem = ({sliderId, shownSliderId, imgPath, altText, articleId}) => {
    const article = articles.find(item => item.articleId === articleId); 
    return (
        <div className={`item ${sliderId === shownSliderId ? 'item--shown' : 'item--hiden' }`}>
            <img 
                src={`${process.env.PUBLIC_URL}${imgPath}`}
                alt={altText}
            />
            <ShortDescriptionPlate 
                title={article.title}
                description={article.description}
                articleId={articleId}
            />
        </div>
    )
};

export default SliderItem;
