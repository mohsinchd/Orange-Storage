import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GiOrange } from "react-icons/gi";
import ServiceProviderDashboardSidebar from "../ServiceProviderDashboardSidebar/ServiceProviderDashboardSidebar";

const ServiceProviderDashboardOffcanvas = () => {
  return (
    <div>
      {/* <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button> */}

      <div className="d-flex justify-content-between align-items-center d-block d-lg-none">
        <div
          className="p-3 bg-orange text-light rounded pointer"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <RxHamburgerMenu size={30} />
        </div>
        <h5 className="text-muted text-uppercase">Dashboard</h5>
        <div>
          <Link
            to="/service-provider-dashboard/addUnit"
            className="btn btn-dark"
          >
            Add new unit
          </Link>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <span className="mineTextOrange">
              <GiOrange />
              range
            </span>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ServiceProviderDashboardSidebar />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDashboardOffcanvas;
