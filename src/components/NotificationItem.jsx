import React from "react";

const NotificationItem = (props) => {
  return (
    <>
      <div className="w-100 rounded border-primary-clr py-3 px-4 mb-3">
        <div className="d-flex justify-content-between">
          <div style={{ width: 'calc(100% - 28px)' }}>
            <h5 style={{ cursor: 'pointer' }} onClick={() => props.onRead()}>{props.title}</h5>
          </div>
          <div style={{ width: 28, marginTop: -6, paddingLeft: 14 }}>
            <i onClick={() => props.onDelete()} className="bi bi-x fs-4" style={{ cursor: 'pointer' }}></i>
          </div>
        </div>
        <div style={{
          overflow: 'hidden',
          maxHeight: 75
        }}>
          <span className="content">{props.content}</span>
        </div>
      </div>
    </>
  )
}

export default NotificationItem