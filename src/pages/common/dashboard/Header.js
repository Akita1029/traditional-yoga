import React from "react"
import { IconButton, SvgIcon } from "@mui/material"

import { menuItems } from "../../../utilities/config"

// Connect redux, action
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/auth";

function DrawIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M3.90625 13.7188C4.29688 14.1094 5 13.8359 5 13.25V5.75C5 5.20312 4.29688 4.92969 3.90625 5.32031L0.15625 9.07031C0.0390625 9.1875 0 9.34375 0 9.5C0 9.69531 0.0390625 9.85156 0.15625 9.96875L3.90625 13.7188ZM16.875 15.75H0.625C0.273438 15.75 0 16.0625 0 16.375V17.625C0 17.9766 0.273438 18.25 0.625 18.25H16.875C17.1875 18.25 17.5 17.9766 17.5 17.625V16.375C17.5 16.0625 17.1875 15.75 16.875 15.75ZM16.9922 10.75H7.96875C7.69531 10.75 7.5 10.9844 7.5 11.2578V12.7812C7.5 13.0547 7.69531 13.25 7.96875 13.25H16.9922C17.2656 13.25 17.5 13.0547 17.5 12.7812V11.2578C17.5 10.9844 17.2656 10.75 16.9922 10.75ZM16.9922 5.75H7.96875C7.69531 5.75 7.5 5.98438 7.5 6.25781V7.78125C7.5 8.05469 7.69531 8.25 7.96875 8.25H16.9922C17.2656 8.25 17.5 8.05469 17.5 7.78125V6.25781C17.5 5.98438 17.2656 5.75 16.9922 5.75ZM16.875 0.75H0.625C0.273438 0.75 0 1.0625 0 1.375V2.625C0 2.97656 0.273438 3.25 0.625 3.25H16.875C17.1875 3.25 17.5 2.97656 17.5 2.625V1.375C17.5 1.0625 17.1875 0.75 16.875 0.75Z" fill="#F96302" />
        </SvgIcon>
    )
}

const Mainhead = ({ menu, expanded, onToggleSidebar, authstate, logout }) => {
  const currentItem = menuItems.find((m) => m.key === menu);

    const getHeaderStyle = () => {
        return !expanded ? "dashboard-header expandable" : "dashboard-header";
    }

  return (
    <div className={getHeaderStyle()}>
      <IconButton className="mt-2" onClick={() => onToggleSidebar()}>
        <DrawIcon />
      </IconButton>
      <div className="dashboard-header-title">
        <div>{currentItem ? currentItem.title : "Home"}</div>
      </div>
      {authstate === true ? (
        <div>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

Mainhead.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Mainhead);

