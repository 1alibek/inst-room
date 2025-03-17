import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Button, Drawer } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Pagination import qildik
import "swiper/css";
import "swiper/css/pagination"; // Pagination uchun CSS qo'shildi

import bgImage from "../../assets/img/bg-image.png";
import bgImage2 from "../../assets/img/bg-image2.avif";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="relative w-full h-[650px] max-[500px]:h-[400px]">
      <Swiper
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }} // delay 3s qildim
        pagination={{ clickable: true }} // Pagination qo‘shildi
        modules={[Autoplay, Pagination]} // Pagination ulandi
        className="absolute top-0 left-0 w-full h-full"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center  "
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center "
            style={{ backgroundImage: `url(${bgImage2})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="header">
          <div className="container2 flex items-center justify-between">
            <img
              className="max-[500px]:w-[200px] max-[320px]:w-[150px]"
              src={logo}
              alt=""
            />
            <p className="text-white underline font-medium text-[16px] max-[900px]:hidden">
              Как купить
            </p>
            <p className="text-white underline font-medium text-[16px] max-[900px]:hidden">
              F.A.Q
            </p>
            <p className="text-white font-medium text-[16px] max-[900px]:hidden">
              Контакты
            </p>
            <div className="flex items-center gap-6">
              <BiSearch className="text-white text-2xl max-[320px]:text-xl" />
              <Button className="!text-white !font-medium !border-2 !border-white !rounded-full !bg-[transparent] !px-6 !h-[42px] max-[700px]:!hidden">
                Регистрация
              </Button>
              <Button className="!text-white !font-medium !border-none !rounded-full !bg-[#EC8F32] !px-6 !h-[42px] max-[700px]:!hidden">
                Войти
              </Button>
              <button onClick={showDrawer}>
                <MdMenu className="text-white text-2xl hidden max-[900px]:block max-[320px]:text-xl" />
              </button>
              <Drawer
                title="Menu"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
              >
                <p className="text-black font-medium text-[16px] text-center mt-3">
                  Как купить
                </p>
                <p className="text-black font-medium text-[16px] text-center mt-3">
                  F.A.Q
                </p>
                <p className="text-black font-medium text-[16px] text-center mt-3">
                  Контакты
                </p>
                <div className="flex flex-col mt-3 gap-3">
                  <Button className="!text-black !font-medium !border-2 !border-black !rounded-full !bg-[transparent] !px-6 !h-[42px] ">
                    Регистрация
                  </Button>
                  <Button className="!text-white !font-medium !border-none !rounded-full !bg-[#EC8F32] !px-6 !h-[42px] ">
                    Войти
                  </Button>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
        <div className="container2 flex flex-col justify-center h-[87%]">
          <div className="flex items-center justify-between">
            <p className="txt text-[62px] font-bold max-[1100px]:text-[50px] max-[900px]:text-[40px] max-[500px]:text-[30px]">
              Книги, которые <br /> вам хочется слушать
            </p>
            <Button className="!text-white !font-medium !border-none !rounded-full !bg-[#EC8F32] !text-[24px] !px-10 !h-[79px] max-[900px]:!text-[20px] max-[900px]:!h-[60px] max-[750px]:!hidden ">
              Выбрать книгу
            </Button>
          </div>
          <p className="text-[24px] text-white font-medium mt-2 max-[800px]:text-[20px] max-[500px]:text-[16px]">
            Лучшая подборка аудиокниг по психологиии <br className="max-[400px]:hidden" /> саморазвитию за все годы издательства...
          </p>
          <Button className="!text-white !font-medium !border-none !rounded-full !bg-[#EC8F32] !text-[20px] !px-6 !h-[50px] !mt-4 w-[fit-content]  max-[500px]:!text-[18px] max-[400px]:!text-[14px] max-[400px]:!h-[40px] !hidden max-[750px]:block">
              Выбрать книгу
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
