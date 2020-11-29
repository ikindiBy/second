import React, { useState } from 'react';
import SliderItem from './SliderItem';

import './Slider.css';

import { slides } from '../../constants/data';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const slidesAmount = slides.length;
    

    const plusSlide = () => {
        if (currentSlide === slidesAmount - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const minusSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slidesAmount - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    return (
        <div className="slider">
        {slides.map((slide, index) => (
            <SliderItem
                key={slide.slideId}
                sliderId={index}
                shownSliderId={currentSlide}
                imgPath={slide.imageSlideSrc}
                articleId={slide.articleId}
            />
        ))}
        <a className="prev" onClick={minusSlide}>&#10094;</a>
        <a className="next" onClick={plusSlide}>&#10095;</a>

        {/* <div className="slider-dots">
            <span className="slider-dots_item" onclick="currentSlide(1)"></span> 
            <span className="slider-dots_item" onclick="currentSlide(2)"></span> 
            <span className="slider-dots_item" onclick="currentSlide(3)"></span> 
        </div> */}
    </div>)
};

export default Slider;