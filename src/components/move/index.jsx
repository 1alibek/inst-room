import React from "react";

import img from "../../assets/img/Заголовок.png";
import img2 from "../../assets/img/Иконка 1.png";
import img3 from "../../assets/img/Иконка 2.png";

import icon1 from "../../assets/icons/move1.svg"
import icon2 from "../../assets/icons/move2.svg"

const Move = () => {
  return (
    <div className="container2">
      <img className="py-5" src={img} alt="" />

      <div className="flex justify-center gap-10 max-[1330px]:gap-5 max-[600px]:flex-col max-[600px]:items-center mt-4">
        <img className="max-[1250px]:hidden"  src={icon1} alt="" />
        <div className="flex flex-col items-start rounded-xl p-5 border-2 border-[#2f70d9] w-[280px] max-[300px]:w-[270px]">
            <img className=" mx-auto" src={img2} alt="" />
<p className="text-[#2f70d9] font-bold mx-auto py-2">Одноместный номер</p>

    <li>Душ</li>
    <li>Кровать</li>
    <li>Телевизор</li>
    <li>Wi-Fi</li>
    <li>Что то еще</li>
    <li>Что то еще</li>
    <p className="text-[#2f70d9] font-bold mx-auto pt-2">Стоимость</p>
    <p className="text-[#d95845] font-bold text-[25px] mx-auto">1000₽ / <span className="font-medium text-[20px]">сутки</span></p>
        </div>
        <div className="flex flex-col items-start rounded-xl p-5 border-2 border-[#2f70d9] w-[280px] max-[300px]:w-[270px]">
            <img className=" mx-auto" src={img3} alt="" />
<p className="text-[#2f70d9] font-bold mx-auto py-2">Двухместный номер</p>

    <li>Душ</li>
    <li>Кровать</li>
    <li>Телевизор</li>
    <li>Wi-Fi</li>
    <li>Что то еще</li>
    <li>Что то еще</li>
    <p className="text-[#2f70d9] font-bold mx-auto pt-2">Стоимость</p>
    <p className="text-[#d95845] font-bold text-[25px] mx-auto">1000₽ / <span className="font-medium text-[20px]">сутки</span></p>
        </div>
        <img className="max-[1250px]:hidden"  src={icon2} alt="" />
      </div>
    </div>
  );
};

export default Move;
