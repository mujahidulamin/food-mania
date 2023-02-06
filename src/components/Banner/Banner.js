import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <div className="hero-content">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=740&t=st=1675633544~exp=1675634144~hmac=36a799a75368c7f938309c1339faab6176553f28cf4c7c0da806298ec27fb971"
                className=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="hero-content">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=740&t=st=1675633235~exp=1675633835~hmac=aef83a23b9d0b83a763d50d3e243af5d400dcaad535f3124cdd4015c343818c0"
                className="width"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="hero-content">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=826&t=st=1675633612~exp=1675634212~hmac=49f737b66bb6d9b702fe57d3af7a85913b6b3a0955d93d3e1475a301540d8dde"
                className="width"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="hero-content">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.2.2082737940.1675632382&semt=sph"
                className="width"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
