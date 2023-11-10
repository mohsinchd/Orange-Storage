import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { BsCartCheck } from "react-icons/bs";
import { logoutUser } from "../../actions/userActions";
import { toast } from "react-toastify";
import "./navbar.css";
import { USER_INFO_CLEAR } from "../../constants/userConstants";

const Navbar = () => {
  const { user } = useSelector((state) => state.userLogin);
  const { message, error } = useSelector((state) => state.userLogout);
  const { info } = useSelector((state) => state.userInfo);

  const { cartItems, loading } = useSelector((state) => state.cartGetItems);

  const dispatch = useDispatch();
  let storageUnits;
  if (!loading && cartItems) {
    storageUnits = cartItems[0].storage_unit;
  }

  // useEFFECT

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }
  }, [message, error]);

  // Handlers
  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch({ type: USER_INFO_CLEAR });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h3>
            <span className="mineTextOrange">
              <GiOrange />
              range
            </span>{" "}
            {info && info.is_service_provider && (
              <small>Service Provider</small>
            )}
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {user && info ? (
              <>
                {user && !user.service_provider && (
                  <li className="nav-item m-2">
                    <Link to="/cart" className="nav-link">
                      <button className="border-0 p-2 px-3 bg-outline-orange position-relative">
                        <BsCartCheck size={20} />
                        Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cartItems && storageUnits.length}
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </button>
                    </Link>
                  </li>
                )}

                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hi, {info.email}
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/myprofile">
                        My Profile
                      </Link>
                    </li>
                    {user &&
                      user.service_provider &&
                      user.is_provider_verified && (
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/service-provider-dashboard/analytics"
                          >
                            My Dashboard
                          </Link>
                        </li>
                      )}
                    <li>
                      <Link className="dropdown-item" to="/orders">
                        Your Orders
                      </Link>
                    </li>
                    <li className="m-2">
                      <button
                        className="btn btn-dark dropdown-item text-center"
                        onClick={logoutHandler}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item m-2">
                  <Link to="/sign-in">
                    <button className="border-0 p-2 px-3 bg-outline-orange">
                      Sign In / Sign Up
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
