import React from "react";
import photo1 from "../Image/2 headphones.svg";
import photo4 from "../Image/Bitmap3.svg";
import Slider from "react-slick";

function Slide2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-slider2">
      <div className="Main-container-6">
        <h2 className="head2">Related producs</h2>
        <button className="btnShow">SHOW ALL</button>
      </div>
      <Slider className="slider2" {...settings}>
        <div className="pic1">
          <img src={photo1} />
          <h5>QuietComfort 35 wireless headphones II</h5>
          <h6>$449.99</h6>
        </div>
        <div className="pic1">
          <img src={photo1} />
          <h5>QuietComfort 35 wireless headphones II</h5>
          <h6>$449.99</h6>
        </div>
        <div className="pic1">
          <img src={photo1} />
          <h5>QuietComfort 35 wireless headphones II</h5>
          <h6>$449.99</h6>
        </div>
        <div className="pic1">
          <img src={photo1} />
          <h5>QuietComfort 35 wireless headphones II</h5>
          <h6>$449.99</h6>
        </div>
        <div className="pic1">
          <img src={photo1} />
          <h5>QuietComfort 35 wireless headphones II</h5>
          <h6>$449.99</h6>
        </div>
      </Slider>
    </div>
  );
}

export default Slide2;
