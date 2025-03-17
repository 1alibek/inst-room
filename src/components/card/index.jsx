import React from "react";
import { cardData } from "../../utils";
import { CiHeart } from "react-icons/ci";
import { Button } from "antd";

const Card = () => {
  return (
    <div className="bg-gray-900">

   
    <div className="container2 !py-8  text-white min-h-screen">
        <div className="flex items-center justify-between py-4 pb-6">
            <p className="text-white font-medium text-[32px] max-[500px]:text-[20px]">Популярное</p>
            <Button className="!text-white !font-medium !border-none max-[500px]:!hidden !rounded-full !bg-[#EC8F32] !px-6 !h-[42px] ">
            Смотреть все
              </Button>
        </div>
      <div className="grid grid-cols-5 max-[1200px]:!grid-cols-4 max-[1000px]:!grid-cols-3 max-[750px]:!grid-cols-2 max-[500px]:!grid-cols-1 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-1">{card.metadata}</p>
              <h3 className="text-lg font-medium mb-1">{card.title}</h3>
             
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Card;