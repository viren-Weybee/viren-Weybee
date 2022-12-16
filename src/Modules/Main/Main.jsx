import React from "react";
import { Outlet } from "react-router-dom";
import { Content } from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
