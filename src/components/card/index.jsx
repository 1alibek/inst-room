import React from "react";

import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
const Card = () => {
  return (
    <div className="container2">
      <div className="flex items-center gap-5 max-[1200px]:flex-col">
        <div>
          <p className="text-[22px] max-[500px]:text-[16px]">
            Отказались от не разумной логистики <br />
            <span className="font-bold">
              Покупайте металлопрокат в вашем городе
            </span>
          </p>
          <br />
          <p>
            Раньше мы закупали сырье у различных поставщиков, везли его к себе
            на базу в Магнитогорске, производили продукцию и после этого
            отправляли своим клиентам по РФ. Сейчас у нас есть договоренности с
            нашими партнерами во всех региональных центрах и производство на
            аутсорсинге. Мы так же самостоятельно закупаем металл и производим
            металлопрокат на производствах наших партнеров
          </p>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="flex items-center gap-5 max-[1200px]:flex-col-reverse">
        <img src={img2} alt="" />
        <div>
          <p className="text-[22px] max-[500px]:text-[16px]">
            Вы не переплачиваете <br />
            <span className="font-bold">Покупайте у производителя</span>
          </p>
          <br />
          <p>
            Мы точно так же закупаем сырье, например у поставщика в Липецке и
            там же заказываем в производство металлопрокат. За счет больших
            объемов продаж, мы получаем хорошую скидку и экномим на логистике.
            Так мы делаем в 26 крупных городах РФ
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 max-[1200px]:flex-col">
        <div>
          <p className="text-[22px] max-[500px]:text-[16px]">
          Покупайте качественный металлопрокат <br />
            <span className="font-bold">
                   
У нас строгие нормы контроля
и требования к производству
            </span>
          </p>

          <br />
          <p>
          Наше собственное производство находится в Магнитогорске.
Мы изготавливаем продукцию строго по ГОСТ и ТЗ.
Дорожим нашей деловой репутацией и требуем качества
от наших партнеров.
          </p>
        </div>
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default Card;
