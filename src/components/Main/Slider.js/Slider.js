import React, { useState } from "react";
import Slider from "react-slick";
import './Slider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../assets/slider1.png'
import slide2 from '../../../assets/slider2.png'
import slide3 from '../../../assets/slider3.png'
import slide4 from '../../../assets/slider4.png'
import slide5 from '../../../assets/slider5.png'
import bg from '../../../assets/bg.svg'

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
        centerPadding: "60px",
        slidesToShow: 3,
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
                    <div key={i}>
                        <h5>{item.header}</h5>
                        <img src={item.img} alt="" />
                        <img src={bg} alt="" />
                        <p>{item.descr}</p>
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