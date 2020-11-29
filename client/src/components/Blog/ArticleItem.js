import React from 'react';
import { useHistory } from 'react-router-dom';

import { READ_MORE } from '../../constants/text';

import Button from '../Button';

import './ArticleItem.css';

const ArticleItem = ({
    imageSrc,
    title,
    description,
    id,
}) => {
    const history = useHistory();

    const redirectToPage = (e) => {
        e.preventDefault();
        history.push(`/page/${id}`);
    };
    return (
        <div className="article-item">
            <div className="article-item__image">
                    <img
                        className="tile-image"
                        src={imageSrc}
                        alt="Image of Tile + descrition"
                    />
            </div>
            <div className="article-item__description">
                <div className="article-item__description-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Button
                    text={READ_MORE}
                    className="article-item__read-more-button"
                    onClick={redirectToPage}
                />
            </div>
        </div>
    )
};

export default ArticleItem;