import { SET_SESSION } from "./auth.actiontype.js";

import axios from "axios";

export const setSession = (user) => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth/session");
    dispatch({
      type: SET_SESSION,
      payload: res.data.user,
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
