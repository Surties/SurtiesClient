import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  RESET_AUTH,
  SET_SESSION,
} from "./auth.actiontype";

const initialState = {
  loading: false,
  error: false,
  message1: "",
  message2: "",
  user: {},
  auth: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message1: payload.msg,
        user: payload.userName,
        role: payload.role,
        auth: true,
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        message1: payload,
      };
    case RESET_AUTH:
      return {
        ...state,
        loading: false,
        error: false,
        message1: "",
        message2: "",
        auth: false,
      };

    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message2: payload.msg,
        error: false,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message2: payload,
      };
    case SET_SESSION:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
