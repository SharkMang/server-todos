const jwt = require('jsonwebtoken');
const { secretKey, expForToken } = require('../../config')

const createToken = (id) => jwt.sign(
  {
    userId: id,
    exp: expForToken
  }, secretKey
);

module.exports = {
  createToken
};
