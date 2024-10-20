import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
    >
      {/* <SwiperSlide>
        {" "}
        <img
          className="rounded-xl"
          src="https://i.ibb.co/rbh0hKJ/Home-01-1.png"
          alt=""
        />
      </SwiperSlide> */}
      <SwiperSlide>
        {" "}
        <img
          className="rounded-xl w-10/12"
          src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Home-1-Banner.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          className="rounded-xl w-10/12"
          src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/10/Home-1-Banner-3.png"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <img
          className="rounded-xl w-10/12"
          src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Home-3-Slider-1-Tshirt.gif"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
