import {
  // SET_CURRENT_ADMIN,
  GET_EXERCISE,
  EXERCISE_ADD,
  EXERCISE_UPDATE,
  EXERCISE_DELETE,
  ADMIN_LOADING,
  GET_INTR_EXERCISE,
  INTR_EXERCISE_ADD,
  INTR_EXERCISE_UPDATE,
  INTR_EXERCISE_DELETE,
  GET_ADV_EXERCISE,
  ADV_EXERCISE_ADD,
  ADV_EXERCISE_UPDATE,
  ADV_EXERCISE_DELETE,
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

    case GET_INTR_EXERCISE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
        loading: false,
      };
    case INTR_EXERCISE_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    case INTR_EXERCISE_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    case INTR_EXERCISE_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };

    case GET_ADV_EXERCISE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
        loading: false,
      };
    case ADV_EXERCISE_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    case ADV_EXERCISE_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langExercises: action.payload,
      };
    case ADV_EXERCISE_DELETE:
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
