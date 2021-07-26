const jwt = require('jsonwebtoken');
const secretKey = 'A very secret key';

const createToken = (date) => {
  const token = jwt.sign(
    {
      date,
      exp: Math.floor(Date.now() / 1000) - (60 * 60)
    }, secretKey);
  return token;
}

const checkAndDeckodToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'wrong-secret');
  } catch(err) {
    return err;
  }
  return jwt.decode(decoded);
}

module.exports = { createToken, checkAndDeckodToken }
