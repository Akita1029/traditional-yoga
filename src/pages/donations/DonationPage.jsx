import React from "react";
import {
  Outlet
} from "react-router-dom";

import HeaderBar from "../../components/HeaderBar";
import DonationFooterBar from "../../components/DonationFooterBar";

export default function DonationPage(props) {

  return (
    <>
      <HeaderBar />

      <Outlet />

      <DonationFooterBar />
    </>
  );
}