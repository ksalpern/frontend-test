import React from "react";
import Slider from "react-slick";
import './Slider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../assets/slider1.png'
import slide2 from '../../../assets/slider2.png'
import slide3 from '../../../assets/slider3.png'
import slide4 from '../../../assets/slider4.png'
import slide5 from '../../../assets/slider5.png'

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

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-chevron-right'></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-chevron-left'></i>
            </button>
        </div>
    )
}

export default function SimpleSlider() {
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
    };
    return (
        <Slider {...settings}>
            {dataForSlider.map((item, i) => (
                <div key={i}>
                    <h5>{item.header}</h5>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </Slider>
    );
}