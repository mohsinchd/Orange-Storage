import React from "react";
import HomeOrdersTable from "../../Home/HomeOrdersTable/HomeOrdersTable";
// import dummyOrders from "../../../../dummyOrders";

const AnalyticsOrdersTable = ({ orders }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="mb-3">Recent Orders</h5>
        {orders ? <HomeOrdersTable orders={orders} /> : <h3>No Orders.</h3>}
      </div>
    </div>
  );
};

export default AnalyticsOrdersTable;
