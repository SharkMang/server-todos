require('dotenv').config();

const koa = require('koa');

const cors = require('@koa/cors');

const app = new koa();
const routes = require('./src/routes');

require('./src/models/connection')();

app.use(cors());

app.use(routes.routes());

app.listen(process.env.PORT, () => {
  console.log(`Server has been running on port ${process.env.PORT}.....`)
});