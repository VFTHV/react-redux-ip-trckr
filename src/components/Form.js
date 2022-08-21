import React from "react";
import { Field, reduxForm } from "redux-form";

class Form extends React.Component {
  onSubmit = (input) => {
    this.props.onSubmit(input.ip);
  };

  render() {
    return (
      <>
        <div className="form-centered">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <label className="form-label" htmlFor="ip-input">
              IP Address Tracker
            </label>
            <Field
              name="ip"
              component="input"
              type="text"
              placeholder="Search for any IP address or domain"
              className="form-input"
              autoComplete="off"
            />
            <button className="submit">
              <div className="arrow"></div>
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default reduxForm({ form: "form" })(Form);
