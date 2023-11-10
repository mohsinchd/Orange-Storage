import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../../actions/userActions";
import { toast } from "react-toastify";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { USER_REGISTER_RESET } from "../../../constants/userConstants";

const StorageProviderSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    is_service_provider: true,
  });

  const { message, error, loading } = useSelector(
    (state) => state.userRegister
  );
  const { user } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // USE EFFECT

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (message) {
      navigate("/sign-in");
      toast.success(message);
    }

    if (error) {
      toast.error(error);
      dispatch({ type: USER_REGISTER_RESET });
    }
  }, [message, error, user]);

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
      return toast.error("Both Feilds are required!");
    }
    if (formData.password.length <= 8) {
      return toast.error("Password Must be Greater than 8 Characters");
    }
    dispatch(registerUser(formData));
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="card m-auto  my-5 w-50 authWidth bg-light">
        <div className="card-body">
          <h1 className="text-center mineTextOrange">
            <GiOrange />
            range Application
          </h1>
          <h2 className="text-center mb-3">Sign Up As Service Provider!</h2>
          <div className="border-bottom"></div>
          <form onSubmit={submitFormHandler}>
            <div className="form-group m-3">
              <input
                type="email"
                name="email"
                id="email"
                onChange={changeInputHandler}
                value={formData.email}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                className="form-control"
                onChange={changeInputHandler}
                placeholder="Password"
              />
            </div>
            <div className="form-group m-3">
              <button
                type="submit"
                className="border-0 p-2 bg-orange text-light d-block w-100"
              >
                Sign Up
              </button>
            </div>
            <div className="border-bottom"></div>
          </form>
          <Link to="/sign-in" className="nav-link text-dark text-center m-3">
            Already have an account? Login In!
          </Link>
          <Link
            to="/forgot-password"
            className="nav-link text-dark text-center m-3"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </>
  );
};

export default StorageProviderSignUp;
