import React from "react";
import { useState } from "react";

const SubTitleBar = (props) => {
  return (
    <>
      <div className="row w-100 d-flex flex-row justify-content-between align-items-center">
        <h1 className="col-12 col-sm-6 py-4">{props.title}</h1>
        <h5 className="col-12 col-sm-6 pb-3 pb-sm-0 py-sm-3 py-0" style={{textAlign:'right'}}>{props.detail}</h5>
      </div>
    </>
  )
}

export default SubTitleBar;
