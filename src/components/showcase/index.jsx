import React from "react";
import { Button } from "antd";

import showcaseImage from "../../assets/img/showcase.png";

const Showcase = () => {
  return (
    <div className=" border-b-2 border-gray-400">
 
    <div className="flex container2 max-[900px]:flex-col-reverse items-center justify-between max-[900px]:justify-center">
      {/* Text Section */}
      <div className="max-w-lg text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 max-[1100px]:text-2xl max-[900px]:text-xl max-[900px]:text-center max-[500px]:text-sm">
        Металлопрокат в наличии в Новосибирске от производителя с доставкой до вас за 1-2 дня 
по цене ниже рыночной

        </h1>
      
        <p className="text-md text-gray-500 mb-6 max-[900px]:text-center">
        Склады и филиалы производства в 26 <br className="max-[500px]:hidden"/> крупных городах по всей территории РФ
        </p>
        <Button className="!bg-[#2d72cd] !text-white !h-[69px] !rounded-md !font-medium !text-[18px] max-[900px]:!text-[14px] max-[900px]:!w-full max-[500px]:!text-[10px] max-[500px]:!h-[40px]">
          Получить прайс
           с персональными ценами
        </Button>
      </div>
      
      {/* Image Section */}
      <div >
        <img src={showcaseImage} alt="Металлопрокат" className="w-full h-auto" />
      </div>
    </div>
         
    </div>
  );
};

export default Showcase;