import {
  // SET_CURRENT_ADMIN,
  GET_EXERCISE,
  EXERCISE_ADD,
  EXERCISE_UPDATE,
  EXERCISE_DELETE,
  ADMIN_LOADING,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  langExercise: null,
  langExercises: {},
  isAuthenticated: false,
  loading: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EXERCISE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
        loading: false,
      };
    case EXERCISE_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    case EXERCISE_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    case EXERCISE_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    // case SET_CURRENT_ADMIN:
    //     return {
    //         ...state,
    //         isAuthenticated: !isEmpty(action.payload),
    //         admin: action.payload
    //     };
    case ADMIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
