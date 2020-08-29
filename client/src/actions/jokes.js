import api from "../utils/api";
// import axios from "axios";

import { SELECTED_JOKE_ADD, GET_ERRORS, SELECTED_JOKE_UPDATE } from "./types";

//get selected jokes
export const addSelectedJokes = (formData, history) => async (dispatch) => {
  api
    .put("/jokes/selected-jokes", formData)
    .then((res) =>
      dispatch({
        type: SELECTED_JOKE_ADD,
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

export const updateSelectedJoke = (SelectedJokeData) => (dispatch) => {
  api
    .post("/", SelectedJokeData)
    .then((res) =>
      dispatch({
        type: SELECTED_JOKE_UPDATE,
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
