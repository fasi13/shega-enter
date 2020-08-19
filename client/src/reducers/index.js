import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import subCounterReducer from "./authReducers";
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    subCounterReducer: subCounterReducer
});