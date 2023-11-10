import {
  CREATE_ROOMS_REQUEST,
  CREATE_ROOMS_CLEAR,
  CREATE_ROOMS_SUCCESS,
  CREATE_ROOMS_FAIL,
  DELETE_ROOMS_REQUEST,
  DELETE_ROOMS_SUCCESS,
  DELETE_ROOMS_FAIL,
  DELETE_ROOMS_CLEAR,
  GET_SINGLE_ROOM_REQUEST,
  GET_SINGLE_ROOM_SUCCESS,
  GET_SINGLE_ROOM_FAIL,
  GET_ALL_ROOM_REQUEST,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAIL,
  UPDATE_ROOMS_REQUEST,
  UPDATE_ROOMS_SUCCESS,
  UPDATE_ROOMS_FAIL,
  UPDATE_ROOMS_CLEAR,
} from "../constants/roomsConstants";

export const createRoomsReducer = (
  state = { loading: false, rooms: null },
  action
) => {
  switch (action.type) {
    case CREATE_ROOMS_REQUEST:
      return { loading: true };
    case CREATE_ROOMS_SUCCESS:
      return { loading: false, rooms: action.payload };
    case CREATE_ROOMS_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_ROOMS_CLEAR:
      return { loading: false, rooms: null };
    default:
      return state;
  }
};

export const deleteRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROOMS_REQUEST:
      return { loading: true };
    case DELETE_ROOMS_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ROOMS_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_ROOMS_CLEAR:
      return {};
    default:
      return state;
  }
};

export const getSingleRoomReducer = (
  state = { loading: true, room: null },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_ROOM_REQUEST:
      return { loading: true };
    case GET_SINGLE_ROOM_SUCCESS:
      return { loading: false, room: action.payload };
    case GET_SINGLE_ROOM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateRoomsReducer = (
  state = { loading: false, room: null },
  action
) => {
  switch (action.type) {
    case UPDATE_ROOMS_REQUEST:
      return { loading: true };
    case UPDATE_ROOMS_SUCCESS:
      return { loading: false, room: action.payload };
    case UPDATE_ROOMS_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_ROOMS_CLEAR:
      return { loading: false, room: null };
    default:
      return state;
  }
};

export const getAllRoomsOfSpecificUnitReducer = (
  state = { loading: true, rooms: null },
  action
) => {
  switch (action.type) {
    case GET_ALL_ROOM_REQUEST:
      return { loading: true };
    case GET_ALL_ROOM_SUCCESS:
      return { loading: false, rooms: action.payload };
    case GET_ALL_ROOM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
