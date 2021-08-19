const koa = require('koa');
const cors = require('@koa/cors');

const app = new koa();
const routes = require('./src/routes');

require('./src/models/connection')();

const { PORT } = require('./src/config')

app.use(cors());
app.use(routes.routes());

app.listen(PORT, () => {
  console.log(`Server has been running on port ${PORT}.....`)
});