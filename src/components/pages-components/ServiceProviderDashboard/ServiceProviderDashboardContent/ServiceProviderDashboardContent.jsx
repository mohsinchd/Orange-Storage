import React from "react";
import { Routes, Route } from "react-router-dom";
import ServiceProviderDashboardOffcanvas from "../ServiceProviderDashboardOffcanvas/ServiceProviderDashboardOffcanvas";
import AnalyticsPage from "../ServiceProviderDashboardPages/AnalyticsPage";
import OrdersPage from "../ServiceProviderDashboardPages/OrdersPage";
import CustomersPage from "../ServiceProviderDashboardPages/CustomersPage";
import StorageUnitsPage from "../ServiceProviderDashboardPages/StorageUnitsPage";
import StorageUnitDetailsPage from "../ServiceProviderDashboardPages/StorageUnitDetailsPage";
import StorageUnitRoomDetailsPage from "../ServiceProviderDashboardPages/StorageUnitRoomDetailsPage";
import AddNewUnitPage from "../ServiceProviderDashboardPages/AddNewUnitPage";
import AddNewRoomPage from "../ServiceProviderDashboardPages/AddNewRoomPage";
import EditUnitPage from "../ServiceProviderDashboardPages/EditUnitPage";
import EditRoomPage from "../ServiceProviderDashboardPages/EditRoomPage";
import StorageUnitPageAvailable from "../ServiceProviderDashboardPages/StorageUnitPageAvailable";
import StorageUnitPageOccupied from "../ServiceProviderDashboardPages/StorageUnitPageOccupied";

const ServiceProviderDashboardContent = () => {
  return (
    <div className="p-2 fullHeight">
      <ServiceProviderDashboardOffcanvas />
      <Routes>
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/storageUnits" element={<StorageUnitsPage />} />
        <Route
          path="/availableStorageUnits"
          element={<StorageUnitPageAvailable />}
        />
        <Route
          path="/occupiedStorageUnits"
          element={<StorageUnitPageOccupied />}
        />
        <Route path="/analytics/:id" element={<StorageUnitDetailsPage />} />
        <Route
          path="/analytics/rooms/:id"
          element={<StorageUnitRoomDetailsPage />}
        />
        <Route path="/addUnit" element={<AddNewUnitPage />} />
        <Route path="/addUnit/:id" element={<EditUnitPage />} />
        <Route path="/addRoom/:id" element={<AddNewRoomPage />} />
        <Route path="/editRoom/:roomId" element={<EditRoomPage />} />
      </Routes>
    </div>
  );
};

export default ServiceProviderDashboardContent;
