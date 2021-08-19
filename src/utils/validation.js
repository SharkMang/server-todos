const validate = require("validate.js");

const { TODOS_STATUS } = require('../constants');

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

const isValidChangesForTodo = (chenges) => {
  if (chenges.name) {
    return isValidName(chenges.name)
  } else if (chenges.status) {
    return isValidStatus(chenges.status)
  }
  // if (changes.name || changes.status) {
  //   return isValidName(chenges.name) || isValidStatus(changes.status)
  // }
  return false;
}

const isValidName = (str) => (str && (str.search(/[^A-Za-z\s]/) === -1));

/// Сделать нормальную валидацию для статусов
// const isValidStatus = (status) => (TODOS_STATUS.COMPLETED === status || TODOS_STATUS.INCOMPLETED === status || TODOS_STATUS.ALL === status);
const isValidStatus = (status) => (Object.values(TODOS_STATUS).includes(status))

module.exports = { 
  checkValidSingupUser,
  checkValidLoginUser,
  isValidChangesForTodo,
  isValidName,
  isValidStatus
};