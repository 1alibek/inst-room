import React from "react"

// img
import brand1 from "../../assets/img/img/brand/1.png"
import brand2 from "../../assets/img/img/brand/2.png"
import brand3 from "../../assets/img/img/brand/3.png"
import brand4 from "../../assets/img/img/brand/4.png"
import brand5 from "../../assets/img/img/brand/1.png"
import brand6 from "../../assets/img/img/brand/2.png"
import brand7 from "../../assets/img/img/brand/3.png"

// icons
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"

const Brand = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7]

    return (
        <section className="py-[30px] bg-[#212526]">
            <div className="container2">
                <div className="flex justify-between items-center gap-[20px] mb-[20px] max-[620px]:flex-col max-[620px]:items-start">
                    <h1 className="font-medium text-[30px] leading-[107%] text-white max-[620px]:text-[20px]">
                        Наши бренды
                    </h1>
              
                </div>

                <div className="flex gap-3">
                    {brands.map((brand, index) => (
                        <div key={index}>
                            <img src={brand} alt={`brand-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Brand
