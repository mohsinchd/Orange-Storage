import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import AnalyticsSpaceCards from "../ServiceProviderDashboardComponents/AnalyticsSpaceCards";
import AnalyticsMapAndChart from "../ServiceProviderDashboardComponents/AnalyticsMapAndChart";
import AnalyticsOrdersTable from "../ServiceProviderDashboardComponents/AnalyticsOrdersTable";
import AnalyticsRecentUnitsAndChart from "../ServiceProviderDashboardComponents/AnalyticsRecentUnitsAndChart";
import AnalyticsReviewsTableAndUnitStatus from "../ServiceProviderDashboardComponents/AnalyticsReviewsTableAndUnitStatus";
import Spinner from "../../../shared-components/Spinner/Spinner";

import {
  getAllStorageUnits,
  getTotalStorageUnits,
  getAvailableStorageUnits,
  getOccupiedStorageUnits,
} from "../../../actions/storageUnitActions";
import { getAllOrdersAdmin } from "../../../actions/ordersActions";

const AnalyticsPage = () => {
  const dispatch = useDispatch();

  const { loading, storageUnits } = useSelector(
    (state) => state.getAllStorageUnits
  );

  const {
    loading: ordersLoading,
    orders,
    error,
  } = useSelector((state) => state.allOrdersAdmin);

  const { loading: totalLoading, storageUnits: totalUnits } = useSelector(
    (state) => state.getTotalStorageUnit
  );
  const { loading: availableLoading, availableStorageUnits } = useSelector(
    (state) => state.getAvailableStorageUnit
  );
  const { loading: occupiedLoading, occupiedStorageUnits } = useSelector(
    (state) => state.getOccupiedStorageUnit
  );

  // Side Effects
  useEffect(() => {
    dispatch(getAllStorageUnits());
    dispatch(getTotalStorageUnits());
    dispatch(getAvailableStorageUnits());
    dispatch(getOccupiedStorageUnits());
    dispatch(getAllOrdersAdmin());
  }, [dispatch]);

  return (
    <div className="mt-3">
      <div className="align-items-center d-none d-lg-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="p-2 bg-orange text-light rounded me-2">
            <AiOutlineHome size={20} />
          </div>
          <h5 className="text-uppercase">Dashboard</h5>
        </div>
        <div>
          <Link
            to="/service-provider-dashboard/addUnit"
            className="btn btn-dark"
          >
            Add new facility
          </Link>
        </div>
      </div>

      {loading ||
      totalLoading ||
      availableLoading ||
      occupiedLoading ||
      ordersLoading ? (
        <Spinner />
      ) : storageUnits.results.length === 0 ? (
        <h3 className="text-center">You Don't have any facility stores.</h3>
      ) : (
        <>
          <div className="row gx-4 mt-4">
            <AnalyticsSpaceCards
              totalUnits={totalUnits}
              availableUnits={availableStorageUnits}
              occupiedUnits={occupiedStorageUnits}
            />
          </div>

          <div className="row gx-4 mt-4">
            <AnalyticsMapAndChart
              StorageUnitData={storageUnits.results}
              loading={loading}
            />
          </div>

          <div className="row gx-4 mt-4">
            <AnalyticsRecentUnitsAndChart
              StorageUnitData={storageUnits.results}
            />
          </div>

          <div className="row gx-4 mt-4">
            <AnalyticsReviewsTableAndUnitStatus
              StorageUnitData={storageUnits.results}
            />
          </div>

          <div className="row mt-4">
            <AnalyticsOrdersTable orders={orders} />
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsPage;
