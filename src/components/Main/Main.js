import React from "react";
import Banner from "./Banner/Banner";
import Login from "./Login/Login";
import "./Main.scss";
import Team from "./Team/Team";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Banner />
        <Team />
      </div>
      <Login />
    </main>
  );
};

export default Main;
