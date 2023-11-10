import {
  CREATE_ROOMS_REQUEST,
  CREATE_ROOMS_SUCCESS,
  CREATE_ROOMS_FAIL,
  DELETE_ROOMS_REQUEST,
  DELETE_ROOMS_SUCCESS,
  DELETE_ROOMS_FAIL,
  GET_SINGLE_ROOM_REQUEST,
  GET_SINGLE_ROOM_FAIL,
  GET_SINGLE_ROOM_SUCCESS,
  UPDATE_ROOMS_REQUEST,
  UPDATE_ROOMS_SUCCESS,
  UPDATE_ROOMS_FAIL,
  GET_ALL_ROOM_REQUEST,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAIL,
} from "../constants/roomsConstants";

import { API_URL } from "./userActions";
import axios from "axios";

import { getTotalStorageUnits } from "./storageUnitActions";

// CREATE NEW ROOMS (STORAGE PROVIDER)
export const createRooms = (id, roomsData) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ROOMS_REQUEST });

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
      `${API_URL}/units/storage-unit/${id}/`,
      roomsData,
      config
    );

    dispatch({ type: CREATE_ROOMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ROOMS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// DELETE ROOM (SERVICE PROVIDER)
export const deleteRoom = (roomId) => async (dispatch, getState) => {
  console.log(roomId);
  try {
    dispatch({ type: DELETE_ROOMS_REQUEST });

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
      `${API_URL}/units/storage-unit-detail/${roomId}/`,
      config
    );

    dispatch({ type: DELETE_ROOMS_SUCCESS });
    dispatch(getTotalStorageUnits());
  } catch (error) {
    dispatch({
      type: DELETE_ROOMS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET SINGLE ROOM (SERVICE PROVIDER)
export const getSingleRoom = (roomId) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SINGLE_ROOM_REQUEST });

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
      `${API_URL}/units/storage-unit-detail/${roomId}`,
      config
    );

    dispatch({ type: GET_SINGLE_ROOM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_ROOM_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

// GET ALL ROOMS OF SPECIFIC UNIT (SERVICE PROVIDER)
export const getAllRoomsOfSpecificUnit =
  (roomId) => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_ALL_ROOM_REQUEST });

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
        `${API_URL}/units/storage-unit/${roomId}`,
        config
      );

      dispatch({ type: GET_ALL_ROOM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_ROOM_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
    }
  };

// UPDATE ROOM (SERVICE PROVIDER)
export const updateRoom = (roomId, roomData) => async (dispatch, getState) => {
  console.log(roomData);
  try {
    dispatch({ type: UPDATE_ROOMS_REQUEST });

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
      `${API_URL}/units/storage-unit-detail/${roomId}/`,
      roomData,
      config
    );

    dispatch({ type: UPDATE_ROOMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_ROOMS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};
