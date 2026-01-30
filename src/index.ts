import express from 'express';
import config from './config/config';
import { setupApp } from './setup-app';

const app = express();
setupApp(app);
console.log('config', config);

const PORT = config.port || 5001;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
