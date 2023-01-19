import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NotificationItem from "../../components/NotificationItem";

const NotificationsPage = (props) => {

  return (
    <>
      <Tabs>
        <TabList className="resourceheader">
          <Tab>
            <div className="py-1 px-3">
              Unread
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3">
              Read
            </div>
          </Tab>
        </TabList>
        <div
          className="p-1 p-sm-4"
          style={{
            border: "1px solid #F96302",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTop: "none",
            marginTop: "-10px",
            maxHeight: 800,
            overflow: 'auto'
          }}
        >
          <TabPanel className="row">
            <div className="col-12 px-5">
              <NotificationItem title="Submited Application Form." content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
              <NotificationItem title="You Can start Course" content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
              <NotificationItem title="(RYIT 200) Free Online Traditional" content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
              <NotificationItem title="(RYIT 200) Free Online Traditional" content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
              <NotificationItem title="(RYIT 200) Free Online Traditional" content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-5">
              <NotificationItem title="Submited Application Form." content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
              <NotificationItem title="Submited Application Form." content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
              <NotificationItem title="Submited Application Form." content="Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become Free Online Traditional Meditation Teacher Training Based on Darashanas Or Sanathana Dharma For Yoga Teachers and Students to become a...." />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}

export default NotificationsPage;