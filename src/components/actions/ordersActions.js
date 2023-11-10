import axios from "axios";
import {
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
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
  DELETE_ORDERS_ADMIN_REQUEST,
  DELETE_ORDERS_ADMIN_SUCCESS,
  DELETE_ORDERS_ADMIN_FAIL,
  ORDER_DETAILS_ADMIN_FAIL,
  ORDER_DETAILS_ADMIN_REQUEST,
  ORDER_DETAILS_ADMIN_SUCCESS,
  CURRENT_ORDERS_ADMIN_FAIL,
  CURRENT_ORDERS_ADMIN_REQUEST,
  CURRENT_ORDERS_ADMIN_SUCCESS,
  COMPLETED_ORDERS_ADMIN_REQUEST,
  COMPLETED_ORDERS_ADMIN_SUCCESS,
  COMPLETED_ORDERS_ADMIN_FAIL,
  UPDATE_ORDERS_ADMIN_REQUEST,
  UPDATE_ORDERS_ADMIN_SUCCESS,
  UPDATE_ORDERS_ADMIN_FAIL,
} from "../constants/ordersConstants";

import { API_URL } from "./userActions";
import { cartGetItems } from "./cartActions";

export const placeOrder = (orderData) => async (dispatch, getState) => {
  console.log(orderData);

  try {
    dispatch({ type: PLACE_ORDER_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.post(
      `${API_URL}/orders/order-place/`,
      orderData,
      config
    );

    dispatch({ type: PLACE_ORDER_SUCCESS, payload: data });

    dispatch(cartGetItems());
  } catch (error) {
    dispatch({
      type: PLACE_ORDER_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/orders/get-order-user/`,
      config
    );

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET Order Details
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/orders/order/storage/${id}/`,
      config
    );

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.delete(
      `${API_URL}/orders/order/storage/${id}/`,
      config
    );

    let msg = "";
    if (!data) {
      msg = "Deleted Successfully";
    }

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: msg });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// Admin
export const getAllOrdersAdmin = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_ORDERS_ADMIN_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/orders/get-order-admin/`,
      config
    );

    dispatch({ type: ALL_ORDERS_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_ADMIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// Update order admin
export const updateOrderAdmin =
  (id, orderData) => async (dispatch, getState) => {
    try {
      console.log(orderData);
      dispatch({ type: UPDATE_ORDERS_ADMIN_REQUEST });

      const {
        userLogin: { user },
      } = getState();

      const accessToken = user.access;

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await axios.patch(
        `${API_URL}/orders/update-retrieve-order-admin/${id}/`,
        orderData,
        config
      );

      dispatch({ type: UPDATE_ORDERS_ADMIN_SUCCESS, payload: data });

      dispatch(getAllOrdersAdmin());
    } catch (error) {
      dispatch({
        type: UPDATE_ORDERS_ADMIN_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
    }
  };
// Delete Order Admin
export const deleteOrderAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_ORDERS_ADMIN_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.delete(
      `${API_URL}/orders/order/admin_storage/${id}/`,
      config
    );

    let msg = "";
    if (!data) {
      msg = "Deleted Successfully";
    }

    dispatch({ type: DELETE_ORDERS_ADMIN_SUCCESS, payload: msg });

    dispatch(getAllOrdersAdmin());
  } catch (error) {
    dispatch({
      type: DELETE_ORDERS_ADMIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET Admin Orders Details
export const getOrderDetailsAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_ADMIN_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/orders/update-retrieve-order-admin/${id}/`,
      config
    );

    dispatch({ type: ORDER_DETAILS_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_ADMIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// Get current orders admin
export const getCurrentOrdersAdmin = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CURRENT_ORDERS_ADMIN_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/orders/admin-current-orders/`,
      config
    );

    dispatch({ type: CURRENT_ORDERS_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CURRENT_ORDERS_ADMIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// Get completed Orders
export const getCompletedOrdersAdmin = () => async (dispatch, getState) => {
  try {
    dispatch({ type: COMPLETED_ORDERS_ADMIN_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `${API_URL}/orders/admin-completed-orders/`,
      config
    );

    dispatch({ type: COMPLETED_ORDERS_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMPLETED_ORDERS_ADMIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
