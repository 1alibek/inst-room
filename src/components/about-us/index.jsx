import React from "react"

// img
import img from "../../assets/img/img/about.png"

const AboutUs = () => {
    return (
        <section className="py-[30px] bg-[#f2f5f7]">
            <div className="container2 grid grid-cols-2 gap-[20px] items-center ">
                <div className="flex justify-center items-center rounded-xl overflow-hidden h-[350px] ">
                    <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-[30px] justify-start items-start ">
                    <h1 className="font-medium text-[30px] leading-[107%] text-black">
                        О нас
                    </h1>

                    <p className="font-medium text-[16px] leading-[150%] text-black ">
                        Торговое или промышленное предприятие,
                        торгово-промышленное объединение предпринимателей, форма
                        организации предприятия, при которой
                        его правосубъектность отличается от правосубъектности
                        лиц, в нем участвующих.
                    </p>

                    <p className="font-medium text-[16px] leading-[150%] text-black">
                        Торговое или промышленное предприятие,
                        торгово-промышленное объединение предпринимателей, форма
                        организации предприятия
                    </p>

                    <button className="p-[8px_22px]  bg-[#212526] rounded-md text-white !transition-colors !duration-[.2s] ">
                        ПЕРЕЙТИ В КАТАЛОГ
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
