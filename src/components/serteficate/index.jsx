import React from 'react';
import img1 from "../../assets/img/Rectangle 30.png";
import img2 from "../../assets/img/Rectangle 31.png";
import img3 from "../../assets/img/Rectangle 32.png";
import img4 from "../../assets/img/Rectangle 51.png";

const Serteficate = () => {
  return (
    <div className="container2 mx-auto p-6">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2 max-[500px]:text-xl">
        Производимая продукция соответствует регламентам ГОСТ, ОСТ, ТУ и международным стандартам
      </h2>
      <p className="text-gray-600 mb-6">
        Вся металлопрокатная продукция проходит заводские испытания
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img
          src={img1}
          alt="Сертификат 1"
          className="w-full h-auto rounded-lg shadow"
        />
        <img
          src={img2}
          alt="Сертификат 2"
          className="w-full h-auto rounded-lg shadow"
        />
        <img
          src={img3}
          alt="Сертификат 3"
          className="w-full h-auto rounded-lg shadow"
        />
        <img
          src={img4}
          alt="Сертификат 4"
          className="w-full h-auto rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default Serteficate;
