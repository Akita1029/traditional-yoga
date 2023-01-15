import React, { useRef, useEffect, useState } from "react";
import CourseSortItem from "../../components/CourseSortItem";
import SubTitleBar from "../../components/SubTitleBar";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Accordion from "react-bootstrap/Accordion";
import { styled } from '@mui/material/styles';
import DonationBlock from "../../components/DonationBlock";

const PaymentPage = (props) => {
  return (
    <div className="container" style={{ marginBottom: 20 }}>
      <SubTitleBar title='The donations' detail='Thank you for your donation to the Yoga Healing Foundation of America Inc.' />
      <div style={{ width: '100%' }} >
        <img style={{ borderRadius: 10, width: '100%' }} src={require("../../assets/images/payment_dn.jpg")} />
      </div>
      <h4 className="fw-bold text-primary mt-5">India donors, click below to Donate</h4>
      <div className="mb-3 mt-4">
        <span className="fw-bold text-primary">I wish to donate</span><br />
      </div>
      <div className="d-flex">
        <div className="primary-button p-1 text-center" style={{ width: 130, marginRight: 10 }}>
          US - $100
        </div>
        <div className="primary-button p-1 text-center" style={{ width: 130, marginRight: 10 }}>
          US - $5
        </div>
        <div className="primary-button p-1 text-center" style={{ width: 130, marginRight: 10 }}>
          US - $25
        </div>
        <div className="primary-button p-1 text-center" style={{ width: 130, marginRight: 10 }}>
          US - $10
        </div>
        <div className="primary-button p-1 text-center" style={{ width: 130 }}>
          OTHER
        </div>
      </div>
      <div className="d-flex mb-3 mt-4">
        <span style={{ marginRight: 60 }} className="fw-bold text-primary">Frequency</span><br />
        <div className="d-flex">
          <div class="form-check" style={{ marginRight: 30 }}>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label class="form-check-label" for="exampleRadios1">
              One Time
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Monthly
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3 mt-4">
        <span style={{ marginRight: 60 }} className="fw-bold text-primary">Personal Information</span><br />
        <div className="d-flex mt-4">
          <div style={{ width: '22%' }}>
            <label>First Name</label>
            <input className="form-control mt-2" id="firstName" />
          </div>
          <div style={{ width: '4%' }} />
          <div style={{ width: '22%' }}>
            <label>Last Name</label>
            <input className="form-control mt-2" id="lastName" />
          </div>
          <div style={{ width: '4%' }} />
          <div style={{ width: '22%' }}>
            <label>Email</label>
            <input className="form-control mt-2" id="email" />
          </div>
          <div style={{ width: '4%' }} />
          <div style={{ width: '22%' }}>
            <label>Phone Number</label>
            <input className="form-control mt-2" id="phoneNumber" />
          </div>
        </div>
      </div>
      <div className="mb-3 mt-4">
        <span style={{ marginRight: 60 }} className="fw-bold text-primary">Billing Address</span><br />
        <div className="d-flex mt-4" style={{ justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <label>Address</label>
            <input className="form-control mt-2" id="address" />
          </div>
          <div style={{ width: '4%' }} />
          <div style={{ width: '22%' }}>
            <label>City</label>
            <input className="form-control mt-2" id="city" />
          </div>
          <div style={{ width: '4%' }} />
          <div style={{ width: '22%' }}>
            <label>Zip / Postal Code</label>
            <input className="form-control mt-2" id="zipcode" />
          </div>
        </div>
      </div>
      <div className="mb-3 mt-4">
        <div className="d-flex mt-4" style={{ justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <label>Select Country</label>
            <input className="form-control mt-2" id="country" />
          </div>
          <div style={{ width: '4%' }} />
          <div style={{ width: '48%' }}>
            <label>State - Other</label>
            <input className="form-control mt-2" id="state" />
          </div>
        </div>
      </div>
      <div className="mb-3 mt-4 w-100 p-3" style={{ border: '1px #F96302 solid', borderRadius: 5 }}>
        <div className="mb-3">
          <span className="fw-bold text-primary">Billing Address</span>
        </div>
        <div className="mb-4">
          <span className="content">
            NEW. Donate using Cryptos. For US residents, in addition to receiving tax deductions for the value of the crypto, you may be able to qualify for additional deductions in capital gains tax*. So, donating crypto translates into a larger donation and a higher deduction*. Please click here for crypto transfer instructions.*Not a tax advice. Please consult your CPA. Your situation may be different.
          </span>
        </div>
        <div className="d-flex mb-3 mt-4">
          <span style={{ marginRight: 60 }} className="fw-bold">Donate by</span><br />
          <div className="d-flex">
            <div class="form-check" style={{ marginRight: 30 }}>
              <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios11" value="option11" checked />
              <label class="form-check-label" for="exampleRadios1">
                Credit / Debit Card
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios21" value="option21" />
              <label class="form-check-label" for="exampleRadios2">
                Bank Account (Login Recommened)
              </label>
            </div>
          </div>
        </div>
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
      <div className="primary-button bg-primary px-4 mt-4 p-2 text-center" style={{ width: '100%', color: '#fff' }}>
        MAKE PAYMENT
      </div>
    </div>
  );
}

export default PaymentPage;