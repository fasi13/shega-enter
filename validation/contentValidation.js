const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function checkValidation(data){
    let errors = {};
    data.title = !isEmpty(data.title)? data.title: "";
    data.JokesBody = !isEmpty(data.JokesBody)? data.JokesBody:"";

    if(Validator.isEmpty(data.title)){
        errors.title = "Title Field is required";
    }
    if(Validator.isEmpty(data.JokesBody)){
        errors.JokesBody = "Body Field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};