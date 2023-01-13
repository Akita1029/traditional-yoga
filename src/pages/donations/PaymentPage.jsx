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
      <p className="">India donors, click below to Donate</p>      
    </div>
  );
}

export default PaymentPage;