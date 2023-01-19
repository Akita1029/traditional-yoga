import React from "react";
import SubTitleBar from "../components/SubTitleBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactUsPage = (props) => {
  return (
    <>
      <Container>
        <SubTitleBar title='Contact Us' detail='Have a Question or need Help?' />
        <div className="mb-5">
          <img alt="contactus1" style={{ borderRadius: 10, width: '100%' }} src={require("../assets/images/Rectangle 16.png")} />
        </div>
        <Row>
          <Col lg={6}>
            <h4 className="mb-3">We are here for help you! Arrange a meeting.</h4>
            <span className="content mt-2">
              Holisticly engage inexpensive architectures via high-quality solutions. Efficiently implement synergistic applications vis-a-vis best-of-breed ecommerce onotonectally enable client-based portals
            </span>
            <h4 className="text-primary mt-4 mb-3">Opening Hours</h4>
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
            <Row>
              <Col lg={7} sm={12}>
                <h4 className="text-primary mt-5 mb-3">Address</h4>
                <span className="content mt-2">
                  374 William S Canning Blvd, Fall River MA 2721
                </span>
              </Col>
              <Col lg={5} sm={12}>
                <h4 className="text-primary mt-5 mb-3">Customer Supports</h4>
                <span className="mt-2">
                  <b>(880) 3695 25423</b>
                </span>
              </Col>
            </Row>
            <div className="mt-4 mb-4">
              <img alt="contactus1" style={{ width: '100%' }} src={require("../assets/images/map.png")} />
            </div>
          </Col>
          <Col lg={6}>
            <h4 className="text-primary">Fill the below form with your query or questions to reach us out.</h4>
            <Row>
              <Col lg={6} className="mt-2">
                <label>First Name</label>
                <input className="form-control mt-2" id="firstName" />
              </Col>
              <Col lg={6} className="mt-2">
                <label>Last Name</label>
                <input className="form-control mt-2" id="lastName" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={12}>
                <label>Email address</label>
                <input type="email" className="form-control mt-2" id="email" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={12}>
                <label>Phone (optional)</label>
                <input className="form-control mt-2" id="phone" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={12}>
                <label>Country</label>
                <input className="form-control mt-2" id="country" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={12}>
                <label>Query or Message</label>
                <textarea className="form-control mt-2" id="queryOrMessage" rows="4" />
              </Col>
            </Row>
            <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-2 mt-4 mb-4">SUBMIT</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUsPage;