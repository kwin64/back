import express from 'express';
import videoController from '../controllers/videos.controller';

const router = express.Router();

router.get('/', videoController.getAllVideos);

export default router;
