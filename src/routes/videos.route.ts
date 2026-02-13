import express from 'express';
import videoController from '../controllers/videos.controller';
import dbData from '../db/db.json';
import ApiError from '../utils/ApiError';

const videosRouter = express.Router();

videosRouter.get('/videos', videoController.getAllVideos);
videosRouter.post('/videos', videoController.createNewVideo);

export default videosRouter;
