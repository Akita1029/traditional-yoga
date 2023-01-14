import React from "react";

const DonationBlock = (props) => {
  const image = require("../assets/images/" + props.image);
  return (
    <>
      <div className="d-flex flex-row justify-content-start mt-5">
        <div style={{ width: 120, fontWeight: 'bold' }}>
          <span style={{ fontSize: 40 }}>7</span><br />
          <span>Decemver</span>
        </div>
        <div style={{ width: 'calc(100% - 120px)' }} className="d-flex flex-row justify-content-between">
          <div style={{ width: '45%' }}>
            <h5 style={{ color: '#1DA1F2' }}>{props.title}</h5>
            <span className="content">{props.time}</span><br />
            <img className="rounded-2 mb-1" width={14} height={16} style={{ marginRight: 12, marginLeft: 2 }}
              src={require("../assets/images/destinationIcon.png")} />
            <span className="content">{props.position}</span><br />
            <img className="rounded-2 mb-1" width={18} height={16} style={{ marginRight: 10 }}
              src={require("../assets/images/dolorX.png")} />
            <span className="content">{props.amount}</span>
            <img className="rounded-2 mb-1" width={22} height={16} style={{ marginLeft: 20, marginRight: 9 }}
              src={require("../assets/images/programI.png")} />
            <span className="content">{props.program}</span>
            <div className="mt-3 mb-4"
              style={{ padding: '2px 20px', backgroundColor: 'rgba(109, 165, 68, 0.29)', width: 'fit-content', borderRadius: 50, color: '#6DA544' }}>
              {props.course}
            </div>
            <span className="content">{props.content}</span><br />
            <div className="fw-bold mt-3 mb-3">
              <span className="content">
                Prerequisites
              </span>
            </div>
            <span className="content">{props.prerequisites}</span>
            <div className="d-flex">
              <div className="primary-button px-4 mt-4 p-2" style={{ width: 'fit-content' }}>
                Learn More
              </div>
              <div className="primary-button bg-primary px-4 mt-4 p-2 mx-3" style={{ width: 'fit-content', color: '#fff' }}>
                Register
              </div>
            </div>
          </div>
          <div style={{ width: '45%' }}>
            <img className="rounded-2" style={{ width: '100%', height: 400 }} src={image} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DonationBlock;