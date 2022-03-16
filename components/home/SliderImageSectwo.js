import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class SliderImageSectwo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      speed: 2500,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <Slider {...settings}>
                
                     <img className="p-2 h-auto md:max-w-[450px] w-full rounded-t-full" src="/img/image_50.png" />
               
                 
                     <img className="p-2 h-auto md:max-w-[450px] w-full rounded-t-full" src="/img/image_50.png" />
                
               
        </Slider>
      </React.Fragment>
    );
  }
}