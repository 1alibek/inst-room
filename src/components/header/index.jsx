import React, { useState } from "react";
import { Button, Drawer } from "antd";

import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";
import menuExit from "../../assets/icons/menu-exit.svg";

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
    <div className="container2 flex items-center justify-between py-2">
      <img className="max-[400px]:w-[108px]" src={logo} alt="" />
      <div className="flex items-center  gap-5">
        <div className="flex items-center  gap-5 max-[950px]:hidden">
          <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
            Главная
          </p>
          <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
            О гостинице
          </p>
          <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
            Преимущества
          </p>
          <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
            Номера
          </p>
          <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
            Отзывы
          </p>
        </div>
        <Button className="!text-[#2f70d9] !border-2 !border-[#2f70d9] !font-medium hover:!bg-[#2f70d9] hover:!text-white max-[400px]:!hidden">
          Обратный звонок
        </Button>
        <button onClick={showDrawer} className="hidden max-[950px]:block">
          <img src={menu} alt="" />
        </button>
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <div className="flex items-start  gap-2 flex-col">
            <div className="flex items-center justify-between w-full">
              <img src={logo} alt="" />
              <button onClick={showDrawer2}>
                <img src={menuExit} alt="" />
              </button>
            </div>
            <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
              Главная
            </p>
            <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
              О гостинице
            </p>
            <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
              Преимущества
            </p>
            <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
              Номера
            </p>
            <p className="text-[18px] text-[#686868] py-5 hover:text-[#2f70d9] hover:underline hover:underline-offset-4 hover:decoration-wavy hover:font-medium">
              Отзывы
            </p>
            <Button className="!text-[#2f70d9] !border-2 !border-[#2f70d9] !font-medium hover:!bg-[#2f70d9] hover:!text-white">
              Обратный звонок
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
