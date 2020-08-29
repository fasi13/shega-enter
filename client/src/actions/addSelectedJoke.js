import axios from "axios";
import { GET_ERRORS, SLECTED_JOKE_ADD, SLECTED_JOKE_UPDATE } from "./types";

export const addSelectedJoke = (selectedJokeData, history) => (dispatch) => {
  axios
    .post("/api/selected-joke-add", selectedJokeData)
    .then((res) =>
      dispatch({
        type: SLECTED_JOKE_ADD,
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

export const updateJoke = (selectedJokeData) => (dispatch) => {
  axios
    .post("/api/selected-joke-update", selectedJokeData)
    .then((res) =>
      dispatch({
        type: SLECTED_JOKE_UPDATE,
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
