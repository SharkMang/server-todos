require('dotenv').config();

const DB = require('./DB');
const { 
  secretKey,
  refreshSecretKey,
  expForToken,
  expForRefreshToken
} = require('./jwt')

const { PORT } = require('./host')

module.exports = {
  DB,
  secretKey,
  refreshSecretKey,
  expForToken,
  expForRefreshToken,
  PORT
};