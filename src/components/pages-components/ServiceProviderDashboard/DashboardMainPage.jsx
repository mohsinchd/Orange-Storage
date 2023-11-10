import React from "react";
import ServiceProviderDashboardSidebar from "./ServiceProviderDashboardSidebar/ServiceProviderDashboardSidebar";
import ServiceProviderDashboardContent from "./ServiceProviderDashboardContent/ServiceProviderDashboardContent";

const DashboardMainPage = () => {
  return (
    <div className="row">
      <div className="col-2 d-none d-lg-block bg-light">
        <ServiceProviderDashboardSidebar />
      </div>
      <div
        className="col-lg-10 col-12"
        style={{
          backgroundColor: "#f2edf3",
        }}
      >
        <div className="container-fluid p-3">
          <ServiceProviderDashboardContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainPage;
