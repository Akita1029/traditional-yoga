import React, { useState, useEffect } from "react";
import "../../../assets/css/home.css";
import "react-multi-carousel/lib/styles.css";
import isEmpty from "../../../validation/is-empty";

// Connect redux, action
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getuserdata } from "../../../actions/user";

const AdminUserManagement = (props) => {
  const [alldata, setAlldata] = useState([]);
  const [result, setResult] = useState();
  useEffect(() => {
    props.getuserdata();
  }, []);
  useEffect(() => {
    setAlldata(props.users);
  }, [props.users]);

  return (
    <div
      className={
        !props.expandflag
          ? "dashboard-container expandable"
          : "dashboard-container"
      }
    >
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Zip Code</th>
          <th>Role</th>
        </tr>
        {isEmpty(alldata) ? (
          <tr>
            <td>No data</td>
            <td>No data</td>
            <td>No data</td>
            <td>No data</td>
          </tr>
        ) : (
          alldata.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.last_name}</td>
                <td>{item.whatsapp_phonenumber}</td>
                <td>{item.zip_code}</td>
                <td>{item.role}</td>
              </tr>
            );
          })
        )}
      </table>
    </div>
  );
};

AdminUserManagement.propTypes = {
  getuserdata: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users.data,
});

export default connect(mapStateToProps, { getuserdata })(AdminUserManagement);
