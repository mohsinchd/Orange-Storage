import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../actions/ordersActions";
import { toast } from "react-toastify";
import { PLACE_ORDER_RESET } from "../../constants/ordersConstants";

const CheckoutCard = ({ subTotal }) => {
  const [checkoutFrom, setCheckoutFrom] = useState(false);

  const { error, order } = useSelector((state) => state.placeOrder);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    business_type: "",
    reasons: "",
  });

  const formDataHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(placeOrder(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong while placing the order.");
      dispatch({ type: PLACE_ORDER_RESET });
    }

    if (order) {
      navigate("/orders");
      dispatch({ type: PLACE_ORDER_RESET });
    }
  }, [error, order]);

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-3">
          <div className="d-flex justify-content-between">
            <h6>Due Today:</h6>
            <h6>$0.00</h6>
          </div>
        </li>
        <li className="list-group-item p-3">
          <p className="fst-italic">
            All rates are in US dollars and do not include sales tax or shipping
            unless otherwise noted.
          </p>
          <button
            onClick={() => setCheckoutFrom(!checkoutFrom)}
            className="border-0 bg-orange text-light p-2 d-block w-100"
          >
            Check out
          </button>
        </li>
        {checkoutFrom && (
          <li className="list-group-item p-3">
            <p className="fw-bold">
              Please Fill out the form to place your order
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="business_type">Business Type</label>
                <select
                  id="business_type"
                  onChange={formDataHandler}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Type</option>
                  <option value="commercial">Commercial</option>
                  <option value="public">Public</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                </select>
                {/* <input
                  type="text"
                  id="business_type"
                  className="form-control"
                  placeholder="Business Type"
                 
                /> */}
              </div>
              <div className="form-group">
                <label htmlFor="reasons">Reason to reserve</label>
                <textarea
                  id="reasons"
                  className="form-control"
                  placeholder="Reason to Reserve"
                  cols="30"
                  rows="5"
                  onChange={formDataHandler}
                ></textarea>
              </div>
              <button
                onClick={submitFormHandler}
                className="border-0 mt-3 bg-orange text-light p-2 d-block w-100"
              >
                Place Order
              </button>
            </form>
          </li>
        )}
      </ul>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <h5>Due Later:</h5>
          <div>
            <p className="text-muted m-0">${subTotal}</p>
            per month
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
