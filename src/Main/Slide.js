import React from "react";
import Media1 from "../Image/media1.svg";
import Media2 from "../Image/media2.svg";
import Media3 from "../Image/media3.svg";
import Media4 from "../Image/media4.svg";
import Media5 from "../Image/media5.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToScroll: 1,
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
    <div className="container-slider">
      <Slider className="slider" {...settings}>
        <div>
          <img src={Media1} alt="media1" />
        </div>
        <div>
          <img src={Media2} alt="media2" />
        </div>
        <div>
          <img src={Media3} alt="media3" />
        </div>
        <div>
          <img src={Media4} alt="media4" />
        </div>
        <div>
          <img src={Media5} alt="media5" />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
