import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

const port = '3333';

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
