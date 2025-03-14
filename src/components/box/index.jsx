import React from 'react';
import boxImage from "../../assets/img/box.png";
import boxIcon from "../../assets/icons/box.svg";

const Box = () => {
  return (
    <div className="bg-white container2 mt-5">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Выгодные цены на <br />
         металлопрокат в Новосибирске
      </h1>
      <p className="text-gray-600 mb-6">
        Обратитесь к менеджеру и он отправит вам цены на нужные позиции
      </p>
      
      {/* Categories Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border-b pb-4">
        {['Штрипс, лента оцинкованная', 'Профиль оцинкованный', 'Профнастил', 'Чёрный металлопрокат', 'Изделия на заказ'].map((category, index) => (
          <div key={index} className="flex flex-col items-center p-2 border rounded-lg cursor-pointer hover:shadow-md">
            <img src={boxIcon} alt="icon" className="w-8 h-8 mb-2" />
            <span className="text-sm text-center text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center mt-6">
        <div className="border  rounded-lg">
          <img src={boxImage} alt="Штрипс, лента оцинкованная" className="w-full h-auto" />
        </div>
        <div className="ml-0 md:ml-6 mt-6 md:mt-0 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Штрипс, лента оцинкованная</h2>
          <ul className="text-gray-600 list-disc pl-5 mb-4">
            <li>Оцинкованный штрипс</li>
            <li>Оцинкованная стальная лента</li>
            <li>Оцинкованная полоса Г/К</li>
          </ul>
          <button className="bg-[#2d72cd] text-white px-6 py-2 rounded-md shadow-md">
            Узнать стоимость
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;