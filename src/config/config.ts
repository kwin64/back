import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

class Config {
  private static instance: Config;
  public readonly env: string;
  public readonly port: number;
  public readonly database: {
    name: string;
  };

  private constructor() {
    this.env = process.env.NODE_ENV || 'development';
    this.port = parseInt(process.env.PORT || '3000', 10);

    this.database = {
      name: process.env.DB_NAME || 'db without env',
    };
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

const config = Config.getInstance();
export default config;
