import { SUBSCRIBTION_NUMBER } from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  subscribe: null,
  isAuthenticated: false,
  subscribeNumbers: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBTION_NUMBER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        subscribeNumbers: action.payload,
      };
    default:
      return state;
  }
}
