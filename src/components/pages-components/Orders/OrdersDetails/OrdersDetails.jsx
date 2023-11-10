import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Container from "../../../shared-components/container/Container";
import {
  getOrderDetailsAdmin,
  updateOrderAdmin,
} from "../../../actions/ordersActions";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { UPDATE_ORDERS_ADMIN_RESET } from "../../../constants/ordersConstants";
import { toast } from "react-toastify";
import OrderStatusUpdate from "../OrderStatusUpdate/OrderStatusUpdate";

const OrdersDetails = () => {
  const { id } = useParams();

  const { loading, order, error } = useSelector(
    (state) => state.orderDetailsAdmin
  );

  const { loading: updateLoading, order: updateOrder } = useSelector(
    (state) => state.updateOrderAdmin
  );

  const [formData, setFormData] = useState({
    pending: order && order.pending,
    proccess: order && order.proccess,
    completed: order && order.completed,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderDetailsAdmin(id));
    if (updateOrder) {
      navigate("/service-provider-dashboard/analytics");
      toast.success("Updated");
      dispatch({ type: UPDATE_ORDERS_ADMIN_RESET });
    }
  }, [dispatch, updateOrder]);

  return (
    <div className="py-5">
      {loading || updateLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1>
            Order <span className="mineTextOrange">Details of ID: {id}</span>
          </h1>
          <div className="row mt-3">
            <div className="col-md-8">
              <div className="border-bottom py-2">
                <h3>Person's Details</h3>
                <div>
                  <span className="fw-bold me-2">Email:</span>
                  <span>{order.user.email}</span>
                </div>
              </div>
              {/* <div className="border-bottom py-2">
                <h3>Payments Details</h3>
                <p className="lead">Method: PayPal</p>
                {isPaid ? (
                  <div className="alert alert-success" role="alert">
                    Paid
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    Not Paid
                  </div>
                )}
              </div> */}
              <div className="border-bottom py-2">
                <h3>Order Status</h3>
                <p className="lead">Pending</p>
                {order.pending ? (
                  <div className="alert alert-success" role="alert">
                    Done
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    In Pending
                  </div>
                )}
                <p className="lead">Processing</p>
                {order.proccess ? (
                  <div className="alert alert-success" role="alert">
                    Processing Completed
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    In Processing
                  </div>
                )}

                <p className="lead">Completed</p>
                {order.completed ? (
                  <div className="alert alert-success" role="alert">
                    Order Completed
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    Not Completed
                  </div>
                )}

                <p className="lead">Is Paid</p>
                {order.payment_done ? (
                  <div className="alert alert-success" role="alert">
                    Paid
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    Not Paid
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h5>Order Summary</h5>
                    </li>

                    <li className="list-group-item">
                      <h6>Storage Unit Details</h6>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <p className="fw-bold">Name</p>
                      <p>{order.unit_order.name}</p>
                    </li>
                    <li className="list-group-item">
                      <div>
                        <span className="fw-bold me-2">Description:</span>
                        <span>{order.unit_order.description}</span>
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <p className="fw-bold">Price</p>
                      <p>${order.unit_order.per_unit_price}</p>
                    </li>
                  </ul>

                  <div>
                    <h5>Update Order Details</h5>
                    <OrderStatusUpdate
                      id={id}
                      updateOrderAdmin={updateOrderAdmin}
                      dispatch={dispatch}
                      order={order}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersDetails;
