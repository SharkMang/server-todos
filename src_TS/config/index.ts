require('dotenv').config();

import DB from './DB';
import { secretKey, expForToken, expForRefreshToken } from './jwt';
import { PORT } from './host';

export {
  DB,
  secretKey,
  expForToken,
  expForRefreshToken,
  PORT
};