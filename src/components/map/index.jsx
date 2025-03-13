import React from "react";

import img from "../../assets/img/Карта.png";
import logo from "../../assets/img/Заголовок.png";

import icon1 from "../../assets/icons/kantakt1.svg";
import icon2 from "../../assets/icons/kantakt2.svg";

const Map = () => {
  return (
    <div className="container2 py-8">
      <div
        className=" w-full h-[500px] bg-cover bg-center rounded-3xl relative max-[500px]:h-[300px]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col gap-2 bg-white rounded-xl p-5 w-[fit-content] absolute top-1/6 left-1/20 max-[500px]:hidden">
          <img  className="w-[fit-content]" src={logo} alt="" />
          <p className="font-bold text-[#686868] text-18px pt-3">Адрес:</p>
          <p className="text-[#686868] text-[16px] pb-3">
            Кайдаловская ул., 37, Чита
          </p>
          <p className="text-[30px]">+7 (3022) 217856</p>
          <p className="text-[30px]">+79294830255</p>
          <div className="flex items-center gap-4">
            <img className="w-[fit-content]" src={icon1} alt="" />
            <img className="w-[fit-content]" src={icon2} alt="" />
          </div>
        </div>
      </div>
      <div className=" flex-col gap-2 bg-white rounded-xl p-5 hidden shadow-2xl w-[fit-content] mx-auto mt-5 max-[500px]:flex">
          <img  className="w-[fit-content]" src={logo} alt="" />
          <p className="font-bold text-[#686868] text-18px pt-3">Адрес:</p>
          <p className="text-[#686868] text-[16px] pb-3">
            Кайдаловская ул., 37, Чита
          </p>
          <p className="text-[30px]  max-[320px]:text-[24px]">+7 (3022) 217856</p>
          <p className="text-[30px]  max-[320px]:text-[24px]">+79294830255</p>
          <div className="flex items-center gap-4">
            <img className="w-[fit-content]" src={icon1} alt="" />
            <img className="w-[fit-content]" src={icon2} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Map;
