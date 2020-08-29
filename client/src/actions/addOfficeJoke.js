import axios from "axios";
import { GET_ERRORS, OFFICE_JOKE_ADD, OFFICE_JOKE_UPDATE } from "./types";

export const addOfficeJoke = (officeJokeData, history) => (dispatch) => {
  axios
    .post("/api/office-joke-add", officeJokeData)
    .then((res) =>
      dispatch({
        type: OFFICE_JOKE_ADD,
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

export const updateJoke = (officeJokeData) => (dispatch) => {
  axios
    .post("/api/family-joke-update", officeJokeData)
    .then((res) =>
      dispatch({
        type: OFFICE_JOKE_UPDATE,
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
