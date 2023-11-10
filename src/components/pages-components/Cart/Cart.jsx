import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { cartGetItems } from "../../actions/cartActions";
import { toast } from "react-toastify";
import CheckoutCard from "./CheckoutCard";
import Spinner from "../../shared-components/Spinner/Spinner";

const Cart = () => {
  const dispatch = useDispatch();

  const { loading, error, cartItems } = useSelector(
    (state) => state.cartGetItems
  );

  let subTotalPrice = 0;

  if (!loading && cartItems) {
    subTotalPrice = cartItems[0].storage_unit.reduce(
      (acc, item) => acc + item.per_unit_price,
      0.0
    );
  }

  useEffect(() => {
    dispatch(cartGetItems());
  }, []);

  return (
    <div className="container py-3">
      <h1>Your Shopping Cart:</h1>

      <div className="row mt-3">
        <div className="col-md-9">
          {loading ? (
            <Spinner />
          ) : error ? (
            <>
              <div className="alert alert-info">No Items in the Cart.</div>
            </>
          ) : (
            <>
              <h5 className="border-bottom">Storage Unit Items</h5>
              <ul className="list-group list-group-flush">
                {cartItems && cartItems[0].storage_unit.length === 0 ? (
                  <>
                    <div className="alert alert-info">Your cart is Empty!</div>
                  </>
                ) : (
                  <>
                    {cartItems[0].storage_unit.map((item) => (
                      <CartList item={item} />
                    ))}
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5>Sub Total:</h5>
                        </div>
                        <div>
                          <h6>${subTotalPrice}</h6>
                          per month
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </>
          )}
        </div>
        <div className="col-md-3">
          <CheckoutCard subTotal={subTotalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
