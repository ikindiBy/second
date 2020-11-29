import React, { useState } from 'react';

import Chevron, { ChevronDirection } from '../atoms/Chevron/Chevron';

import './Carousel.css';  

const AMOUNT_DESCTOP = 3;

const Carousel = ({ product }) => {

    const { imagesGallery } = product;

    const firstImage = imagesGallery && imagesGallery.length && imagesGallery[0];

    const [currentImage, setCurrentImage] = useState(firstImage);
    const [currentIndexes, setCurrentIndexes] = useState({first: 0, last: AMOUNT_DESCTOP - 1});
    
    if (!imagesGallery) {
        return null;
    }

    const onImageClick = (imgSrc) => {
        setCurrentImage(imgSrc);
    }

    const goTop = () => {
        setCurrentIndexes({
            first: currentIndexes.first - 1,
            last: currentIndexes.last - 1,
        })
    }

    const goBottom = () => {
        setCurrentIndexes({
            first: currentIndexes.first + 1,
            last: currentIndexes.last + 1,
        })
    }

    const withTopArrow = currentIndexes.first > 0;
    const withBottomArrow = imagesGallery && imagesGallery.length && imagesGallery.length > AMOUNT_DESCTOP && currentIndexes.last < imagesGallery.length - AMOUNT_DESCTOP;


    return (
    <div className="carousel-container">
          <div className={
                `carousel-container__preview-gallery
                ${withTopArrow && "carousel-container__preview-gallery--top-arrow"}
                ${withBottomArrow && "carousel-container__preview-gallery--bottom-arrow"}`
            }
          >
          {withTopArrow && <Chevron chevronDirection={ChevronDirection.TOP} onChevronClick={goTop} className="carousel-container__chevron"/>
          }
              {imagesGallery && imagesGallery.length && imagesGallery.map((imgGallerySrc, index) => (
                  <img
                      key={imgGallerySrc}
                      className={
                          `carousel-container__preview-gallery-item
                          ${(index >= currentIndexes.first && index <= currentIndexes.last) && "carousel-container__preview-gallery-item--shown"}
                          ${currentImage === imgGallerySrc && "carousel-container__preview-gallery-item--current"}`
                      }
                      src={`${process.env.PUBLIC_URL}${imgGallerySrc}`}
                      alt="Image of DetailPage + descrition"
                      onClick={() => onImageClick(imgGallerySrc)}
                  />   
              ))}
              {(imagesGallery.length > 2 && currentIndexes.last <= imagesGallery.length - 2 ) && 
                <Chevron chevronDirection={ChevronDirection.BOTTOM} onChevronClick={goBottom}/>
              }
          </div>
          <div className="carousel-container__main-showing">
            <img className="carousel-container__shown-img"
                src={`${process.env.PUBLIC_URL}${currentImage}`}
                alt="Image of DetailPage + descrition"
            />
          </div>
      </div>
      );
};

export default Carousel;
