import React from "react"


import CardItem from "../card-item"
import {products} from "../../utils"


const NewProducts = () => {
    return (
        <section className="py-[30px] bg-[#212526]">
            <div className="container2">
                 
                    <div className="grid grid-cols-4 gap-5">
                        {products.slice(0,4).map((product) => (
                            <div key={product.id}>
                                <CardItem product={product} />
                            </div>
                        ))}
                    </div>
               

            </div>
        </section>
    )
}

export default NewProducts
