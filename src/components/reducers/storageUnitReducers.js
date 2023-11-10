import {
  GET_ALL_STORAGE_UNITS_REQUEST,
  GET_ALL_STORAGE_UNITS_SUCCESS,
  GET_ALL_STORAGE_UNITS_FAIL,
  GET_SINGLE_STORAGE_UNITS_FAIL,
  GET_SINGLE_STORAGE_UNITS_REQUEST,
  GET_SINGLE_STORAGE_UNITS_SUCCESS,
  CREATE_STORAGE_UNIT_REQUEST,
  CREATE_STORAGE_UNIT_SUCCESS,
  CREATE_STORAGE_UNIT_FAIL,
  CREATE_STORAGE_UNIT_CLEAR,
  DELETE_STORAGE_UNIT_FAIL,
  DELETE_STORAGE_UNIT_REQUEST,
  DELETE_STORAGE_UNIT_SUCCESS,
  UPDATE_STORAGE_UNIT_REQUEST,
  UPDATE_STORAGE_UNIT_SUCCESS,
  UPDATE_STORAGE_UNIT_FAIL,
  UPDATE_STORAGE_UNIT_CLEAR,
  GET_TOTAL_STORAGE_UNITS_REQUEST,
  GET_TOTAL_STORAGE_UNITS_SUCCESS,
  GET_TOTAL_STORAGE_UNITS_FAIL,
  GET_AVAILABLE_STORAGE_UNITS_REQUEST,
  GET_AVAILABLE_STORAGE_UNITS_SUCCESS,
  GET_AVAILABLE_STORAGE_UNITS_FAIL,
  GET_OCCUPIED_STORAGE_UNITS_REQUEST,
  GET_OCCUPIED_STORAGE_UNITS_SUCCESS,
  GET_OCCUPIED_STORAGE_UNITS_FAIL,
} from "../constants/storageUnitConstants";

export const getAllStorageUnitsReducer = (
  state = { loading: true, storageUnits: { results: [] } },
  action
) => {
  switch (action.type) {
    case GET_ALL_STORAGE_UNITS_REQUEST:
      return { loading: true };
    case GET_ALL_STORAGE_UNITS_SUCCESS:
      return { loading: false, storageUnits: action.payload };
    case GET_ALL_STORAGE_UNITS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSingleStorageUnitReducer = (
  state = { storageUnit: {}, loading: true },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_STORAGE_UNITS_REQUEST:
      return { loading: true };
    case GET_SINGLE_STORAGE_UNITS_SUCCESS:
      return { loading: false, storageUnit: action.payload };
    case GET_SINGLE_STORAGE_UNITS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createStorageUnitReducer = (
  state = { loading: false, storageUnit: null },
  action
) => {
  switch (action.type) {
    case CREATE_STORAGE_UNIT_REQUEST:
      return { loading: true };
    case CREATE_STORAGE_UNIT_SUCCESS:
      return { loading: false, storageUnit: action.payload };
    case CREATE_STORAGE_UNIT_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_STORAGE_UNIT_CLEAR:
      return { loading: false, storageUnit: null };
    default:
      return state;
  }
};

export const updateStorageUnitReducer = (
  state = { loading: false, storageUnit: null },
  action
) => {
  switch (action.type) {
    case UPDATE_STORAGE_UNIT_REQUEST:
      return { loading: true };
    case UPDATE_STORAGE_UNIT_SUCCESS:
      return { loading: false, storageUnit: action.payload };
    case UPDATE_STORAGE_UNIT_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_STORAGE_UNIT_CLEAR:
      return { loading: false, storageUnit: null };
    default:
      return state;
  }
};

export const deleteStorageUnitReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STORAGE_UNIT_REQUEST:
      return { loading: true };
    case DELETE_STORAGE_UNIT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_STORAGE_UNIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getTotalStorageUnitReducer = (
  state = { storageUnits: {}, loading: true },
  action
) => {
  switch (action.type) {
    case GET_TOTAL_STORAGE_UNITS_REQUEST:
      return { loading: true };
    case GET_TOTAL_STORAGE_UNITS_SUCCESS:
      return { loading: false, storageUnits: action.payload };
    case GET_TOTAL_STORAGE_UNITS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAvailableStorageUnitReducer = (
  state = { availableStorageUnits: {}, loading: true },
  action
) => {
  switch (action.type) {
    case GET_AVAILABLE_STORAGE_UNITS_REQUEST:
      return { loading: true };
    case GET_AVAILABLE_STORAGE_UNITS_SUCCESS:
      return { loading: false, availableStorageUnits: action.payload };
    case GET_AVAILABLE_STORAGE_UNITS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getOccupiedStorageUnitReducer = (
  state = { occupiedStorageUnits: {}, loading: true },
  action
) => {
  switch (action.type) {
    case GET_OCCUPIED_STORAGE_UNITS_REQUEST:
      return { loading: true };
    case GET_OCCUPIED_STORAGE_UNITS_SUCCESS:
      return { loading: false, occupiedStorageUnits: action.payload };
    case GET_OCCUPIED_STORAGE_UNITS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
