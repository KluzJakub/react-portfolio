import React, { useState } from 'react';

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div classname="carousel">
            <button onclick="{prevSlide}">Předchozí</button>
            <transitiongroup classname="carousel-slide">
                <csstransition key="{index}" timeout="{500}" classnames="slide">
                    <img src={images[index]} alt={`Slide ${index + 1}   `} />
                </csstransition>
            </transitiongroup>
            <button onclick="{nextSlide}">Další</button>
        </div>
    );
}





function App() {
    return (
        <div>
            <carousel>
            </carousel></div>
    );
}

export default Carousel;
