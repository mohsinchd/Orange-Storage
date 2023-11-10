import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Spinner from "../../../shared-components/Spinner/Spinner";

import { loginUser } from "../../../actions/userActions";
import { USER_REGISTER_RESET } from "../../../constants/userConstants";
import { getAllServiceProviders } from "../../../actions/serviceProviderActions";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, user, error } = useSelector((state) => state.userLogin);
  const { info, loading: loadingInfo } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: USER_REGISTER_RESET });

    if (user) {
      if (user.service_provider && user.is_provider_verified) {
        dispatch(getAllServiceProviders());
        navigate("/service-provider-dashboard/analytics");
      } else if (user.service_provider && !user.is_provider_verified) {
        navigate("/provider-details-verification");
      } else {
        navigate("/");
      }
      toast.success("Logged In!");
    }

    if (error) {
      toast.error(error);
    }
  }, [user, error]);

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

  return loading || loadingInfo ? (
    <Spinner />
  ) : (
    <>
      <div className="card m-auto my-5 authWidth w-50 bg-light">
        <div className="card-body">
          <h1 className="text-center mineTextOrange ">
            <GiOrange />
            range Application
          </h1>
          <h2 className="text-center mb-3">Sign In!</h2>
          <div className="border-bottom"></div>
          <form onSubmit={submitFormHandler}>
            <div className="form-group m-3">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={changeInputHandler}
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
                Sign In
              </button>
            </div>
            <div className="border-bottom"></div>
          </form>
          <Link to="/sign-up" className="nav-link text-dark text-center m-3">
            Don't Have an Account? Create New!
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

export default SignIn;
