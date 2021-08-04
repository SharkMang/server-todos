const validate = require("validate.js");

const TODOS_STATUS = require('./constance');

validate.options = {format: "flat"};

const checkValidSingupUser = ({ email, password, name, lastName }) => {

  const constraints = {
    name: {
      presence: true,
      type: "string",
      length: {
        minimum: 1,
        message: "Please write name."
      }
    },
    lastName: {
      presence: true,
      type: "string",
      length: {
        minimum: 1,
        message: "Please write lastname."
      }
    },
    email: {
      presence: true,
      email: {
        message: "not valid."
      },
    },
    password: {
      presence: true,
      type: "string",
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    }
  };

  return validate({email, password, name, lastName}, constraints)
}

const checkValidLoginUser = ({ email, password }) => {
  
  const constraints = {
    email: {
      presence: true,
      email: {
        message: "not valid."
      }
    },
    password: {
      presence: true,
      type: "string",
      length: {
        minimum: 6,
        message: "must be at least 6 characters"
      }
    }
  };

  return validate({email, password}, constraints)
}

const isValidChangesForTodo = (changes) => {
  const whatToChange = Object.keys(changes)[0];
  const valueOfChange = Object.values(changes)[0];
  
  if (whatToChange === 'name') {
    return isValidName(valueOfChange)
  } else if (whatToChange === 'status') {
    return isValidStatus(valueOfChange)
  }

  return false;
}

const isValidName = (str) => (str && (str.search(/[^A-Za-z\s]/) == -1));

const isValidStatus = (status) => (status === TODOS_STATUS.COMPLETED || status === TODOS_STATUS.INCOMPLETED);

module.exports = { 
  checkValidSingupUser,
  checkValidLoginUser,
  isValidChangesForTodo,
  isValidName,
  isValidStatus
};