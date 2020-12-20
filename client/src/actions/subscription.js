import axios from "axios";
import { SUBSCRIBTION_NUMBER, GET_ERRORS } from "./types";
export const getSubscribNumber = (phoneNumber) => (dispatch) => {
  axios
    .get(`/api/${phoneNumber}`)
    .then((res) =>
      dispatch({
        type: SUBSCRIBTION_NUMBER,
        payload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
