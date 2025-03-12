import React from "react";
import { Badge } from "antd";

import logo from "../../assets/img/Лого.png";

import icon1 from "../../assets/icons/like.svg";
import icon2 from "../../assets/icons/profil.svg";
import icon3 from "../../assets/icons/statistic.svg";
import icon4 from "../../assets/icons/shop.svg";

import { RiMenu2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

import instagram from "../../assets/icons/icons/instagram.png"
import facebook from "../../assets/icons/icons/facebook.png"
import vk from "../../assets/icons/icons/vk.png"

const Header = () => {
  return (
    <div>

  
    <div className="bg-[#212526]">
      <div className="container2 flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <p className="text-white">Время работы: 10:00–20:00</p>
        </div>
        <div>
          <p className="text-white font-medium flex-col">
            +7 495 120-32-14 <br />
            <span className="text-[#F05A00]">Заказать звонок</span>
          </p>
        </div>
        <div className="flex items-center ">
          <div className="p-8 bg-[#3B3B3B]">
            <Badge count={1}>
              <img className="h-[30px]" src={icon1} alt="" />
            </Badge>
          </div>
          <div className="p-8 bg-[#3B3B3B]">
            <Badge count={1}>
              <img className="h-[30px]" src={icon2} alt="" />
            </Badge>
          </div>
          <div className="p-8 bg-[#f05a00]">
            <Badge count={1}>
              <img className="h-[30px]" src={icon3} alt="" />
            </Badge>
          </div>
          <div className="p-8 bg-[#3B3B3B]">
            <Badge count={1} >
              <img className="h-[30px]" src={icon4} alt="" />
            </Badge>
          </div>
          <p className="text-white pl-2"> 
            Товаров на сумму <br /> <span className="font-medium">2 000 ₽</span>
          </p>
        </div>
      </div>
      <nav className=" bg-[#000] py-[20px]">
                <nav className="container2 flex justify-between items-center gap-[20px]">
                    <button className="flex justify-center items-center gap-[4px] p-[8px_22px] border border-[#f05a00] rounded-md text-white">
                        <RiMenu2Line />
                        Каталог товаров
                    </button>
                 
                        <p className="text-white">О компании</p>
                        <p className="text-white">Акции</p>
                        <p className="text-white">Хиты сезона</p>
                        <p className="text-white">Новинки</p>
                   

                    <nav className="flex justify-center items-center gap-[15px] *:cursor-pointer *:active:scale-95">
                        <img src={instagram} alt="" />
                        <img src={vk} alt="" />
                        <img src={facebook} alt="" />
                    </nav>

                    <nav className="flex justify-between items-center gap-[10px] overflow-hidden rounded-md bg-white text-[#8a8a8a] h-[40px] px-[10px]">
                        <FiSearch className="cursor-pointer h-full" />
                        <input
                            type="search"
                            placeholder="Поиск по каталогу"
                            className="h-full"
                        />
                    </nav>
                </nav>
            </nav>
    </div>
    </div>
  );
};

export default Header;
