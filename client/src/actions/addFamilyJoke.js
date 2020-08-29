import axios from "axios";
import { GET_ERRORS, FAMILY_JOKE_ADD, FAMILY_JOKE_UPDATE } from "./types";

export const addFamilyJoke = (familyJokeData, history) => (dispatch) => {
  axios
    .post("/api/family-joke-add", familyJokeData)
    .then((res) =>
      dispatch({
        type: FAMILY_JOKE_ADD,
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

export const updateJoke = (familyJokeData) => (dispatch) => {
  axios
    .post("/api/family-joke-update", familyJokeData)
    .then((res) =>
      dispatch({
        type: FAMILY_JOKE_UPDATE,
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
