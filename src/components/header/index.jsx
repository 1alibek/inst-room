import React, { useState } from "react";
import { Button, Drawer } from "antd";

import logo from "../../assets/img/logo.png";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawer2 = () => {
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="border-b-2 border-gray-400">
      <div className="container2 flex items-center justify-between py-2">
        <div className="flex gap-3">
          <img className="max-[500px]:w-[130px]" src={logo} alt="" />
          <p className="max-[500px]:hidden">
            Производство и продажа <br />
            металлопроката
          </p>
        </div>
        <Button className="!bg-[#2d72cd] !text-white !rounded-none !h-[48px] ml-40 max-[1100px]:ml-20 max-[1000px]:ml-0 max-[900px]:!hidden">
          У вас уже есть поставщик?
        </Button>
        <p className="font-semibold text-[22px] leading-none max-[900px]:hidden">
          +7 (495) 444-44-44 <br />{" "}
          <span className="text-[16px] text-[#5284f7] font-normal">
            Заказать обратный звонок
          </span>
        </p>
        <Drawer
          title="Menu"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <div  className="flex flex-col gap-3">
            <p className="text-center">
              Производство и продажа <br />
              металлопроката
            </p>

            <Button className="!bg-[#2d72cd] !text-white !h-[48px]">
              У вас уже есть поставщик?
            </Button>
            <p className="font-semibold text-[22px] leading-none text-center ">
              +7 (495) 444-44-44 <br />{" "}
              <span className="text-[16px] text-[#5284f7] font-normal">
                Заказать обратный звонок
              </span>
            </p>
          </div>
        </Drawer>

        <button onClick={showDrawer} className="hidden max-[900px]:block">
          <BiMenu className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
