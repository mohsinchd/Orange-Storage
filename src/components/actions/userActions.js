import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_RESET,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_EMAIL_UPDATE_FAIL,
  USER_EMAIL_UPDATE_REQUEST,
  USER_EMAIL_UPDATE_SUCCESS,
  USER_PASSWORD_UPDATE_REQUEST,
  USER_PASSWORD_UPDATE_SUCCESS,
  USER_PASSWORD_UPDATE_FAIL,
} from "../constants/userConstants";
import jwt_decode from "jwt-decode";
import axios from "axios";

import { cartGetItems } from "./cartActions";

// Register User
export const API_URL = "https://tags-ltd.com/app";
axios.defaults.withCredentials = true;

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post(`${API_URL}/auth/register/`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

// Login User
export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${API_URL}/auth/login/`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { user_id } = jwt_decode(data.access);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    dispatch(userInfo(user_id));
    dispatch(cartGetItems());
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

// Logout user
export const logoutUser = (serviceProvider) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;
    const refresh_token = user.refresh;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.post(
      `${API_URL}/auth/logout/`,
      { refresh_token },
      config
    );

    if (!serviceProvider) {
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: data.msg,
      });
    }

    dispatch({
      type: USER_LOGIN_RESET,
    });

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

// USER INFORMATION
export const userInfo = (userId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_INFO_REQUEST,
    });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    console.log(userId);

    const { data } = await axios.get(
      `${API_URL}/auth/viewuser/${userId}`,
      config
    );

    dispatch({
      type: USER_INFO_SUCCESS,
      payload: data,
    });

    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_INFO_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

// Login User
export const refreshTokens = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;
    const refreshToken = user.refresh;
    const serviceProvider = user.service_provider;
    const isProviderVerified = user.is_provider_verified;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.post(
      `${API_URL}/auth/token/refresh/`,
      { refresh: refreshToken },
      config
    );

    const newData = {
      ...data,
      refresh: refreshToken,
      service_provider: serviceProvider,
      is_provider_verified: isProviderVerified,
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: newData,
    });

    sessionStorage.setItem("user", JSON.stringify(newData));
  } catch (error) {
    dispatch(logoutUser());
  }
};

export const forgotPassword = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const { data } = await axios.post(
      `${API_URL}/auth/resetpassword/`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const updateUserEmail = (email) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_EMAIL_UPDATE_REQUEST,
    });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { user_id } = jwt_decode(accessToken);

    const { data } = await axios.put(
      `${API_URL}/auth/update_user/${user_id}/`,
      email,
      config
    );

    dispatch({
      type: USER_EMAIL_UPDATE_SUCCESS,
      payload: data.msg,
    });

    dispatch(userInfo(user_id));
  } catch (error) {
    dispatch({
      type: USER_EMAIL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.authorize
          ? error.response.data.authorize
          : error.message,
    });
  }
};

export const updateUserPassword = (password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PASSWORD_UPDATE_REQUEST,
    });

    const {
      userLogin: { user },
    } = getState();

    const accessToken = user.access;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { user_id } = jwt_decode(accessToken);

    const { data } = await axios.put(
      `${API_URL}/auth/change_password/${user_id}/`,
      password,
      config
    );

    dispatch({
      type: USER_PASSWORD_UPDATE_SUCCESS,
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_UPDATE_FAIL,
      payload: error.message,
    });
  }
};
