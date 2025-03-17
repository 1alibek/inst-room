import React from "react";
import { cardData } from "../../utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import { Button } from "antd";

const SwiperComponent = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container2 !pt-12">
        {/* Header Section */}
        <div className="flex items-center justify-between py-4 pb-6">
            <p className="text-white font-medium text-[32px] max-[500px]:text-[20px]">Новинки </p>
            <Button className="!text-white !font-medium !border-none max-[500px]:!hidden !rounded-full !bg-[#EC8F32] !px-6 !h-[42px] ">
            Смотреть все
              </Button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={24} // Space between slides
          slidesPerView={5} // Default number of slides visible
          navigation={true} // Enable next/prev buttons
          modules={[Pagination, Navigation]} // Required modules
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 }, // 1 slide on very small screens
            500: { slidesPerView: 2, spaceBetween: 15 }, // 2 slides on small screens
            750: { slidesPerView: 3, spaceBetween: 20 }, // 3 slides on medium screens
            1000: { slidesPerView: 4, spaceBetween: 20 }, // 4 slides on larger screens
            1200: { slidesPerView: 5, spaceBetween: 24 }, // 5 slides on large screens
          }}
          className="mySwiper"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-400 mb-1">{card.metadata}</p>
                  <h3 className="text-lg font-medium mb-1 line-clamp-2">
                    {card.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;