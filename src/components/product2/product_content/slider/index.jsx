import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper/modules";
import "./styles.css";
import "swiper/css";
// import "swiper/css/navigation";
import { useState } from "react";

const slides = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1081",
  "https://picsum.photos/1920/1082",
  "https://picsum.photos/1920/1083",
  "https://picsum.photos/1920/1084"
];

 function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="App">
      <section className="slider">
        <div className="slider__flex">
          <div className="slider__col">

            <div className="slider__thumbs">
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev"
                }}
                className="swiper-container1"
                breakpoints={{
                  0: {
                    direction: "horizontal"
                  },
                  768: {
                    direction: "vertical"
                  }
                }}
                modules={[Navigation, Thumbs]}
              >
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="slider__image">
                        <img src={slide} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

          </div>

          <div className="slider__images">
            <Swiper
              thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              mousewheel={true}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev"
              }}
              breakpoints={{
                0: {
                  direction: "horizontal"
                },
                768: {
                  direction: "horizontal"
                }
              }}
              className="swiper-container2"
              modules={[Navigation, Thumbs, Mousewheel]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider__image">
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProductSlider