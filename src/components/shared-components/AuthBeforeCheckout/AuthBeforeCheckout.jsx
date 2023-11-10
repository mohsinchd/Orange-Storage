import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { loginUser } from "../../actions/userActions";

const AuthBeforeCheckout = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  //   Change Input Handler
  const changeInputHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  //   Form Submit Handler
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.password === "") {
      return toast.error("Both Fields are required!");
    }
    dispatch(loginUser(formData));
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={changeInputHandler}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={changeInputHandler}
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary mt-4">Login</button>
        </div>
      </div>
    </form>
  );
};

export default AuthBeforeCheckout;
