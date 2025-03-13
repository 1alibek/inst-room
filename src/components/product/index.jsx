import React from "react";

import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import img6 from "../../assets/img/6.png";
import img7 from "../../assets/img/7.png";
import img8 from "../../assets/img/8.png";
import img9 from "../../assets/img/9.png";
import product from "../../assets/img/product-logo.png";



const images = [
  { src: img1, title: "Бесплатный WI-FI" },
  { src: img2, title: "Круглосуточный доступ" },
  { src: img3, title: "Телевизор" },
  { src: img4, title: "Парковка" },
  { src: img5, title: "Влажная уборка" },
  { src: img6, title: "Банно-прачечный комплекс" },
  { src: img7, title: "Собственная кухня" },
  { src: img8, title: "Банкетный зал" },
  { src: img9, title: "Просторная столовая" },
];

const Product = () => {
  return (
    <div className="container2 text-center">
      <img className="py-5" src={product} alt="Product Logo" />
      <div className="grid grid-cols-3 gap-6 py-4 max-[855px]:grid-cols-2 ">
        {images.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img className="max-[600px]:w-[50px] max-[500px]:w-[36px]" src={item.src} alt={item.title} />
            <h3 className="text-[#2f70d9] font-bold mt-3 max-[500px]:text-[14px] max-[400px]:text-[12px]">{item.title}</h3>
            <p className="text-gray-600 max-[500px]:text-[12px] max-[400px]:text-[10px]">Lorem ipsum dolor sit amet, <br className="max-[500px]:hidden" /> consectetur adipiscing elit, sed do <br className="max-[500px]:hidden" /> eiusmod tempor.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
