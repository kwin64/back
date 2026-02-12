import express from 'express';
import videoController from '../controllers/videos.controller';
import { HttpResponse } from '../utils/HttpResponse';

const videosRouter = express.Router();

videosRouter.get('/', (res, req) => {
  console.log(
    'videosRouter.getvideosRouter.getvideosRouter.getvideosRouter.getvideosRouter.getvideosRouter.getvideosRouter.get',
  );
});
videosRouter.post('/', videoController.createNewVideo);

export default videosRouter;
