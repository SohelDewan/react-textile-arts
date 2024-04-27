import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Slider = () => {

  const text = (<div className=" text-5xl md:text-7xl font-bold text-[#E8DFCA] absolute top-[40%] left-[20%] pl-16">
      <h2 >Our Textile and Art</h2>       
        <h2>Your Fashions Require</h2>
  </div>) 

  return (
    <Swiper
    className="animate__animated animate__flash"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide  className="green-slide">
        <img
          src="https://i.ibb.co/x5MLRSm/embroidery.jpg"
          alt="home3"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />
        {text}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/JyrsPDk/Best-Needles.jpg"
          alt="home2"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />{text}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/28Lbn0j/The-Best-Quilting.jpg"
          alt="home3"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />{text}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/vs7D1bB/How-To-Crochet.jpg"
          alt="home4"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />{text}
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Slider;
