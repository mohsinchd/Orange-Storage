import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_GET_ITEM_REQUEST,
  CART_GET_ITEM_SUCCESS,
  CART_GET_ITEM_FAIL,
  CART_UPDATE_ITEM_REQUEST,
  CART_UPDATE_ITEM_SUCCESS,
  CART_UPDATE_ITEM_FAIL,
} from "../constants/cartConstants";
import axios from "axios";
import { API_URL } from "./userActions";

export const addItemsToCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ADD_ITEM_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let body = {
      storage_unit_ids: id,
    };

    const { data } = await axios.post(
      `${API_URL}/orders/add-to-cart/`,
      body,
      config
    );

    dispatch({ type: CART_ADD_ITEM_SUCCESS, payload: data });
    dispatch(cartGetItems());
  } catch (error) {
    dispatch({
      type: CART_ADD_ITEM_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const cartGetItems = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_GET_ITEM_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/orders/add-to-cart/`, config);

    dispatch({ type: CART_GET_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CART_GET_ITEM_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const cartUpdateItems = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_UPDATE_ITEM_REQUEST });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let body = {
      storage_unit_ids: id,
    };

    const { data } = await axios.put(
      `${API_URL}/orders/add-to-cart/`,
      body,
      config
    );

    dispatch({ type: CART_UPDATE_ITEM_SUCCESS, payload: data });

    dispatch(cartGetItems());
  } catch (error) {
    dispatch({
      type: CART_UPDATE_ITEM_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const removeItems = (id) => async (dispatch, getState) => {};

export const clearCartItems = () => (dispatch, getState) => {};
