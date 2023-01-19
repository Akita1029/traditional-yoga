import React from "react";
import { SvgIcon, Icon } from "@mui/material";

const CheckIcon = () => {
  return (
    <SvgIcon>
      <path fill="green" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero" />
    </SvgIcon>
  );
};  

const CourseLessonItem = (props) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center p-2 px-3"
        style={{
          backgroundColor: props.state ? '#02f92c1a' : '#F963021A', borderColor: '#E35B03FF', borderLeft: '1px solid', borderRight: '1px solid'
        }}>
        <div className="d-flex justify-content-between">
          <p className="fw-bold x-title">{props.title}</p>
          {props.state === 2 && <CheckIcon />}
        </div>
        <span className="content" style={{ fontSize: '12px' }}>{props.description}</span>
      </div>
    </>
  );
}

export default CourseLessonItem;