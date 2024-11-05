import 'reflect-metadata';
import express from 'express';
import multer from 'multer';
import cors from 'cors';

import uploadRouter from './routes/upload.route';
import config from './config';
import { serve, setup } from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const swaggerDoc = YAML.load('./spec/api-spec.yaml')
app.use(express.json());
app.use(cors())
app.use('/api-docs', serve, setup(swaggerDoc));
app.use('/api', upload.single('file'), uploadRouter);

app.listen(config.serverPort, () => {
  // eslint-disable-next-line no-console, no-undef
  console.log(`Server running on PORT: ${config.serverPort}`);
});
