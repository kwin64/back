import express, { Express } from 'express';
import router from './routes';

export const setupApp = (app: Express) => {
  app.use(express.json());
  app.use('/api', router);
  return app;
};
