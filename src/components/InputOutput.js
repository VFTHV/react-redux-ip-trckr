import React, { Component } from "react";
import Form from "./Form";
import Output from "./Output";
import Map from "./Map";

class InputOutput extends Component {
  render() {
    return (
      <section className="input-output">
        <Form />
        <ul className="output">
          <Output />
          <Output />
          <Output />
          <Output />
          <Map />
        </ul>
      </section>
    );
  }
}

export default InputOutput;
