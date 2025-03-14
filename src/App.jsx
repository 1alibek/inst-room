import React from "react";
import Header from "./components/header";
import Showcase from "./components/showcase";
import Box from "./components/box";
import Ostatka from "./components/ostatki";
import Bg from "./components/bg";
import Card from "./components/card";
import Serteficate from "./components/serteficate";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Box/>
      <Ostatka/>
      <Bg/>
      <Card/>
      <Serteficate/>
    </div>
  );
};

export default App;
