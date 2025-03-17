import React from "react";

import img1 from "../../assets/img/png.png";
import img2 from "../../assets/img/png (1).png";
import img3 from "../../assets/img/png (2).png";
import img4 from "../../assets/img/png (3).png";
const Video = () => {
  return (
    <div className="bg-gray-900">
      <div className="container2 !py-12">
        <p className="font-medium text-white text-3xl max-[500px]:text-xl">Подборки</p>
        <div className="grid grid-cols-4 !mt-6 gap-4 max-[1100px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[550px]:grid-cols-1">
          <img className="mx-auto" src={img1} alt="" />
          <img className="mx-auto" src={img2} alt="" />
          <img className="mx-auto" src={img3} alt="" />
          <img className="mx-auto" src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Video;
