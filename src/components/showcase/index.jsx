import React from "react";
import { Button } from "antd";

import showcase from "../../assets/img/showcase.png";
import logo from "../../assets/icons/logo.svg";

const Showcase = () => {
  return (
    <div className="container2 grid grid-cols-[1fr_1.5fr] gap-5 items-center max-[900px]:grid-cols-1">
      <div>
        <img className="w-full max-[900px]:w-[60%] max-[600px]:w-[80%]" src={logo} alt="" />
        <p className="text-[16px] text-[#686868] py-3 max-[500px]:text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
    <Button className="!bg-[#d95845] !text-white !font-medium !border-none !text-[22px] !px-8 !py-6 max-[500px]:!text-[18px]">
        Забронировать
        </Button>
      </div>
      <div >
        <img className="w-full" src={showcase} alt="" />
      </div>
    </div>
  );
};

export default Showcase;
