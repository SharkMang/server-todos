const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

const createToken = async (date) => {
  const token = jwt.sign(
    {
      date,
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, secretKey);
  return token;
}

module.exports = createToken;
