import React from "react";
import Header from "./components/header";
import Showcase from "./components/showcase";
import Video from "./components/video";
import Brand from "./components/brand";
import Footer from "./components/footer";
import Card from "./components/card";
import SwiperComponent from "./components/swiper";


const App = () => {
  return (
    <div>
      <Header />
      <SwiperComponent/>
      <Card/>
      <Video/>
      <Showcase />
      <Brand/>
      <Footer/>
   
    </div>
  );
};

export default App;
