import React from "react";

class Form extends React.Component {
  render() {
    return (
      <>
        <div className="form-centered">
          <form>
            <label className="form-label" htmlFor="ip-input">
              IP Address Tracker
            </label>
            <input
              name="ip=input"
              id="ip-input"
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

export default Form;
