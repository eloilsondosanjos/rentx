import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError } from '@shared/errors/AppError';
import createConnection from '@shared/infra/typeorm';

import swaggerFile from '../../../swagger.json';
import { router } from './routes';

import '@shared/container';

createConnection();
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

const port = 3333;

app.listen(port, () =>
  console.log(`🚀 Server Rentx started on http://localhost:${port}!`),
);
