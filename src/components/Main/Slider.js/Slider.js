import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../assets/slider1.png'
import slide2 from '../../../assets/slider2.png'
import slide3 from '../../../assets/slider3.png'
import slide4 from '../../../assets/slider4.png'
import slide5 from '../../../assets/slider5.png'
import bg from '../../../assets/bg.svg'
import './Slider.scss'

const dataForSlider = [
    {
        header: 'Save watter',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: slide1
    },
    {
        header: 'Plant trees',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
        ,
        img: slide2
    },
    {
        header: 'Save energy',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
        ,
        img: slide3
    },
    {
        header: 'Plant trees',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
        ,
        img: slide5
    },
    {
        header: 'Avoid plastic',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
        ,
        img: slide4
    },
    {
        header: 'Choose organic',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'

        ,
        img: slide5
    },
    {
        header: 'Save energy',
        descr: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
        ,
        img: slide3
    }
]

//arrows
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next' />
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev' />
        </div>
    )
}
// arrows

export default function SimpleSlider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);

    const totalSlides = dataForSlider.length;

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 5,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: () =>
            setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                {dataForSlider.map((item, i) => (
                    <div className="slider__items" key={i}>
                        <div className="slide__text">
                            <h5>{item.header}</h5>
                            <p>{item.descr}</p>
                        </div>
                        <img className="image" src={item.img} alt="" />
                        <img className="bg" src={bg} alt="" />

                    </div>
                ))}

            </Slider>

            <div className="pages">
                <span className="currentSlide">
                    {slideIndex + 1} {' '}
                </span>
                <span className="totalSlides">
                    / {totalSlides}
                </span>
            </div>
        </div>
    );
}