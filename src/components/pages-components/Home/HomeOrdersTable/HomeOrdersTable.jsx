import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsCheck2 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import {
  deleteOrder,
  deleteOrderAdmin,
  getAllOrders,
} from "../../../actions/ordersActions";

const HomeOrdersTable = ({ orders }) => {
  const { info } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrderAdmin(id));
    dispatch(getAllOrders());
    navigate("/storage-provider-dashboard");
  };

  return (
    <>
      <div className="table-responsive">
        <table class="table table-striped table-hover mt-2">
          <thead className="text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">STORAGE UNIT</th>
              <th scope="col">PENDING</th>
              <th scope="col">PROCESSED</th>
              <th scope="col">COMPLETED</th>
              <th scope="col">PRICE</th>
              <th scope="col">IS PAID</th>
              <th scope="col"></th>
              {/* <th scope="col">PAID AT</th>  */}

              {/* {info && info.is_service_provider && <th scope="col"></th>} */}
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.unit_order.name}</td>
                <td className="p-3">
                  {order.pending ? (
                    <BsCheck2 className="text-success" />
                  ) : (
                    <RxCross1 className="text-danger" />
                  )}
                </td>
                <td className="p-3">
                  {order.proccess ? (
                    <BsCheck2 className="text-success" />
                  ) : (
                    <RxCross1 className="text-danger" />
                  )}
                </td>
                <td className="p-3">
                  {order.completed ? (
                    <BsCheck2 className="text-success" />
                  ) : (
                    <RxCross1 className="text-danger" />
                  )}
                </td>
                <td className="p-3">${order.unit_order.per_unit_price}</td>
                <td className="p-3">
                  {order.payment_done ? (
                    <BsCheck2 className="text-success" />
                  ) : (
                    <RxCross1 className="text-danger" />
                  )}
                </td>
                {info && info.is_service_provider ? (
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => navigate(`/orders/${order.id}`)}
                    >
                      Details
                    </button>
                  </td>
                ) : (
                  <td></td>
                )}

                {/* {info && info.is_service_provider && (
                  <td className="p-3">
                    <button
                      className="btn btn-dark"
                      onClick={() => deleteOrderHandler(order.id)}
                    >
                      Delete
                    </button>
                  </td>
                )} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeOrdersTable;
