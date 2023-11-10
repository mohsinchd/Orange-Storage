import React from "react";
import { Link } from "react-router-dom";
import { SiVirustotal } from "react-icons/si";

const AnalyticsSpaceCards = ({ totalUnits, availableUnits, occupiedUnits }) => {
  return (
    <>
      <div className="col-md-4 mb-2">
        <Link
          to="/service-provider-dashboard/storageUnits"
          className="card bg-gradient-1 text-light p-3 h-100 nav-link "
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Total Units</h3>
              <span>
                <SiVirustotal size={20} />
              </span>
            </div>
            <div className="mt-2">
              <h5>{totalUnits.count} Storage Units</h5>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mb-2">
        <Link
          to="/service-provider-dashboard/availableStorageUnits"
          className="card bg-gradient-2  text-light p-3 h-100 nav-link"
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Available Units</h3>
              <span>
                <SiVirustotal size={20} />
              </span>
            </div>
            <div className="mt-2">
              <h5>{availableUnits.count} Storage Units</h5>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mb-2">
        <Link
          to="/service-provider-dashboard/occupiedStorageUnits"
          className="card bg-gradient-3 text-light p-3 h-100 nav-link"
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Occupied Units</h3>
              <span>
                <SiVirustotal size={20} />
              </span>
            </div>
            <div className="mt-2">
              <h5>{occupiedUnits.count} Storage Units</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AnalyticsSpaceCards;
