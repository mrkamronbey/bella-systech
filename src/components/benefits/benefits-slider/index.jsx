import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Img1 from "./../../../assets/slider-benefits/1.png"
import Img2 from "./../../../assets/slider-benefits/2.png"
import Img3 from "./../../../assets/slider-benefits/3.png"
import Img4 from "./../../../assets/slider-benefits/4.png"
import Img5 from "./../../../assets/slider-benefits/5.png"
import Img6 from "./../../../assets/slider-benefits/6.png"
import Img7 from "./../../../assets/slider-benefits/7.png"
import Img8 from "./../../../assets/slider-benefits/8.png"
import Img9 from "./../../../assets/slider-benefits/9.png"
import Img10 from "./../../../assets/slider-benefits/10.png"
import Img11 from "./../../../assets/slider-benefits/11.png"
import Img12 from "./../../../assets/slider-benefits/12.png"
import Img13 from "./../../../assets/slider-benefits/13.png"
import Img14 from "./../../../assets/slider-benefits/14.png"
import Img15 from "./../../../assets/slider-benefits/15.png"
import Img16 from "./../../../assets/slider-benefits/16.png"
import Img17 from "./../../../assets/slider-benefits/17.png"
import Img18 from "./../../../assets/slider-benefits/18.png"
import Img19 from "./../../../assets/slider-benefits/19.png"
import Img20 from "./../../../assets/slider-benefits/20.png"



import "./styles.css"
import { WrapperContainer } from '../../../style-app';
const BenefitsSlider = () => {
  return (
    <WrapperContainer>
            <div className="modal_slid_wrapp">
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img9} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img10} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img11} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img12} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img13} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img14} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img15} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img16} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img17} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img18} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img19} alt="" />
      </SwiperSlide>      
      <SwiperSlide>
        <img src={Img20} alt="" />
      </SwiperSlide>

    </Swiper>
  </div>
         </WrapperContainer>

  )
}

export default BenefitsSlider