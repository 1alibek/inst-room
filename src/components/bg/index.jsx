import React from 'react';

import bgImage from "../../assets/img/bg-img.png";

const Bg = () => {
  return (
    <div className='container2 rounded-xl '>
    <div 
      className="relative  flex items-center justify-center w-full py-8 md:py-12 bg-cover bg-center text-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div >
        <p className="text-lg md:text-2xl font-bold leading-snug max-[700px]:text-xl">
          Мы продумали всё, чтобы вы могли <br className="hidden md:block" />
          купить металлопрокат по выгодной цене <br />
          и с доставкой за 2-3 дня
        </p>
      </div>
    </div>
    </div>
  );
};

export default Bg;