import React from 'react';
import { articles } from '../../constants/data';

import './ArticlePage.css';  

const ArticlePage = (props) => {
    const {
        match: {
            params,
        }
    } = props;

    const article = articles.find(item => item.articleId === parseInt(params.id, 10));
    return (
        <div className="article-page__container">
            <h2>{article.title}</h2>
            <div className="article-page__image-container">
                <img
                    src={`${process.env.PUBLIC_URL}${article.imageSrc}`}
                    alt="Image of articlePage + descrition"
                />
            </div>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticlePage;
