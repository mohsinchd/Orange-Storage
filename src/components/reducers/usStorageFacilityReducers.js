import {
  GET_ALL_STORAGE_FACILTIES_REQUEST,
  GET_ALL_STORAGE_FACILTIES_SUCCESS,
  GET_ALL_STORAGE_FACILTIES_FAIL,
  GET_STORAGE_FACILTIES_DETAILS_REQUEST,
  GET_STORAGE_FACILTIES_DETAILS_SUCCESS,
  GET_STORAGE_FACILTIES_DETAILS_FAIL,
} from "../constants/usStorageFacilityConstants";

export const getAllStorageFacilitiesReducer = (
  state = { loading: true, storageFacilties: { results: [] }, error: {} },
  action
) => {
  switch (action.type) {
    case GET_ALL_STORAGE_FACILTIES_REQUEST:
      return { loading: true };
    case GET_ALL_STORAGE_FACILTIES_SUCCESS:
      return { loading: false, storageFacilties: action.payload };
    case GET_ALL_STORAGE_FACILTIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getStorageFacilityDetailsReducer = (
  state = { loading: true, storageFacility: {} },
  action
) => {
  switch (action.type) {
    case GET_STORAGE_FACILTIES_DETAILS_REQUEST:
      return { loading: true };
    case GET_STORAGE_FACILTIES_DETAILS_SUCCESS:
      return { loading: false, storageFacility: action.payload };
    case GET_STORAGE_FACILTIES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
