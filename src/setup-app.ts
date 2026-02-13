import express, { Express } from 'express';
import videosRouter from './routes/videos.route';

export const setupApp = (app: Express) => {
  app.use(express.json());
  app.use('/api', videosRouter);
  return app;
};
