import React from "react";
import {
  Outlet
} from "react-router-dom";

import HeaderBar from "../components/HeaderBar";

export default function MainLayout(props) {

  return (
    <>
      <HeaderBar />
      
      <Outlet />

      <footer>

      </footer>
    </>
  );
}