import fs from 'fs';
import { Request, Response } from 'express';

const dbData = require('../db/db');

export class VideosController {
  private db: any[];

  constructor() {
    this.db = dbData.default || dbData;
  }

  getAllVideos(req: Request, res: Response): void {
    try {
      if (!Array.isArray(this.db)) {
        throw new Error('DB is not an array');
      }
      res.json({
        success: true,
        count: this.db.length,
        data: this.db,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to load videos',
      });
    }
  }
}

const videoController = new VideosController();
export default videoController;
