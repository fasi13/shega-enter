import {
  // SET_CURRENT_ADMIN,
  GET_VOCABULARY,
  VOCABULARY_ADD,
  VOCABULARY_UPDATE,
  VOCABULARY_DELETE,
  ADMIN_LOADING,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  langVoc: null,
  langVocs: {},
  isAuthenticated: false,
  loading: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VOCABULARY:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVocs: action.payload,
        loading: false,
      };
    case VOCABULARY_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVocs: action.payload,
      };
    case VOCABULARY_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVocs: action.payload,
      };
    case VOCABULARY_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVocs: action.payload,
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
