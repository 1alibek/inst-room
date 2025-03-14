import React from 'react';
import icon1 from "../../assets/img/img.png";
import warehouseImage from "../../assets/img/img2.png";

const Ostatka = () => {
  return (
    <div className=" container2 ">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
        Поддерживаем остатки на наших складах
      </h1>
      <p className="text-gray-600 mb-6 text-center md:text-left">
        благодаря тщательно спланированному объему производства и сбыта
      </p>
      
      {/* Product List */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
        <div className='grid grid-cols-1 gap-4'>
          {[
            { name: "Штрипс, полоса", amount: "более 1 000 тонн" },
            { name: "Профиль", amount: "более 200 тонн" },
            { name: "Сетка", amount: "более 300 тонн" },
            { name: "Профлист", amount: "более 300 тонн" }
          ].map((item, index) => (
            <div key={index} className="flex items-center p-4 md:p-6 border rounded-lg">
              <img src={icon1} alt="icon" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
              <div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">{item.name}</p>
                <p className="text-gray-600 text-xs md:text-sm">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Warehouse Image Section */}
        <div className="mt-4 md:mt-0 relative w-full">
          <img src={warehouseImage} alt="Склад" className="w-full h-auto rounded-lg" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-3 md:p-4 w-full rounded-b-lg text-xs md:text-sm">
            Мы специально поддерживаем не снижаемые остатки, <br />
            чтобы производить отгрузку за 1-2 дня после оплаты
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ostatka;
