import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import SideMenu from "../pages/common/dashboard/SideMenu"
import Header from "../pages/common/dashboard/Header"
import { Outlet, useLocation } from "react-router-dom"

// Connect redux, action
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../actions/auth"

const DashboardLayout = (props) => {
  const [currentMenu, setCurrentMenu] = useState()
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [authstate, setAuthstate] = useState()
  const navigate = useNavigate()

  const handleSelectMenu = (selectedMenuItem) => {
    setCurrentMenu(selectedMenuItem.key)
    navigate(`${selectedMenuItem.url}`)
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
    props.setfunc(!sidebarExpanded)
  };

  const logout = () => {
    props.logoutUser();
    localStorage.removeItem("userToken")
  };

  useEffect(() => {
    if (props.auth.isAuthenticated === false) {
      setAuthstate(false)
    } else {
      setAuthstate(true)
    }
  }, []);

  useEffect(() => {
    if (props.auth.isAuthenticated === false) {
      window.location.href = "/signin"
    }
  }, [props.auth.isAuthenticated])

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
          authstate={authstate}
          logout={logout}
        />
        <Outlet expanded={sidebarExpanded} />
      </div>
    </>
  )
}

DashboardLayout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(DashboardLayout)
