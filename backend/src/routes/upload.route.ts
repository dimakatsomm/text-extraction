import { Router } from 'express';
import Container from 'typedi';
import { UploadController } from '../controllers/upload.controller';
import { setFileType } from '../middleware/upload.middleware';

const router = Router();
const controller = Container.get(UploadController);

router.post('/upload', setFileType(), controller.upload);

export default router;
