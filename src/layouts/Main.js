import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
