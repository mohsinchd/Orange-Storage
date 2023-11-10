import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { forgotPassword } from "../../../actions/userActions";
import { USER_FORGOT_PASSWORD_RESET } from "../../../constants/userConstants";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    new_password: "",
  });

  const { message, error, loading } = useSelector(
    (state) => state.userForgotPassword
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // USE EFFECT

  useEffect(() => {
    if (message) {
      navigate("/sign-in");
      toast.success(message);
      dispatch({ type: USER_FORGOT_PASSWORD_RESET });
    }
    if (error) {
      toast.error(error);
    }
  }, [message, error]);

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
    if (formData.email === "" || formData.new_password === "") {
      return toast.error("All Feilds are required!");
    }

    dispatch(forgotPassword(formData));
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
          <h2 className="text-center mb-3">Forgot Password!</h2>
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
                id="new_password"
                value={formData.new_password}
                className="form-control"
                onChange={changeInputHandler}
                placeholder="New Password"
              />
            </div>
            <div className="form-group m-3">
              <button type="submit" className="btn btn-dark w-100">
                Change Password
              </button>
            </div>
            <div className="border-bottom"></div>
          </form>
          <Link to="/sign-in" className="nav-link text-dark text-center m-3">
            Already have an account? Login In!
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
