import {
  GET_SERVICE_PROVIDER_FAIL,
  GET_SERVICE_PROVIDER_SUCCESS,
  GET_SERVICE_PROVIDER_REQUEST,
  CREATE_SERVICE_PROVIDER_REQUEST,
  CREATE_SERVICE_PROVIDER_SUCCESS,
  CREATE_SERVICE_PROVIDER_FAIL,
  CREATE_SERVICE_PROVIDER_CLEAR,
  UPDATE_SERVICE_PROVIDER_REQUEST,
  UPDATE_SERVICE_PROVIDER_SUCCESS,
  UPDATE_SERVICE_PROVIDER_FAIL,
  UPDATE_SERVICE_PROVIDER_CLEAR,
} from "../constants/serviceProviderConstants";

export const getServiceProviderReducer = (
  state = { loading: true, serviceProvider: {} },
  action
) => {
  switch (action.type) {
    case GET_SERVICE_PROVIDER_REQUEST:
      return { loading: true };
    case GET_SERVICE_PROVIDER_SUCCESS:
      return { loading: false, serviceProvider: action.payload };
    case GET_SERVICE_PROVIDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createServiceProviderReducer = (
  state = { loading: false, serviceProvider: null },
  action
) => {
  switch (action.type) {
    case CREATE_SERVICE_PROVIDER_REQUEST:
      return { loading: true };
    case CREATE_SERVICE_PROVIDER_SUCCESS:
      return { loading: false, serviceProvider: action.payload };
    case CREATE_SERVICE_PROVIDER_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_SERVICE_PROVIDER_CLEAR:
      return { loading: false, serviceProvider: null };
    default:
      return state;
  }
};

export const updateServiceProviderReducer = (
  state = { loading: false, serviceProvider: null },
  action
) => {
  switch (action.type) {
    case UPDATE_SERVICE_PROVIDER_REQUEST:
      return { loading: true };
    case UPDATE_SERVICE_PROVIDER_SUCCESS:
      return { loading: false, serviceProvider: action.payload };
    case UPDATE_SERVICE_PROVIDER_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_SERVICE_PROVIDER_CLEAR:
      return { loading: false, serviceProvider: null };
    default:
      return state;
  }
};
