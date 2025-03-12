import React from "react";


import { products } from "../../utils";
import CardItem from "../card-item";

const Products = () => {
  return (
    <div className="container2 py-8">
      <div className="grid grid-cols-4 gap-5">
        {products.map((value) => (
          <div key={value.id}>
            <CardItem product={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
