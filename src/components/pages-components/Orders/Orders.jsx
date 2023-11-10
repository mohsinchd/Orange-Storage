import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../shared-components/container/Container";
import HomeOrdersTable from "../Home/HomeOrdersTable/HomeOrdersTable";
import Spinner from "../../shared-components/Spinner/Spinner";
import { getAllOrders } from "../../actions/ordersActions";

const Orders = () => {
  const { loading, orders } = useSelector((state) => state.allOrders);

  const dispatch = useDispatch();

  // Side Effects
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div className="py-5">
      <Container>
        <h1>
          My <span className="mineTextOrange">Orders</span>
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {orders.length === 0 ? (
              <h5 className="text-center">You have no Orders</h5>
            ) : (
              <>
                <HomeOrdersTable orders={orders} />
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Orders;
