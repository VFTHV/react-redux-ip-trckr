import React, { Component } from "react";
import Map from "./Map";
import Form from "./Form";
import Output from "./Output";
import { connect } from "react-redux";
import { fetchIP } from "../actions";

class InputOutput extends Component {
  componentDidMount() {
    // this.props.fetchIP();
  }

  renderData = (dataType) => {
    if (!this.props.ipfy.location) {
      return;
    }
    switch (dataType) {
      case "ip":
        return this.props.ipfy.ip;
      case "location":
        return (
          <>
            {this.props.ipfy.location.city}, {this.props.ipfy.location.region}{" "}
            {this.props.ipfy.location.postalCode}
          </>
        );
      case "timezone":
        return (
          <>
            UTC: <span>{this.props.ipfy.location.timezone}</span>
          </>
        );
      case "isp":
        return this.props.ipfy.isp;
      default:
        return;
    }
  };

  renderError = () => {
    if (!this.props.ipfy.response) {
      return;
    }
    return this.props.ipfy.response.data.messages;
  };

  onSubmit = (input) => {
    this.props.fetchIP(input);
  };

  render() {
    return (
      <>
        <section className="input-output">
          <h5 className="form-label">{this.renderError()}</h5>
          <Form onSubmit={this.onSubmit} />
          <ul className="output">
            <Output dataName="IPAddress" data={this.renderData("ip")} />
            <Output dataName="Location" data={this.renderData("location")} />
            <Output dataName="Timezone" data={this.renderData("timezone")} />
            <Output dataName="ISP" data={this.renderData("isp")} />
          </ul>
        </section>
        <Map />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ipfy: state.ipfy,
  };
};

export default connect(mapStateToProps, { fetchIP })(InputOutput);
