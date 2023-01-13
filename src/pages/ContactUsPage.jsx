import React, { useRef, useEffect, useState } from "react";
import CourseSortItem from "../components/CourseSortItem";
import SubTitleBar from "../components/SubTitleBar";
import Button from '@mui/material/Button';
import Accordion from "react-bootstrap/Accordion";

const ContactUsPage = (props) => {
  return (
    <div className="container">
      <SubTitleBar title='Contact Us' detail='Have a Question or need Help?'/>

      {/* <div className="d-flex justify-content-between mt-5">
        <div>
          Contact Us
        </div>
        <div style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>
          Have a Question or<br /> need Help?
        </div>
      </div> */}
      <div style={{ width: '100%' }} >
        <img style={{ borderRadius: 10, width: '100%' }} src={require("../assets/images/Rectangle 16.png")} />
      </div>
      <div className="d-flex justify-content-betweeen mt-5">
        <div style={{ width: '45%' }}>
          <h4 className="fw-bold mb-3">We are here for help you! Arrange a meeting.</h4>
          <span className="content mt-2">
            Holisticly engage inexpensive architectures via high-quality solutions. Efficiently implement synergistic applications vis-a-vis best-of-breed ecommerce onotonectally enable client-based portals
          </span>
          <h4 className="fw-bold text-primary mt-5 mb-3">Opening Hours</h4>
          <div style={{ paddingRight: 20 }}>
            <div className="d-flex justify-content-between">
              <div>
                <span className="content">Mon - Fri</span>
              </div>
              <div>
              <span className="content">8:00am - 8:00pm</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span className="content">Saturday</span>
              </div>
              <div>
                <span className="content">9:00am - 6:00pm</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span className="content">Sunday</span>
              </div>
              <div>
                <span className="content">9:00am - 6:00pm</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div style={{ width: '45%' }}>
              <h4 className="fw-bold text-primary mt-5 mb-3">Address</h4>
              <span className="content mt-2">
                374 William S Canning Blvd, Fall River MA 2721
              </span>
            </div>
            <div style={{ width: '45%' }}>
              <h4 className="fw-bold text-primary mt-5 mb-3">Customer Supports</h4>
              <span className="mt-2">
                <b>(880) 3695 25423</b>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <img style={{ width: '100%' }} src={require("../assets/images/map.png")} />
          </div>
        </div>
        <div style={{ width: '10%' }} />
        <div style={{ width: '45%' }}>
          <h4 className="fw-bold text-primary mb-3">Fill the below form with your query or questions to reach us out.</h4>
          <div className="d-flex justify-content-betweeen mt-3">
            <div style={{ width: '45%' }}>
              <label>First Name</label>
              <input className="form-control mt-2" id="firstName" />
            </div>
            <div style={{ width: '10%'}} />
            <div style={{ width: '45%' }}>
              <label>Last Name</label>
              <input className="form-control mt-2" id="lastName" />
            </div>
          </div>
          <div className="mt-3">
            <label>Email address</label>
            <input type="email" className="form-control mt-2" id="email" />
          </div>
          <div className="mt-3">
            <div className="form-group">
              <label>Phone (optional)</label>
              <input className="form-control mt-2" id="phone" />
            </div>
          </div>
          <div className="mt-3">
            <div className="form-group">
              <label>Country</label>
              <input className="form-control mt-2" id="country" />
            </div>
          </div>
          <div className="mt-3">
            <div className="form-group">
              <label>Query or Message</label>
              <textarea className="form-control mt-2" id="queryOrMessage" rows="4" />
            </div>
          </div>
          <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-2 mt-5 mb-4">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;