
import React from 'react'
import Images from "../components/Image";
import  { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar,  Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import "./Swiper.css";

SwiperCore.use([Autoplay]);

export default () => {
    
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar]}
    spaceBetween={35}
    slidesPerView={3}
    breakpoints={{
        0: {
          width: 0,
          slidesPerView: 1,
          alignContent: "center",
        },
        768: {
          width: 768,
          slidesPerView: 3,
          alignContent: "center",
        },
        1200: {
          width: 1200,
          slidesPerView: 4,
          alignContent: "center"
        },
      }}
    loop={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  > 
    <SwiperSlide>
        <Images
                src="AstraZeneca.png"
                className="featured-image"
                alt="AstraZeneca"
                style={{
                    width: "200px",
                    margin: "5px",
                    alignContent: "center"
                }}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Images
                src="CaffeNero.png"
                className="featured-image"
                alt="caffenero"
                style={{
                width: "200px",
                margin: "5px",
            }}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Images
                src="Lyxor.png"
                className="featured-image"
                alt="AstraZeneca"
                style={{
                width: "200px",
                margin: "5px",
            }}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Images
                src="EveryFriday.png"
                className="featured-image"
                alt="AstraZeneca"
                style={{
                width: "200px",
                margin: "5px",
            }}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Images
                src="Collider.png"
                className="featured-image"
                alt="AstraZeneca"
                style={{
                width: "200px",
                margin: "5px",
            }}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Images
                src="redgrain_logo_small.png"
                className="featured-image"
                alt="redgrain"
                style={{
                width: "200px",
                margin: "5px",
            }}
        />
        </SwiperSlide>
    </Swiper>
  );
};
