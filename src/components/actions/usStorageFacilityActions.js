import axios from "axios";
import {
  GET_ALL_STORAGE_FACILTIES_REQUEST,
  GET_ALL_STORAGE_FACILTIES_SUCCESS,
  GET_ALL_STORAGE_FACILTIES_FAIL,
  GET_STORAGE_FACILTIES_DETAILS_REQUEST,
  GET_STORAGE_FACILTIES_DETAILS_SUCCESS,
  GET_STORAGE_FACILTIES_DETAILS_FAIL,
} from "../constants/usStorageFacilityConstants";
import { API_URL } from "./userActions";

// GET ALL STORAGE FACILITIES
export const getAllUsStorageFacilities = (options) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_STORAGE_FACILTIES_REQUEST });

    console.log(options);

    const { data } = await axios.get(
      `${API_URL}/units/public-storage-facility/?storage_type=${options.storage_type}&location=${options.location}&small_size=${options.small_size}&medium_size=${options.medium_size}&large_size=${options.large_size}`
    );

    dispatch({
      type: GET_ALL_STORAGE_FACILTIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_STORAGE_FACILTIES_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET SINGLE STORAGE FACILITY
export const getUsStorageFacilityDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_STORAGE_FACILTIES_DETAILS_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/units/public-storage-facility/${id}/`
    );

    dispatch({
      type: GET_STORAGE_FACILTIES_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STORAGE_FACILTIES_DETAILS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
