import React from "react";
import { connect } from "react-redux";
import { fetchIP } from "../actions";

class Output extends React.Component {
  renderData = () => {
    return this.props.data ? this.props.data : "Loading...";
  };

  render() {
    return (
      <li className="data-column">
        <p className="data-name">{this.props.dataName}</p>
        <p className="output-data">{this.renderData()}</p>
      </li>
    );
  }
}

export default Output;
