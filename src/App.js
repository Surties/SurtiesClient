import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "./Redux/auth/auth.actiontype";

import AllRoutes from "./Routes/AllRoutes";
axios.defaults.withCredentials = true;
function App() {
  const mainl = "kk";
  const dispatch = useDispatch();
  const getUser = () => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axios
      .get("http://localhost:8080/auth/signin-token", { withCredentials: true })
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: err.response.data.msg,
        });
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
