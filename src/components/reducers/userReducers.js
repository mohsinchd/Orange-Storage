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
  USER_INFO_CLEAR,
  USER_REGISTER_RESET,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_RESET,
  USER_EMAIL_UPDATE_REQUEST,
  USER_EMAIL_UPDATE_SUCCESS,
  USER_EMAIL_UPDATE_FAIL,
  USER_EMAIL_UPDATE_RESET,
  USER_PASSWORD_UPDATE_REQUEST,
  USER_PASSWORD_UPDATE_SUCCESS,
  USER_PASSWORD_UPDATE_FAIL,
  USER_PASSWORD_UPDATE_RESET,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, message: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const userLoginReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGIN_RESET:
      return { user: null };
    default:
      return state;
  }
};

export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return { loading: true };
    case USER_LOGOUT_SUCCESS:
      return { loading: false, message: action.payload };
    case USER_LOGOUT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userInfoReducer = (state = { info: null }, action) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return { loading: true };
    case USER_INFO_SUCCESS:
      return { loading: false, info: action.payload };
    case USER_INFO_FAIL:
      return { loading: false, error: action.payload };
    case USER_INFO_CLEAR:
      return {};
    default:
      return state;
  }
};

export const userForgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, message: action.payload };
    case USER_FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    case USER_FORGOT_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const userEmailUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EMAIL_UPDATE_REQUEST:
      return { loading: true };
    case USER_EMAIL_UPDATE_SUCCESS:
      return { loading: false, message: action.payload };
    case USER_EMAIL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_EMAIL_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userPasswordUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PASSWORD_UPDATE_REQUEST:
      return { loading: true };
    case USER_PASSWORD_UPDATE_SUCCESS:
      return { loading: false, message: action.payload };
    case USER_PASSWORD_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_PASSWORD_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
