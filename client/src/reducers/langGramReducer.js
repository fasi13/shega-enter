import {
  // SET_CURRENT_ADMIN,
  GET_GRAMMAR,
  GRAMMAR_ADD,
  GRAMMAR_UPDATE,
  GRAMMAR_DELETE,
  ADMIN_LOADING,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  langGram: null,
  langGrams: {},
  isAuthenticated: false,
  loading: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GRAMMAR:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
        loading: false,
      };
    case GRAMMAR_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };
    case GRAMMAR_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };
    case GRAMMAR_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
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
