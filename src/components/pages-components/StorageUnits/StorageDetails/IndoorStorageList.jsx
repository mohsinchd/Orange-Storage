import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../../actions/cartActions";
import { toast } from "react-toastify";
import { CART_ADD_ITEM_RESET } from "../../../constants/cartConstants";

const IndoorStorageList = ({ room }) => {
  const dispatch = useDispatch();

  const { error, cartItem } = useSelector((state) => state.cartAddItem);
  const { user } = useSelector((state) => state.userLogin);

  const addToCart = (roomId) => {
    dispatch(addItemsToCart(roomId));
  };

  useEffect(() => {
    if (cartItem) {
      dispatch({ type: CART_ADD_ITEM_RESET });
    }

    if (error) {
      toast.error("Please login first to add items to the cart.");
      dispatch({ type: CART_ADD_ITEM_RESET });
    }
  }, [cartItem, error]);

  return (
    <>
      <li key={room.id} className="list-group-item p-3">
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
                <h5>
                  {room.name} | {room.size_field}
                </h5>
                <p>{room.description}</p>
                {/* <p>{room.description}</p> */}
              </div>
              <div className="col-3 text-center">
                <h6>${room.per_unit_price}</h6>
                <p>Per Month</p>
              </div>
              {user ? (
                <>
                  <div className="col-4 text-center">
                    <button
                      onClick={() => addToCart(room.id)}
                      className={`border-0 p-2 ${
                        room.free_space === 0 ? "bg-secondary" : "bg-orange"
                      } text-light mt-5`}
                      disabled={room.free_space === 0}
                    >
                      {room.free_space === 0 ? "Reserved" : "Reserve"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-4 text-center">
                    Login / Sign up to reserve.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default IndoorStorageList;
