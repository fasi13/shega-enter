import {
  GET_TUTORIAL_VEDIO,
  TUTORIAL_VEDIO_ADD,
  TUTORIAL_VEDIO_UPDATE,
  TUTORIAL_VEDIO_DELETE,
  GET_INTR_TUTORIAL_VEDIO,
  INTR_TUTORIAL_VEDIO_ADD,
  INTR_TUTORIAL_VEDIO_UPDATE,
  INTR_TUTORIAL_VEDIO_DELETE,
  TUTORIAL_ADV_VEDIO_ADD,
  ADV_TUTORIAL_VEDIO_DELETE,
  ADV_TUTORIAL_VEDIO_UPDATE,
  ADV_GET_TUTORIAL_VEDIO,
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

    case GET_INTR_TUTORIAL_VEDIO:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
        loading: false,
      };
    case INTR_TUTORIAL_VEDIO_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };
    case INTR_TUTORIAL_VEDIO_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };
    case INTR_TUTORIAL_VEDIO_DELETE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };

    case TUTORIAL_ADV_VEDIO_ADD:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
        loading: false,
      };
    case ADV_TUTORIAL_VEDIO_DELETE:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };
    case ADV_TUTORIAL_VEDIO_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        langVedioLinks: action.payload,
      };
    case ADV_GET_TUTORIAL_VEDIO:
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
