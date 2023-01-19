import { Col, Row } from "antd";
import React from "react";

const CertificateItem = (props) => {
  return (
    <>
      <Row className="border-primary-clr rounded p-2 mb-4">
        <Col md={8} sm={12}>
          <img style={{ borderRadius: 15 }} alt="progressItem" width={'100%'} src={require(`../assets/images/${props.image}`)} />
        </Col>
        <Col md={16} sm={12}>
          <div className="d-flex flex-column justify-content-between pt-3" style={{ height: '100%', paddingLeft: 15 }}>
            <div>
              <h5 className="mb-2"><b>{props.title}</b></h5>
              <span className="content" style={{ fontSize: 18 }}>
                {props.content}
              </span>
            </div>
            <div className="pb-2 text-center">
              <button style={{ width: 200 }} className="border-primary rounded px-4 text-black py-1">Download</button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CertificateItem