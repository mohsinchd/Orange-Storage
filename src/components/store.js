import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Reducers Import
import {
  userEmailUpdateReducer,
  userForgotPasswordReducer,
  userInfoReducer,
  userLoginReducer,
  userLogoutReducer,
  userPasswordUpdateReducer,
  userRegisterReducer,
} from "./reducers/userReducers";

import {
  allOrdersAdminReducer,
  allOrdersReducer,
  completedOrdersAdminReducer,
  currentOrdersAdminReducer,
  deleteOrderAdminReducer,
  deleteOrderReducer,
  orderDetailsAdminReducer,
  orderDetailsReducer,
  placeOrderReducer,
  updateOrderAdminReducer,
} from "./reducers/ordersReducers";
import {
  createStorageUnitReducer,
  deleteStorageUnitReducer,
  getAllStorageUnitsReducer,
  getAvailableStorageUnitReducer,
  getOccupiedStorageUnitReducer,
  getSingleStorageUnitReducer,
  getTotalStorageUnitReducer,
  updateStorageUnitReducer,
} from "./reducers/storageUnitReducers";
import {
  createServiceProviderReducer,
  getServiceProviderReducer,
  updateServiceProviderReducer,
} from "./reducers/serviceProviderReducers";
import {
  createRoomsReducer,
  deleteRoomReducer,
  getAllRoomsOfSpecificUnitReducer,
  getSingleRoomReducer,
  updateRoomsReducer,
} from "./reducers/roomsReducers";
import {
  cartAddItemsReducer,
  cartGetItemsReducer,
  cartUpdateItemsReducer,
} from "./reducers/cartReducers";
import {
  getAllStorageFacilitiesReducer,
  getStorageFacilityDetailsReducer,
} from "./reducers/usStorageFacilityReducers";

const reducers = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userLogout: userLogoutReducer,
  userInfo: userInfoReducer,
  userEmailUpdate: userEmailUpdateReducer,
  userPasswordUpdate: userPasswordUpdateReducer,
  userForgotPassword: userForgotPasswordReducer,
  placeOrder: placeOrderReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  deleteOrder: deleteOrderReducer,
  allOrdersAdmin: allOrdersAdminReducer,
  deleteOrdersAdmin: deleteOrderAdminReducer,
  updateOrderAdmin: updateOrderAdminReducer,
  orderDetailsAdmin: orderDetailsAdminReducer,
  currentOrdersAdmin: currentOrdersAdminReducer,
  completedOrdersAdmin: completedOrdersAdminReducer,
  getAllStorageUnits: getAllStorageUnitsReducer,
  getSingleStorageUnit: getSingleStorageUnitReducer,
  getTotalStorageUnit: getTotalStorageUnitReducer,
  getAvailableStorageUnit: getAvailableStorageUnitReducer,
  getOccupiedStorageUnit: getOccupiedStorageUnitReducer,
  getServiceProvider: getServiceProviderReducer,
  createServiceProvider: createServiceProviderReducer,
  updateServiceProvider: updateServiceProviderReducer,
  createStorageUnit: createStorageUnitReducer,
  deleteStorageUnit: deleteStorageUnitReducer,
  updateStorageUnit: updateStorageUnitReducer,
  createRooms: createRoomsReducer,
  deleteRoom: deleteRoomReducer,
  getSingleRoom: getSingleRoomReducer,
  getAllRoomsOfSpecificUnit: getAllRoomsOfSpecificUnitReducer,
  updateRoom: updateRoomsReducer,
  cartAddItem: cartAddItemsReducer,
  cartGetItems: cartGetItemsReducer,
  cartUpdateItems: cartUpdateItemsReducer,
  usStorageFacilities: getAllStorageFacilitiesReducer,
  usStorageFacilityDetails: getStorageFacilityDetailsReducer,
});

// GET ITEMS FROM LOCAL STORAGE
const userFromStorage = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : null;

const userInfoFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : null;

const serviceProviderFromStorage = sessionStorage.getItem("serviceProvider")
  ? JSON.parse(sessionStorage.getItem("serviceProvider"))
  : null;

// initial State
const initialState = {
  userLogin: {
    user: userFromStorage,
  },
  userInfo: {
    info: userInfoFromStorage,
  },
  getServiceProvider: {
    serviceProvider: serviceProviderFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
