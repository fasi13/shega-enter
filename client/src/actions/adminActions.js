import axios from "axios";
import {
    GET_ERRORS,
    ADMIN_ADD,
    ADMIN_UPDATE
} from "./types";

export const addAdmin = (adminData, history) => dispatch => {
    axios
        .post("/api/admin-add", adminData)
        .then(res =>
            dispatch({
                type: ADMIN_ADD,
                payload: res,
            })
        ).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};


export const updateAdmin = (adminData) => dispatch => {
    axios
        .post("/api/admin-update", adminData)
        .then(res =>
            dispatch({
                type: ADMIN_UPDATE,
                payload: res,
            })
        ).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};
