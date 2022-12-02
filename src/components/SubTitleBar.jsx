import React from "react";
import { useState } from "react";

const SubTitleBar = (props) => {
  return (
    <>
      <div className="w-100 pt-3 d-flex flex-row justify-content-between">
        <span className="mt-1">{props.title}</span>
        <h1>{props.detail}</h1>
      </div>
    </>
  )
}

export default SubTitleBar;
