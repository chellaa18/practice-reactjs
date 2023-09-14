import React, { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const [mail, setMail] = useState("");

  const addForm = (e) => {
    e.preventDefault()
    alert(`Submitted ${mail}`)
    setMail('')
  
  };


  const addMail = (e) => {
    setMail(e.target.value);
  };

  return (
    <>
      <div className="container">
        {" "}
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          {" "}
          <div className="col-lg-4">
            {" "}
            <form
              onSubmit={addForm}
              className="bg-light border border-secondary p-5 rounded"
            >
              <h4 style={{ color: "#d51c9a" }}>Login Form</h4>
              <div className="form-outline mb-4">
                {" "}
                <label className="form-label" htmlFor="form2Example1">
                  Email address:
                </label>
                <input
                  type="email"
                  id="form2Example1"
                  value={mail}
                  className="form-control border border-secondary"
                  onChange={addMail}
                  autoFocus
                />
              </div>

              <div className="form-outline mb-4">
                {" "}
                <label className="form-label" htmlFor="form2Example2">
                  Password:
                </label>
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control border border-secondary"
                  
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value={"Submit"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
