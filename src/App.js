import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SignIn from "./components/pages-components/auth/signIn/SignIn";
import SignUp from "./components/pages-components/auth/signUp/SignUp";
import Navbar from "./components/shared-components/Navbar/Navbar";
import Home from "./components/pages-components/Home/Home";
import Footer from "./components/shared-components/footer/Footer";
import MyProfile from "./components/pages-components/Profile/MyProfile";
import Checkout from "./components/pages-components/Checkout/Checkout";
import Storages from "./components/pages-components/StorageUnits/Storages/Storages";
import ProtectedRoute from "./components/pages-components/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/pages-components/NotFound/NotFound";
import ForgotPassword from "./components/pages-components/auth/forgotPassword/ForgotPassword";
import Orders from "./components/pages-components/Orders/Orders";
import OrdersDetails from "./components/pages-components/Orders/OrdersDetails/OrdersDetails";
import StorageProviderSignUp from "./components/pages-components/auth/StorageProviderSignUp/StorageProviderSignUp";
import DashboardMainPage from "./components/pages-components/ServiceProviderDashboard/DashboardMainPage";
import ServiceProviderDetails from "./components/pages-components/auth/serviceProviderDetails/ServiceProviderDetails";
import ClimateControl from "./components/pages-components/StorageTypes/ClimateControl/ClimateControl";
import Commercial from "./components/pages-components/StorageTypes/Commercial/Commercial";
import Outdoor from "./components/pages-components/StorageTypes/Outdoor/Outdoor";
import Vehicle from "./components/pages-components/StorageTypes/Vehicle/Vehicle";

import { ToastContainer } from "react-toastify";
import { refreshTokens } from "./components/actions/userActions";
import "react-toastify/dist/ReactToastify.css";

import AnalyticsPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/AnalyticsPage";
import OrdersPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/OrdersPage";
import CustomersPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/CustomersPage";
import StorageUnitsPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/StorageUnitsPage";
import StorageUnitDetailsPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/StorageUnitDetailsPage";
import StorageUnitRoomDetailsPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/StorageUnitRoomDetailsPage";
import AddNewUnitPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/AddNewUnitPage";
import AddNewRoomPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/AddNewRoomPage";
import EditUnitPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/EditUnitPage";
import EditRoomPage from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/EditRoomPage";
import ServiceProviderDetailsUpdate from "./components/pages-components/auth/serviceProviderDetails/ServiceProviderDetailsUpdate";
import StorageUnitPageAvailable from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/StorageUnitPageAvailable";
import StorageUnitPageOccupied from "./components/pages-components/ServiceProviderDashboard/ServiceProviderDashboardPages/StorageUnitPageOccupied";
import StorageDetails from "./components/pages-components/StorageUnits/StorageDetails/StorageDetails";
import Cart from "./components/pages-components/Cart/Cart";

const App = () => {
  const { user } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  let accessToken = user && user.access ? user.access : "";
  console.log(accessToken);

  useEffect(() => {
    let interval = setInterval(() => {
      if (accessToken) {
        dispatch(refreshTokens());
        console.log("Hello worlds");
      }
    }, 2 * 60000);

    return () => clearInterval(interval);
  }, [accessToken]);

  return (
    <>
      <Router>
        <Navbar />
        <main style={{ marginTop: "6rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/storages/results" element={<Storages />} />
            <Route path="/storages/results/:id" element={<StorageDetails />} />
            <Route
              path="/storage/climate-controlled-storage"
              element={<ClimateControl />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/storage/drive-up-storage" element={<Outdoor />} />
            <Route path="/storage/vehicle-storage" element={<Vehicle />} />
            <Route path="/storage/business-storage" element={<Commercial />} />
            <Route path="/myprofile" element={<ProtectedRoute />}>
              <Route path="/myprofile" element={<MyProfile />} />
            </Route>
            <Route
              path="/provider-details-verification"
              element={<ProtectedRoute />}
            >
              <Route
                path="/provider-details-verification"
                element={<ServiceProviderDetails />}
              />
            </Route>
            <Route
              path="/service-provider-verification/update/:id"
              element={<ProtectedRoute />}
            >
              <Route
                path="/service-provider-verification/update/:id"
                element={<ServiceProviderDetailsUpdate />}
              />
            </Route>
            <Route path="/checkout" element={<ProtectedRoute />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/orders" element={<ProtectedRoute />}>
              <Route path="/orders" element={<Orders />} />
            </Route>
            <Route path="/orders/:id" element={<ProtectedRoute />}>
              <Route path="/orders/:id" element={<OrdersDetails />} />
            </Route>
            <Route
              path="/sign-up-storage-provider"
              element={<StorageProviderSignUp />}
            />
            <Route
              path="/service-provider-dashboard"
              element={<ProtectedRoute />}
            >
              <Route
                path="/service-provider-dashboard"
                element={<DashboardMainPage />}
              >
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="customers" element={<CustomersPage />} />
                <Route path="storageUnits" element={<StorageUnitsPage />} />
                <Route
                  path="availableStorageUnits"
                  element={<StorageUnitPageAvailable />}
                />
                <Route
                  path="occupiedStorageUnits"
                  element={<StorageUnitPageOccupied />}
                />
                <Route
                  path="analytics/:id"
                  element={<StorageUnitDetailsPage />}
                />
                <Route
                  path="analytics/rooms/:id"
                  element={<StorageUnitRoomDetailsPage />}
                />
                <Route path="addUnit" element={<AddNewUnitPage />} />
                <Route path="addUnit/:id" element={<EditUnitPage />} />
                <Route path="addRoom/:id" element={<AddNewRoomPage />} />
                <Route path="editRoom/:roomId" element={<EditRoomPage />} />
              </Route>
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

// app.js

// 64.07018003781928
// lat
// -145.73151548817387 long
// location to
