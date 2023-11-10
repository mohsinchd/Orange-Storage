import {
  GET_ALL_STORAGE_UNITS_REQUEST,
  GET_ALL_STORAGE_UNITS_SUCCESS,
  GET_ALL_STORAGE_UNITS_FAIL,
  GET_SINGLE_STORAGE_UNITS_FAIL,
  GET_SINGLE_STORAGE_UNITS_REQUEST,
  GET_SINGLE_STORAGE_UNITS_SUCCESS,
  GET_TOTAL_STORAGE_UNITS_FAIL,
  GET_TOTAL_STORAGE_UNITS_REQUEST,
  GET_TOTAL_STORAGE_UNITS_SUCCESS,
  GET_AVAILABLE_STORAGE_UNITS_REQUEST,
  GET_AVAILABLE_STORAGE_UNITS_SUCCESS,
  GET_AVAILABLE_STORAGE_UNITS_FAIL,
  GET_OCCUPIED_STORAGE_UNITS_REQUEST,
  GET_OCCUPIED_STORAGE_UNITS_SUCCESS,
  GET_OCCUPIED_STORAGE_UNITS_FAIL,
  CREATE_STORAGE_UNIT_REQUEST,
  CREATE_STORAGE_UNIT_SUCCESS,
  CREATE_STORAGE_UNIT_FAIL,
  DELETE_STORAGE_UNIT_REQUEST,
  DELETE_STORAGE_UNIT_SUCCESS,
  DELETE_STORAGE_UNIT_FAIL,
  UPDATE_STORAGE_UNIT_REQUEST,
  UPDATE_STORAGE_UNIT_SUCCESS,
  UPDATE_STORAGE_UNIT_FAIL,
} from "../constants/storageUnitConstants";

import { API_URL } from "./userActions";
import axios from "axios";

// GET ALL STORAGE UNITS (SERVICE PROVIDER)
export const getAllStorageUnits = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_STORAGE_UNITS_REQUEST });

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
      `${API_URL}/units/storage/storage_facility/`,
      config
    );

    dispatch({ type: GET_ALL_STORAGE_UNITS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_STORAGE_UNITS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET SINGLE STORAGE UNITS (SERVICE PROVIDER)
export const getSingleStorageUnit = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SINGLE_STORAGE_UNITS_REQUEST });

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
      `${API_URL}/units/storage/storage_facility/${id}/`,
      config
    );

    dispatch({ type: GET_SINGLE_STORAGE_UNITS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_STORAGE_UNITS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// CREATE NEW STORAGE UNIT (SERVICE PROVIDER)
export const createStorageUnit = (unitData) => async (dispatch, getState) => {
  console.log(unitData);
  try {
    dispatch({ type: CREATE_STORAGE_UNIT_REQUEST });

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
      `${API_URL}/units/storage/storage_facility/`,
      unitData,
      config
    );

    dispatch({ type: CREATE_STORAGE_UNIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_STORAGE_UNIT_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// UPDATE  STORAGE UNIT (SERVICE PROVIDER)
export const updateStorageUnit =
  (id, unitData) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_STORAGE_UNIT_REQUEST });

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
        `${API_URL}/units/storage/storage_facility/${id}/`,
        unitData,
        config
      );

      dispatch({ type: UPDATE_STORAGE_UNIT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_STORAGE_UNIT_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
    }
  };

// DELETE STORAGE UNIT (SERVICE PROVIDER)
export const deleteStorageUnit = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_STORAGE_UNIT_REQUEST });

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
      `${API_URL}/units/storage/storage_facility/${id}/`,
      config
    );

    dispatch({ type: DELETE_STORAGE_UNIT_SUCCESS });
    dispatch(getAllStorageUnits());
  } catch (error) {
    dispatch({
      type: DELETE_STORAGE_UNIT_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET TOTAL STORAGE UNITS (SERVICE PROVIDER)
export const getTotalStorageUnits = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TOTAL_STORAGE_UNITS_REQUEST });

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
      `${API_URL}/units/total-storage-unit/`,
      config
    );

    dispatch({ type: GET_TOTAL_STORAGE_UNITS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TOTAL_STORAGE_UNITS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET AVAILABLE STORAGE UNITS (SERVICE PROVIDER)
export const getAvailableStorageUnits = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_AVAILABLE_STORAGE_UNITS_REQUEST });

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
      `${API_URL}/units/available-storage-unit/`,
      config
    );

    dispatch({ type: GET_AVAILABLE_STORAGE_UNITS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_AVAILABLE_STORAGE_UNITS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET OCCUPIED STORAGE UNITS (SERVICE PROVIDER)
export const getOccupiedStorageUnits = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_OCCUPIED_STORAGE_UNITS_REQUEST });

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
      `${API_URL}/units/occupied-storage-unit/`,
      config
    );

    dispatch({ type: GET_OCCUPIED_STORAGE_UNITS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_OCCUPIED_STORAGE_UNITS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
