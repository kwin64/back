import express, { Express, Router } from 'express';
import config from '../config/config';
import videos from './videos.route';

const router: Router = express.Router();

const defaultRoutes = [
  {
    path: '/videos',
    route: videos,
  },
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
