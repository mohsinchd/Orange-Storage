import React from "react";
import { cartUpdateItems } from "../../actions/cartActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CartList = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(cartUpdateItems(id));
    // toast.success("Removed Successfully.");
  };

  return (
    <>
      <li key={item.id} className="list-group-item p-3">
        <div className="d-flex row">
          <div className="col-2">
            <img
              src="/images/unit-small.webp"
              className="img-fluid rounded"
              alt="indoor"
            />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-5">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
              <div className="col-3 text-center">
                <h6>${item.per_unit_price}</h6>
                <p>Per Month</p>
              </div>
              <div className="col-4 text-center">
                <button
                  onClick={() => removeItem(item.id)}
                  className="border-0 p-2 bg-orange text-light mt-5"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartList;
