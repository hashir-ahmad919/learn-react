import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

/**
 * We use Outlet here, it used this Layout as a base
 * It'll keep everything above n below the same
 * And where you use Outlet that part will change
 * @returns
 */

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
