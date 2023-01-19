import React from "react";

const NotificationItem = (props) => {
  return (
    <>
      <div className="w-100 rounded border-primary-clr py-3 px-4 mb-3">
        <div className="d-flex justify-content-between">
          <div style={{ width: 'calc(100% - 28px)'}}>
            <h5>{props.title}</h5>
          </div>
          <div style={{ width: 28, marginTop: -6, paddingLeft: 14 }}>
            <i className="bi bi-x fs-4" style={{ cursor: 'pointer' }}></i>
          </div>
        </div>
        <span className="content">{props.content}</span>
      </div>
    </>
  )
}

export default NotificationItem