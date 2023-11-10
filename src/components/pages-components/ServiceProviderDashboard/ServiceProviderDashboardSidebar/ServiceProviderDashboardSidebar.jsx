import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAnalytics } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaWarehouse } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";

const ServiceProviderDashboardSidebar = () => {
  //
  return (
    <div className="h-100 bg-light p-3 fullHeight">
      <div className="mb-2">
        <h5 className="text-muted text-uppercase">Dashboard</h5>
        <NavLink
          to="/service-provider-dashboard/analytics"
          className={({ isActive, isPending }) =>
            isPending
              ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
              : isActive
              ? "d-flex text-light nav-link bg-orange p-3 rounded align-items-center justify-content-between"
              : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
          }
        >
          <MdOutlineAnalytics size={30} />
          <h6 className="m-0">Analytics</h6>
        </NavLink>
      </div>

      <div className="mb-2">
        <h5 className="text-muted text-uppercase">Pages</h5>

        <NavLink
          to="/service-provider-dashboard/storageUnits"
          className={({ isActive, isPending }) =>
            isPending
              ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
              : isActive
              ? "d-flex text-light nav-link bg-orange p-3 rounded align-items-center justify-content-between"
              : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
          }
        >
          <FaWarehouse size={30} />
          <h6 className="m-0">Storage Units</h6>
        </NavLink>

        <NavLink
          to="/service-provider-dashboard/orders"
          className={({ isActive, isPending }) =>
            isPending
              ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
              : isActive
              ? "d-flex text-light nav-link bg-orange p-3 rounded align-items-center justify-content-between"
              : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
          }
        >
          <CiShoppingCart size={30} />
          <h6 className="m-0">Orders</h6>
        </NavLink>

        <NavLink
          to="/service-provider-dashboard/customers"
          className={({ isActive, isPending }) =>
            isPending
              ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
              : isActive
              ? "d-flex text-light nav-link bg-orange p-3 rounded align-items-center justify-content-between"
              : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
          }
        >
          <TbUsers size={30} />
          <h6 className="m-0">Customers</h6>
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceProviderDashboardSidebar;
