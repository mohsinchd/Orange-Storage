import {
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_REQUEST,
  CURRENT_LOCATION_FAIL,
} from "../constants/locationConstants";

export const currentLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_LOCATION_REQUEST:
      return { loading: true };
    case CURRENT_LOCATION_SUCCESS:
      return { loading: false, location: action.payload };
    case CURRENT_LOCATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
