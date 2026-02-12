import express, { Express } from 'express';
import videosRouter from './routes/videos.route';

export const setupApp = (app: Express) => {
  app.use(express.json());
  app.get('/api', () => {
    console.log('app.get');
  });
  app.use('/api', videosRouter);
  return app;
};
