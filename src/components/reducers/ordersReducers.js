import {
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  ALL_ORDERS_ADMIN_FAIL,
  ALL_ORDERS_ADMIN_REQUEST,
  ALL_ORDERS_ADMIN_SUCCESS,
  DELETE_ORDERS_ADMIN_FAIL,
  DELETE_ORDERS_ADMIN_REQUEST,
  DELETE_ORDERS_ADMIN_SUCCESS,
  ORDER_DETAILS_ADMIN_FAIL,
  ORDER_DETAILS_ADMIN_REQUEST,
  ORDER_DETAILS_ADMIN_SUCCESS,
  ORDER_DETAILS_RESET,
  ORDER_DETAILS_ADMIN_RESET,
  CURRENT_ORDERS_ADMIN_FAIL,
  CURRENT_ORDERS_ADMIN_REQUEST,
  CURRENT_ORDERS_ADMIN_SUCCESS,
  COMPLETED_ORDERS_ADMIN_REQUEST,
  COMPLETED_ORDERS_ADMIN_SUCCESS,
  COMPLETED_ORDERS_ADMIN_FAIL,
  UPDATE_ORDERS_ADMIN_REQUEST,
  UPDATE_ORDERS_ADMIN_SUCCESS,
  UPDATE_ORDERS_ADMIN_FAIL,
  UPDATE_ORDERS_ADMIN_RESET,
} from "../constants/ordersConstants";

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { loading: true };
    case PLACE_ORDER_SUCCESS:
      return { loading: false, order: action.payload };
    case PLACE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case PLACE_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailsAdminReducer = (
  state = { loading: true, order: null, error: null },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_ADMIN_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_ADMIN_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_DETAILS_ADMIN_RESET:
      return {};
    default:
      return state;
  }
};

export const allOrdersReducer = (
  state = { loading: true, orders: null },
  action
) => {
  switch (action.type) {
    case ALL_ORDERS_REQUEST:
      return { loading: true };
    case ALL_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case ALL_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ORDER_REQUEST:
      return { loading: true };
    case DELETE_ORDER_SUCCESS:
      return { loading: false, msg: action.payload };
    case DELETE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allOrdersAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_ORDERS_ADMIN_REQUEST:
      return { loading: true };
    case ALL_ORDERS_ADMIN_SUCCESS:
      return { loading: false, orders: action.payload };
    case ALL_ORDERS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateOrderAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDERS_ADMIN_REQUEST:
      return { loading: true };
    case UPDATE_ORDERS_ADMIN_SUCCESS:
      return { loading: false, order: action.payload };
    case UPDATE_ORDERS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_ORDERS_ADMIN_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteOrderAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ORDERS_ADMIN_REQUEST:
      return { loading: true };
    case DELETE_ORDERS_ADMIN_SUCCESS:
      return { loading: false, msg: action.payload };
    case DELETE_ORDERS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const currentOrdersAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_ORDERS_ADMIN_REQUEST:
      return { loading: true };
    case CURRENT_ORDERS_ADMIN_SUCCESS:
      return { loading: false, orders: action.payload };
    case CURRENT_ORDERS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const completedOrdersAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLETED_ORDERS_ADMIN_REQUEST:
      return { loading: true };
    case COMPLETED_ORDERS_ADMIN_SUCCESS:
      return { loading: false, orders: action.payload };
    case COMPLETED_ORDERS_ADMIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
