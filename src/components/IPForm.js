import React from "react";
import { Form, Field } from "react-final-form";

const IPForm = (props) => {
  const onSubmit = (input) => {
    props.onSubmit(input.ip);
  };

  console.log(props);
  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <div className="form-centered">
            <form onSubmit={handleSubmit}>
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
        )}
      />
    </>
  );
};

export default IPForm;
