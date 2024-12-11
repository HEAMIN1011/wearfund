// MainSlide.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './MainSlide.css'; // 새로운 CSS 파일을 import

import image1 from './image/image1.jpg'
import image2 from './image/image2.jpg'
import image3 from './image/image3.jpg'

const MainSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear"
    };

    return (
        <div className="slide-container">
            <Slider {...settings}>
                <div className="slide-item">
                    <img src={image1} alt="Slide Image 1" />
                    <div className="slide-text">
                        <div className="slide-textOne">ANEW GOLF</div>
                        <div className="slide-textTwo">편안함과 스타일을 한 번에!</div>
                        <div className="slide-textThree">당신의 스윙을 완성할 완벽한 골프웨어. 지금 펀딩에 동참하세요!</div>
                    </div>
                </div>
                <div className="slide-item">
                    <img src={image2} alt="Slide Image 2" />
                    <div className="slide-text">
                        <div className="slide-textOne">WINTER SEASON</div>
                        <div className="slide-textTwo">편안함과 스타일을 한 번에!</div>
                        <div className="slide-textThree">당신의 스윙을 완성할 완벽한 골프웨어. 지금 펀딩에 동참하세요!</div>
                    </div>
                </div>
                <div className="slide-item">
                    <img src={image3} alt="Slide Image 3" />
                    <div className="slide-text">
                        <div className="slide-textOne">SHESSMISS X LIST</div>
                        <div className="slide-textTwo">편안함과 스타일을 한 번에!</div>
                        <div className="slide-textThree">당신의 스윙을 완성할 완벽한 골프웨어. 지금 펀딩에 동참하세요!</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default MainSlide;