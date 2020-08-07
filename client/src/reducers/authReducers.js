import {
    SET_CURRENT_ADMIN,
    ADMIN_ADD,
    ADMIN_LOADING,
    ADMIN_UPDATE
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    isAuthenticated: false,
    admin: {},
    loading: false,
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ADMIN_ADD:
            return {
                isAuthenticated: !isEmpty(action.payload),
                admin: action.payload
            };
        case ADMIN_UPDATE:
            return {
                isAuthenticated: !isEmpty(action.payload),
                admin: action.payload,
            };
        case SET_CURRENT_ADMIN:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                admin: action.payload
            };
        case ADMIN_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
