import React, { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WhatsappIcon from "../components/WhatsappIcon/WhatsappIcon";
import PageLoader from "../components/PageLoader/PageLoader";
import ScrollToTop from "./ScrollToTop.jsx";

function Layout() {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <WhatsappIcon />
      <Footer />
    </Fragment>
  );
}

export default Layout;
