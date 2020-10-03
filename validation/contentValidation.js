const Validator = require('validator');
const isEmpty = require('is-empty');

// In this case atleast the first 
// two input should be field 
module.exports = function checkValidation(data){
    let errors = {};
    data.body_A = !isEmpty(data.body_A)? data.body_A: "";
    data.body_B = !isEmpty(data.body_A)? data.body_B: "";

    if(Validator.isEmpty(data.body_A)){
        errors.body_A = "Body Field A is required";
    }

    if(Validator.isEmpty(data.body_B)){
        errors.body_B = "Body Field B is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = function checkVlidationLang(data){
    console.log(data);
}