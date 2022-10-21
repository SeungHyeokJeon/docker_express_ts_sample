import express from 'express';

const app: express.Application = express();

const port: number = 8080;
app.listen(port, () => {
  console.log('hello world');
});
