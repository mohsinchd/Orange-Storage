import {
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_REQUEST,
  CURRENT_LOCATION_FAIL,
} from "../constants/locationConstants";
import axios from "axios";

export const currentLocation = (lat, lon) => async (dispatch) => {
  try {
    dispatch({ type: CURRENT_LOCATION_REQUEST });

    const { data } = await axios.get(
      `/v1/reverse?access_key=17fe922104e0045355fdd3d7a5bf36c3&query=${lat},${lon}`
    );

    dispatch({ type: CURRENT_LOCATION_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: CURRENT_LOCATION_FAIL,
      payload:
        error.request && error.request.data
          ? error.request.data
          : error.message,
    });
  }
};
