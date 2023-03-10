import React from "react";
import Banner from "./Banner/Banner";
import GetStarted from "./GetStarted/GetStarted";
import Login from "./Login/Login";
import Slider from "./Slider.js/Slider";
import Team from "./Team/Team";

const Main = () => {
  return (
    <main className="main">
      <Banner />
      <div className="container">
        <Team />
      </div>
      <Login />
      <div className="container">
        <GetStarted />
      </div>
      <Slider />
    </main>
  );
};

export default Main;
