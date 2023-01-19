import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideMenu from "../pages/common/dashboard/SideMenu";
import Header from "../pages/common/dashboard/Header";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = (props) => {
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

  return (
    <>
      <div className="d-flex">
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
      </div>
    </>
  );
};

export default DashboardLayout;
