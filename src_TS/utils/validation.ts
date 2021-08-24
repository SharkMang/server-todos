import validate from "validate.js";
import { TODOS_STATUS } from '../constants';
import { LoginUser, SingupUser } from "../types";

export const checkValidSingupUser = ({ email, password, name, lastName }: SingupUser): any | undefined => {

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

  return validate({email, password, name, lastName}, constraints, {format: "flat"})
}

export const checkValidLoginUser = ({ email, password }: LoginUser): any | undefined => {
  
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

  return validate({email, password}, constraints, {format: "flat"})
}

export const isValidChangesForTodo = (chenges: { name?: string; status?: TODOS_STATUS }) => {
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

export const isValidName = (str: string) => (str && (str.search(/[^A-Za-z\s]/) === -1));

/// Сделать нормальную валидацию для статусов
// const isValidStatus = (status) => (TODOS_STATUS.COMPLETED === status || TODOS_STATUS.INCOMPLETED === status || TODOS_STATUS.ALL === status);
export const isValidStatus = (status: TODOS_STATUS) => (Object.values(TODOS_STATUS).includes(status))