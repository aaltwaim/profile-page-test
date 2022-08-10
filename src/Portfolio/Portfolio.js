import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Disney from "../images/Disney.jpeg";
import store from "../images/store.jpeg";
import saudi from "../images/saudi.jpeg";
import hype from "../images/hype.jpeg";
import my from "../images/my.jpeg";

import "./Portfolio.css";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="Portfolio" id="Portfolio">
      <div>
        <span>React Projects</span>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="Portfolio-slider"
      >
        <SwiperSlide>
          <img src={Disney} alt="right" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={saudi} alt="right" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={store} alt="right" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hype} alt="right" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={my} alt="right" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
