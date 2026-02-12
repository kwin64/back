import { Request, Response } from 'express';
import dbData from '../db/db.json';
import { HttpResponse } from '../utils/HttpResponse';

class VideosController {
  private db: any[] = [
    {
      id: 1,
      title: 'First Video',
      duration: 120,
      views: 10,
    },
    {
      id: 2,
      title: 'Second Video',
      duration: 240,
      views: 25,
    },
  ];

  getAllVideos(req: Request, res: Response): void {
    try {
      HttpResponse.send(res, 200, this.db, 'Videos fetched successfully');
    } catch (error) {
      HttpResponse.send(res, 500, null, 'Failed to fetch videos');
    }
  }
  createNewVideo(req: Request, res: Response): void {
    try {
      HttpResponse.send(res, 200, this.db, 'Videos fetched successfully');
    } catch (error) {
      HttpResponse.send(res, 500, null, 'Failed to fetch videos');
    }
  }
}

export default new VideosController();
