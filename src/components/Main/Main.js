import React from "react";
import Banner from "./Banner/Banner";
import Login from "./Login/Login";
import "./Main.scss"

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Banner />

        <Login />
      </div>
    </main>
  );
};

export default Main;
