import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubTitleBar from "../../components/SubTitleBar";

const PaymentPage = (props) => {
  return (
    <Container>
      <SubTitleBar title='The donations' detail='Thank you for your donation to the Yoga Healing Foundation of America Inc.' />
      <div>
        <img style={{ borderRadius: 10, width: '100%' }} src={require("../../assets/images/payment_dn.jpg")} />
      </div>
      <h4 className="font-weight-bold text-primary mt-5">India donors, click below to Donate</h4>
      <div className="mt-4">
        <span className="font-weight-bold text-primary">I wish to donate</span>
      </div>
      <Row className="mt-3">
        <Col xl={8} md={12}>
          <Row>
            <Col md={2} className="mb-2">
              <div className="primary-button p-1 text-center">
                US - $100
              </div>
            </Col>
            <Col md={2} className="mb-2">
              <div className="primary-button p-1 text-center">
                US - $5
              </div>
            </Col>
            <Col md={2} className="mb-2">
              <div className="primary-button p-1 text-center">
                US - $25
              </div>
            </Col>
            <Col md={2} className="mb-2">
              <div className="primary-button p-1 text-center">
                US - $10
              </div>
            </Col>
            <Col md={2} className="mb-2">
              <div className="primary-button p-1 text-center">
                OTHER
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={2}>
          <span className="font-weight-bold text-primary">Frequency</span>
        </Col>
        <Col sm={2}>
          <Form.Check
            inline
            label="One Time"
            name="group1"
            type={'radio'}
            id={`inline-radio-1`}
          />
        </Col>
        <Col sm={2}>
          <Form.Check
            inline
            label="Monthly"
            name="group1"
            type={'radio'}
            id={`inline-radio-2`}
          />
        </Col>
      </Row>
      <div className="mt-4">
        <span className="font-weight-bold text-primary">Personal Infomation</span>
      </div>
      <Row className="mt-4">
        <Col xl={3} md={6}>
          <label>First Name</label>
          <input className="form-control mt-2" id="firstName" />
        </Col>
        <Col xl={3} md={6}>
          <label>Last Name</label>
          <input className="form-control mt-2" id="lastName" />
        </Col>
        <Col xl={3} md={6}>
          <label>Email</label>
          <input className="form-control mt-2" id="email" />
        </Col>
        <Col xl={3} md={6}>
          <label>Phone Number</label>
          <input className="form-control mt-2" id="phone" />
        </Col>
      </Row>
      <div className="mt-4">
        <span className="font-weight-bold text-primary">Billing Address</span>
      </div>
      <Row className="mt-4">
        <Col xl={6} md={12}>
          <label>Address</label>
          <input className="form-control mt-2" id="address" />
        </Col>
        <Col xl={3} md={6}>
          <label>City</label>
          <input className="form-control mt-2" id="city" />
        </Col>
        <Col xl={3} md={6}>
          <label>Zip / Postal Code</label>
          <input className="form-control mt-2" id="zipCode" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xl={6} sm={12}>
          <label>Select Country</label>
          <input className="form-control mt-2" id="country" />
        </Col>
        <Col xl={6} sm={12}>
          <label>State - Other</label>
          <input className="form-control mt-2" id="state" />
        </Col>
      </Row>
      <div className="mb-3 mt-4 w-100 p-3" style={{ border: '1px #F96302 solid', borderRadius: 5 }}>
        <div className="mb-3">
          <span className="font-weight-bold text-primary">Billing Address</span>
        </div>
        <div className="mb-4">
          <span className="content">
            NEW. Donate using Cryptos. For US residents, in addition to receiving tax deductions for the value of the crypto, you may be able to qualify for additional deductions in capital gains tax*. So, donating crypto translates into a larger donation and a higher deduction*. Please click here for crypto transfer instructions.*Not a tax advice. Please consult your CPA. Your situation may be different.
          </span>
        </div>
        <Row className="mt-3">
          <Col lg={2}  sm={12}>
            <span className="font-weight-bold text-primary">Donate by</span>
          </Col>
          <Col lg={2} sm={12}>
            <Form.Check
              inline
              label="Credit / Debit Card"
              name="group2"
              type={'radio'}
              id={`inline-radio-11`}
            />
          </Col>
          <Col lg={3} sm={12}>
            <Form.Check
              inline
              label="Bank Account (Login Recommened)"
              name="group2"
              type={'radio'}
              id={`inline-radio-21`}
            />
          </Col>
        </Row>
        <div>
          <span className="content">
            <ul>
              <li>
                If you like to pause the recurring donation for any month or to stop, please write to donate@ishausa.org
              </li>
              <li>
                Donations to Isha Foundation are tax deductible under section 501(c)(3) of IRS.
              </li>
              <li>
                All bank transactions will be debited on 15th of each month.
              </li>
              <li>
                Donations are not refundable.
              </li>
            </ul>
          </span>
        </div>        
      </div>
      <button className="w-100 border-primary bg-primary rounded px-4 text-light fs-5 py-2 mt-4 mb-4">Make Payment</button>
    </Container >
  );
}

export default PaymentPage;