import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import SideBar from "../components/SideBar/SideBar";
import WhatsappIcon from "../components/WhatsappIcon/WhatsappIcon";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      {/* <SideBar /> */}
      <WhatsappIcon />
      <Footer />
    </Fragment>
  );
}

export default Layout;
