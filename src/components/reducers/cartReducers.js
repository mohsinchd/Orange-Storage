import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_ADD_ITEM_RESET,
  CART_GET_ITEM_REQUEST,
  CART_GET_ITEM_SUCCESS,
  CART_GET_ITEM_FAIL,
  CART_GET_ITEM_RESET,
  CART_UPDATE_ITEM_REQUEST,
  CART_UPDATE_ITEM_SUCCESS,
  CART_UPDATE_ITEM_FAIL,
} from "../constants/cartConstants";

export const cartAddItemsReducer = (
  state = { loading: false, cartItem: [], error: null },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM_REQUEST:
      return { loading: true };
    case CART_ADD_ITEM_SUCCESS:
      return { loading: false, cartItem: action.payload };
    case CART_ADD_ITEM_FAIL:
      return { loading: false, error: action.payload };
    case CART_ADD_ITEM_RESET:
      return { loading: false, cartItem: null, error: null };

    default:
      return state;
  }
};

export const cartGetItemsReducer = (
  state = { loading: true, cartItems: null, error: null },
  action
) => {
  switch (action.type) {
    case CART_GET_ITEM_REQUEST:
      return { loading: true };
    case CART_GET_ITEM_SUCCESS:
      return { loading: false, cartItems: action.payload };
    case CART_GET_ITEM_FAIL:
      return { loading: false, error: action.payload };
    case CART_GET_ITEM_RESET:
      return { loading: false, cartItem: null, error: null };

    default:
      return state;
  }
};

export const cartUpdateItemsReducer = (
  state = { loading: true, message: null, error: null },
  action
) => {
  switch (action.type) {
    case CART_UPDATE_ITEM_REQUEST:
      return { loading: true };
    case CART_UPDATE_ITEM_SUCCESS:
      return { loading: false, message: action.payload };
    case CART_UPDATE_ITEM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
