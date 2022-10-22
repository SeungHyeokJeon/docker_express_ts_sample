import express, { Request, Response, NextFunction } from 'express';
import config from '../config';
import routes from './routes';
require('dotenv').config();

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); // routes 분리

// error handler
interface ErrorType {
  message: string;
  status: number;
}

// 모든 에러에 대해 핸들링
app.use(function (
  err: ErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

const PORT: number = config.port;
app
  .listen(PORT, () => {
    console.log(`
  ################################################
        🛡️  Server listening on ${PORT} 🛡️
  ################################################
  `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
