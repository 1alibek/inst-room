import React from "react"

// icons
import {FaArrowRight} from "react-icons/fa6"

import img1 from "../../assets/img/img/showcase/1.png"
import img2 from "../../assets/img/img/showcase/2.png"
import img3 from "../../assets/img/img/showcase/3.png"
import img4 from "../../assets/img/img/showcase/4.png"

const Showcase = () => {
    return (
        <section className="py-[20px] bg-[#212526]">
            <div className="container2">
                <div className="grid grid-cols-2 gap-[20px] ">
                    <div className="relative flex flex-col gap-[30px] justify-start items-start p-[20px] overflow-hidden bg-[url(./assets/img/img/showcase/1.png)] bg-center bg-cover bg-no-repeat h-[450px]">
                        <h1 className="font-normal text-4xl leading-[1.2] text-white">
                            DeWALT - Инструмент с настоящим характером
                        </h1>

                        <button className="flex justify-center items-center gap-[4px] p-[8px_22px]  bg-[#f05a00] rounded-md text-white">
                            ПЕРЕЙТИ В КАТАЛОГ
                        </button>

                        <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black  text-white flex justify-center items-center">
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-[20px] ">
                        <div className="relative flex flex-col gap-[30px] justify-start items-start p-[10px] overflow-hidden bg-[url(./assets/img/img/showcase/2.png)] bg-center bg-cover bg-no-repeat">
                            <p className="text-white">Акции</p>

                            <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black  text-white flex justify-center items-center">
                                <FaArrowRight />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-[20px] ">
                            <div className="relative flex flex-col gap-[30px] justify-start items-start p-[10px] overflow-hidden bg-[url(./assets/img/img/showcase/3.png)] bg-center bg-cover bg-no-repeat">
                                <p className="text-white">Новое поступление</p>

                                <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black  text-white flex justify-center items-center">
                                    <FaArrowRight />
                                </button>
                            </div>
                            <div className="relative flex flex-col gap-[30px] justify-start items-start p-[10px] overflow-hidden bg-[url(./assets/img/img/showcase/4.png)] bg-center bg-cover bg-no-repeat">
                                <p className="text-white">Акции на сверла</p>

                                <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black  text-white flex justify-center items-center">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
