import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../shared-components/container/Container";
import { updateUserEmail, updateUserPassword } from "../../actions/userActions";
import { toast } from "react-toastify";
import {
  USER_EMAIL_UPDATE_RESET,
  USER_PASSWORD_UPDATE_RESET,
} from "../../constants/userConstants";

const MyProfile = () => {
  const { info } = useSelector((state) => state.userInfo);

  const { user } = useSelector((state) => state.userLogin);

  const { message, error } = useSelector((state) => state.userEmailUpdate);
  const { message: passwordMessage, error: passwordError } = useSelector(
    (state) => state.userPasswordUpdate
  );

  const { serviceProvider } = useSelector((state) => state.getServiceProvider);

  let initialEmail = info && info.email ? info.email : "";
  const [email, setEmail] = useState(initialEmail);
  const [passwordData, setPasswordData] = useState({
    old_password: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();

  // Email Update Handler
  const emailUpdateHandler = (e) => {
    setEmail(e.target.value);
  };

  // Password Update Handler
  const passwordUpdateHandler = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  // Email Update Submit Handler
  const emailUpdateSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserEmail({ email }));
  };
  // Password Update Submit Handler
  const passwordUpdateSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !passwordData.old_password ||
      !passwordData.password ||
      !passwordData.password2
    ) {
      return toast.error("Password fields must not be empty!");
    }
    dispatch(updateUserPassword(passwordData));
  };

  // Side Effects
  useEffect(() => {
    if (message) {
      toast.success(`Updated! ${message}`);
      dispatch({ type: USER_EMAIL_UPDATE_RESET });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: USER_EMAIL_UPDATE_RESET });
    }

    if (passwordMessage) {
      toast.success(passwordMessage);
      dispatch({ type: USER_PASSWORD_UPDATE_RESET });
    }
    if (passwordError) {
      toast.error(passwordError);
      dispatch({ type: USER_PASSWORD_UPDATE_RESET });
    }
  }, [message, error, passwordMessage, passwordError]);

  return (
    <>
      <Container>
        <div className="py-3">
          <h1>My Profile</h1>
          <div className="row">
            <div className="col-md-6">
              <h3>Personal Information</h3>
              <form onSubmit={emailUpdateSubmitHandler}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={emailUpdateHandler}
                    className="form-control"
                    placeholder="email"
                    value={email}
                  />
                </div>
                <button className="btn btn-primary">Update Email</button>
                {user.service_provider && user.is_provider_verified && (
                  <div className="mt-2">
                    <Link
                      to={`/service-provider-verification/update/${serviceProvider.id}`}
                      className="nav-link"
                    >
                      Wana Update Your Service Provider Information as well?
                    </Link>
                  </div>
                )}
              </form>
            </div>

            <div className="col-md-6">
              <form onSubmit={passwordUpdateSubmitHandler}>
                <div className="form-group mb-3">
                  <label htmlFor="old_password">Old Password</label>
                  <input
                    type="password"
                    name="old_password"
                    id="old_password"
                    onChange={passwordUpdateHandler}
                    className="form-control"
                    placeholder="Old Password"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={passwordUpdateHandler}
                    className="form-control"
                    placeholder="New Password"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password2">Confirm New Password</label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    onChange={passwordUpdateHandler}
                    className="form-control"
                    placeholder="Confirm New Password"
                  />
                </div>
                <button className="btn btn-primary">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyProfile;
