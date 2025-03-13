import React from "react";
import Header from "./components/header";
import Showcase from "./components/showcase";
import Reception from "./components/reception";
import Product from "./components/product";
import Move from "./components/move";
import Card from "./components/card";
import Map from "./components/map";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Reception />
      <Product/>
      <Move/>
      <Card/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default App;
