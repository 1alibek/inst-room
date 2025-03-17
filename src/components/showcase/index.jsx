import React from "react";
import icon1 from "../../assets/icons/1.svg";
import icon2 from "../../assets/icons/2.svg";
import icon3 from "../../assets/icons/3.svg";
import icon4 from "../../assets/icons/4.svg";

const Showcase = () => {
  const cards = [
    {
      icon: icon1,
      title: "Все лучшие новинки нон фикшн книг и образовательные саммари всегда под рукой.",
    },
    {
      icon: icon2,
      title: "Аудиокнига по дороге на работу и обратно, подарит вам почти месяц чтения за год",
    },
    {
      icon: icon3,
      title: "Аудиокниги позволяют «читать» несколько часов в день без отрыва от текущих дел.",
    },
    {
      icon: icon4,
      title: "Лучшие книги и аудиоспектакли в живом исполнении",
    },
  ];

  return (
    <div className="bg-gray-900">
    <div className="container2 px-4 !py-12 ">
      <div className="grid grid-cols-2 gap-6 max-[750px]:grid-cols-1">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[transparent] border border-gray-400 bg-opacity-80 rounded-xl p-6 flex items-center space-x-4 shadow-lg max-[350px]:flex-col gap-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <img src={card.icon} alt={`${card.title} icon`} className="h-10 w-10 text-gray-400" />
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-base font-medium text-white mb-1">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
</div>
  );
};

export default Showcase;