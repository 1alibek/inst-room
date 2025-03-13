import React from "react";
import { Button } from "antd";

import logo2 from "../../assets/img/Заголовок.png";

import logo from "../../assets/icons/footer-logo.svg";
import icon from "../../assets/icons/ftr.svg";
import icon1 from "../../assets/icons/kantakt1.svg";
import icon2 from "../../assets/icons/kantakt2.svg";

const Footer = () => {
  return (
    <div className="bg-[#282828]">
      <div className="container2 grid grid-cols-5 items-start max-[1080px]:grid-cols-4 gap-4 max-[950px]:grid-cols-3 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1">
        <img className="mx-auto" src={logo} alt="" />
        <div className="flex flex-col gap-2 mx-auto max-[950px]:hidden">
          <p className="text-[#2f70d9] font-medium pb-3">Навигация</p>
          <p className="text-white">Главная</p>
          <p className="text-white">О гостинице</p>
          <p className="text-white">Преимущества</p>
          <p className="text-white">Номера</p>
          <p className="text-white">Отзывы</p>
        </div>
        <div className="flex flex-col gap-2 mx-auto">
          <p className="text-[#2f70d9] font-medium pb-3 max-[500px]:text-center">Быстрая связь</p>
          <Button className="!bg-[#d95845] !text-white !font-medium !border-none !text-[22px]  w-[210px] !h-[40px] max-[500px]:!text-[18px]">
            Забронировать
          </Button>
          <Button className="!text-[#2f70d9] !border-2 !bg-[transparent] !border-[#2f70d9] !font-medium  w-[210px] !h-[40px]  hover:!bg-[#2f70d9] hover:!text-white">
            Обратный звонок
          </Button>
        </div>
        <img className="m-auto max-[1080px]:hidden" src={icon} alt="" />
        <div className=" flex-col gap-2 mx-auto">
          <p className="text-[#2f70d9] font-bold text-[20px] max-[500px]:text-center">Контакты</p>
          <p className="font-bold text-white text-18px pt-3 max-[500px]:text-center">Адрес:</p>
          <p className="text-white text-[16px] pb-3 max-[500px]:text-center">
            Кайдаловская ул., 37, Чита
          </p>
          <p className="text-[20px]  max-[320px]:text-[18px] text-white max-[500px]:text-center">
            +79294830255
          </p>
          <p className="text-[20px]  max-[320px]:text-[18px] text-white max-[500px]:text-center">
            +7 (3022) 217856
          </p>
          <div className="flex items-center gap-4 mt-3 max-[500px]:justify-center">
            <img className="w-[30px] h-[30px]" src={icon2} alt="" />
            <img className="w-[30px] h-[30px]" src={icon1} alt="" />
          </div>
        </div>
      </div>
      <p className="text-white text-center">© Все права защищены.</p>
    </div>
  );
};

export default Footer;
