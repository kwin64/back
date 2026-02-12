import express from 'express';
import config from './config/config';
import { setupApp } from './setup-app';

const app = express();

app.use(express.json());
setupApp(app);
const PORT = config.port || 5001;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
