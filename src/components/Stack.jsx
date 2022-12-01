import React from "react";

export class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    <div
      className={
        "d-flex " + 
        `${this.props.direction === "horizontal" ? "flex-row" : "flex-column"} ${this.props.justifyContent === "start" ? 'justify-content-start' : "justify-content-between"}`
      }
    >
      {this.props.children}
    </div>
  }
}