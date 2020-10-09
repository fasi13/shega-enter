import {
  // SET_CURRENT_ADMIN,
  GET_GRAMMAR,
  GRAMMAR_ADD,
  GRAMMAR_UPDATE,
  GRAMMAR_DELETE,
  ADMIN_LOADING,
  GET_INTR_GRAMMAR,
  INTR_GRAMMAR_ADD,
  INTR_GRAMMAR_UPDATE,
  INTR_GRAMMAR_DELETE,
  GET_ADV_GRAMMAR,
  ADV_GRAMMAR_ADD,
  ADV_GRAMMAR_UPDATE,
  ADV_GRAMMAR_DELETE,
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

    case GET_INTR_GRAMMAR:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
        loading: false,
      };
    case INTR_GRAMMAR_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };
    case INTR_GRAMMAR_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };
    case INTR_GRAMMAR_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };

    case GET_ADV_GRAMMAR:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
        loading: false,
      };
    case ADV_GRAMMAR_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };
    case ADV_GRAMMAR_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langGrams: action.payload,
      };
    case ADV_GRAMMAR_DELETE:
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
