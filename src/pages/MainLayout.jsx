import React from "react";
import {
  Outlet
} from "react-router-dom";

import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";

export default function MainLayout(props) {

  return (
    <>
      <HeaderBar />

      <Outlet />

      <FooterBar />
    </>
  );
}