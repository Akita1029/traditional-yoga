import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SideMenu from "../pages/common/dashboard/AdminSideMenu";
import Header from "../pages/common/dashboard/Header";
import { Outlet, useLocation } from "react-router-dom";

const AdminDashboardLayout = (props) => {
  const [currentMenu, setCurrentMenu] = useState();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSelectMenu = (selectedMenuItem) => {
    setCurrentMenu(selectedMenuItem.key);
    navigate(`${selectedMenuItem.url}`);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
    props.setfunc(!sidebarExpanded);
  };

  // useEffect(() => {
  //   if (!props.auth.isAuthencated) {
  //     window.location.href = "/login";
  //   }
  // }, [props.auth.isAuthencated]);

  return (
    <>
      <SideMenu
        onSelectMenu={handleSelectMenu}
        currentMenu={currentMenu}
        expanded={sidebarExpanded}
      />
      <Header
        menu={currentMenu}
        expanded={sidebarExpanded}
        onToggleSidebar={toggleSidebar}
      />
      <Outlet expanded={sidebarExpanded} />
    </>
  );
};

export default AdminDashboardLayout;
