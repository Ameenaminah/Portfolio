import { Outlet } from "react-router-dom";
import Navbar from "./ Navbar";
import Footer from "./Footer";

import React from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;