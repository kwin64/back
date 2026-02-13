import { Request, Response } from 'express';
import dbData from '../db/db.json';
import ApiError from '../utils/ApiError';

class VideosController {
  private db: any[];

  constructor() {
    if (!Array.isArray(dbData)) {
      this.db = [];
    } else {
      this.db = dbData;
    }
  }

  getAllVideos(req: Request, res: Response): void {
    try {
      console.log('db', this.db);
      const videos = this.db;

      if (videos.length <= 0) {
        throw new ApiError(404, 'No videos found');
      }

      res.send(videos);
    } catch (error) {
      if (error instanceof ApiError) {
        res.status(error.statusCode).json({
          success: false,
          message: error.message,
        });
      }
    }
  }
  createNewVideo(req: Request, res: Response): void {}
}

export default new VideosController();
