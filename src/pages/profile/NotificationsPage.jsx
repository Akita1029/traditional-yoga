import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Pagination from 'rc-pagination';
import { toast } from 'react-toastify';
import { Form, Modal, Button } from "react-bootstrap";
import axios from 'axios'
import NotificationItem from "../../components/NotificationItem";
import config from "../../config/config";

const NotificationsPage = (props) => {
  const [pageS1, setPageS1] = useState(10)
  const [pageN1, setPageN1] = useState(1)
  const [pageS2, setPageS2] = useState(10)
  const [pageN2, setPageN2] = useState(1)
  const [unreadNotifications, setUnreadNotifications] = useState([])
  const [readNotifications, setReadNotifications] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [notificationDetail, setNotificationDetail] = useState({})

  useEffect(() => {
    axios.post(`${config.server}api/notifications/getUnreadNotifications`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setUnreadNotifications(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  const onUnreadTabClick = () => {
    axios.post(`${config.server}api/notifications/getUnreadNotifications`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setUnreadNotifications(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const onReadTabClick = () => {
    axios.post(`${config.server}api/notifications/getReadNotifications`).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        setReadNotifications(res.data)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const handleRead = (id) => {
    axios.post(`${config.server}api/notifications/read`, { id }).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const handleDelete = (id) => {
    axios.post(`${config.server}api/notifications/delete`, { id }).then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Deleted successfully')
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <>
      <Tabs>
        <TabList className="resourceheader">
          <Tab>
            <div className="py-1 px-3" onClick={() => onReadTabClick()}>
              Unread
            </div>
          </Tab>
          <Tab>
            <div className="py-1 px-3" onClick={() => onUnreadTabClick()}>
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
              {unreadNotifications.map((t, i) => {
                if (((pageN1 - 1) * pageS1) <= i && i < (pageN1 * pageS1)) {
                  return (
                    <NotificationItem
                      onRead={() => {
                        setShowModal(true)
                        setNotificationDetail(t)
                        handleRead(t.id)
                      }}
                      onDelete={() => handleDelete(t.id)}
                      title={t.title} content={t.content} />
                  )
                }
              })}
              <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='pt-1'>
                    Show
                  </div>
                  <div className='px-1'>
                    <Form.Select value={pageS1} size='sm' onChange={e => setPageS1(e.target.value)}>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={50}>50</option>
                    </Form.Select>
                  </div>
                  <div className='pt-1'>
                    entries
                  </div>
                </div>
                <div>
                  <Pagination onChange={e => setPageN1(e)} total={unreadNotifications.length} current={pageN1} pageSize={pageS1} />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="row">
            <div className="col-12 px-5">
              {readNotifications.map((t, i) => {
                if (((pageN2 - 1) * pageS2) <= i && i < (pageN2 * pageS2)) {
                  return (
                    <NotificationItem
                      onRead={() => {
                        setShowModal(true)
                        setNotificationDetail(t)
                        handleRead(t.id)
                      }}
                      onDelete={() => handleDelete(t.id)}
                      title={t.title} content={t.content} />
                  )
                }
              })}
              <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='pt-1'>
                    Show
                  </div>
                  <div className='px-1'>
                    <Form.Select value={pageS2} size='sm' onChange={e => setPageS2(e.target.value)}>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={30}>30</option>
                      <option value={50}>50</option>
                    </Form.Select>
                  </div>
                  <div className='pt-1'>
                    entries
                  </div>
                </div>
                <div>
                  <Pagination onChange={e => setPageN2(e)} total={readNotifications.length} current={pageN2} pageSize={pageS2} />
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} animation={false}>
        <Modal.Header>
          <h4>{notificationDetail.title}</h4>
        </Modal.Header>
        <Modal.Body>
          {notificationDetail.content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotificationsPage;