import {
  GET_SERVICE_PROVIDER_FAIL,
  GET_SERVICE_PROVIDER_SUCCESS,
  GET_SERVICE_PROVIDER_REQUEST,
  CREATE_SERVICE_PROVIDER_REQUEST,
  CREATE_SERVICE_PROVIDER_SUCCESS,
  CREATE_SERVICE_PROVIDER_FAIL,
  UPDATE_SERVICE_PROVIDER_REQUEST,
  UPDATE_SERVICE_PROVIDER_SUCCESS,
  UPDATE_SERVICE_PROVIDER_FAIL,
} from "../constants/serviceProviderConstants";

import axios from "axios";
import { API_URL, refreshTokens } from "./userActions";

// GET ALL SERVICE PROVIDERS
export const getAllServiceProviders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SERVICE_PROVIDER_REQUEST });

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
      `${API_URL}/providers/service/storage_unit_provider/`,
      config
    );

    dispatch({ type: GET_SERVICE_PROVIDER_SUCCESS, payload: data.results[0] });
    sessionStorage.setItem("serviceProvider", JSON.stringify(data.results[0]));
  } catch (error) {
    dispatch({
      type: GET_SERVICE_PROVIDER_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// CREATE NEW SERVICE PROVIDER
export const createServiceProviders =
  (serviceProviderData) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_SERVICE_PROVIDER_REQUEST });

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
        `${API_URL}/providers/service/storage_unit_provider/`,
        serviceProviderData,
        config
      );

      dispatch({ type: CREATE_SERVICE_PROVIDER_SUCCESS, payload: data });
      dispatch(refreshTokens());
    } catch (error) {
      dispatch({
        type: CREATE_SERVICE_PROVIDER_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
    }
  };

// UPDATE SERVICE PROVIDER
export const updateServiceProviders =
  (serviceProviderData, id) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_SERVICE_PROVIDER_REQUEST });

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
        `${API_URL}/providers/service/storage_unit_provider/${id}/`,
        serviceProviderData,
        config
      );

      dispatch({ type: UPDATE_SERVICE_PROVIDER_SUCCESS, payload: data });
      dispatch(getAllServiceProviders());
    } catch (error) {
      dispatch({
        type: UPDATE_SERVICE_PROVIDER_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
    }
  };
