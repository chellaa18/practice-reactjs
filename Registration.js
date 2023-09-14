import React from "react";


const Registration = () => {

  return (
    <div className="container mt-3">
      <div className="row vh-100 justify-content-center">
        <div className="col-lg-4">
          <form className="bg-light p-5 rounded">
            <h4 style={{ color: "#d51c9a" }}>Registration Form</h4>
            <div className="form-group mb-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                autoFocus
                
              />
            </div>
            <div className="form-group mb-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                // value={this.state.email}
              />
            </div>
            <div className="form-group mb-4">
              <label>Phone</label>
              <input type="tel" className="form-control" />
            </div>

            <div className="form-group mb-4">
                {" "}
                <label className="form-label" htmlFor="form2Example2">
                  Password:
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                />
              </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
