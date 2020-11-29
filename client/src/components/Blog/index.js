import React from 'react';

import ArticleItem from './ArticleItem';

import { articles } from '../../constants/data';

import './Blog.css';  

const Blog = () => {
    return (
        <div className="articles-container">
            <div className="articles-container__list">
            {articles.map(article => (
                <ArticleItem
                key={article.articleId}
                id={article.articleId}
                imageSrc={`${process.env.PUBLIC_URL}${article.imageSrc}`}
                title={article.title}
                description={article.description}
                />
            ))}
            </div>
        </div>
    )
};

export default Blog;
