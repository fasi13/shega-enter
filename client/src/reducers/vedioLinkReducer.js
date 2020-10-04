import {
  GET_TUTORIAL_VEDIO,
  TUTORIAL_VEDIO_ADD,
  TUTORIAL_VEDIO_UPDATE,
  TUTORIAL_VEDIO_DELETE,
  ADMIN_LOADING,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  langVedioLink: null,
  langVedioLinks: {},
  isAuthenticated: false,
  loading: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TUTORIAL_VEDIO:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
        loading: false,
      };
    case TUTORIAL_VEDIO_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };
    case TUTORIAL_VEDIO_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };
    case TUTORIAL_VEDIO_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
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
