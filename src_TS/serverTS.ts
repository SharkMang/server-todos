import koa from 'koa';
import cors from '@koa/cors';
import connection from './models/connection';
import { PORT } from './config';
import routes from './routes';

const app = new koa();

connection()


app.use(cors());
app.use(routes.routes());

app.listen(PORT, () => {
  console.log(`Server has been running on port ${PORT}.....`)
});