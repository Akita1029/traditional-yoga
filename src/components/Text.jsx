import React from "react";

export class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.type === "h1") {
      return <h1>{this.props.children}</h1>;
    }
  }
}