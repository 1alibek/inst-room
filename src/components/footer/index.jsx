import React from "react";

import logo from "../../assets/img/15.png";
import img from "../../assets/img/social.png";
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="container2 grid grid-cols-2 !py-12 max-[750px]:grid-cols-1 max-[750px]:!py-4">
        <img className="h-[fit-content] max-[750px]:mx-auto" src={logo} alt="" />
        <div className="flex items-start gap-4 justify-between max-[750px]:hidden">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-white">Жанры</p>
            <p className="underline font-light text-[#adadad] text-[12px] mt-2">Нонфикшн</p>
            <p className="underline font-light text-[#adadad] text-[12px]">Псиология</p>
            <p className="underline font-light text-[#adadad] text-[12px]">Бизнес</p>
            <p className="underline font-light text-[#adadad] text-[12px]">Финансы</p>
            <p className="underline font-light text-[#adadad] text-[12px]">Все жанры</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-white">Категории
            </p>
            <p className="underline font-light text-[#adadad] text-[12px] mt-2">  Популярное</p>
            <p className="underline font-light text-[#adadad] text-[12px]">Новинки</p>
            <p className="underline font-light text-[#adadad] text-[12px]">
            Выбор редакции</p>
           
          </div>
        


          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-white">Разделы
            </p>
            <p className="underline font-light text-[#adadad] text-[12px] mt-2">   Как купить</p>
            <p className="underline font-light text-[#adadad] text-[12px]">       
            Часто задаваемые вопросы</p>
            <p className="underline font-light text-[#adadad] text-[12px]">
            Сотрудничество</p>
            <p className="underline font-light text-[#adadad] text-[12px]">Контакты
            </p>
          </div>


        </div>
      </div>
      <div className="border-t-2 border-gray-400  max-[750px]:border-none">
        <div className="flex items-center justify-between container2 max-[750px]:flex-col gap-3">

<p className=" font-light text-[#adadad] text-[12px]">© 2022, «Аудитерия». Все права защищены.</p>
<p className="underline font-light text-[#adadad] text-[12px]">Политика конфиденциальности                       Лицензионное соглашение</p>
<img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
