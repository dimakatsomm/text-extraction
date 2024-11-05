import { Inject, Service } from 'typedi';
import { Request, Response } from 'express';

import { UploadService } from '../services/upload.service';
import { IUploadDto } from '../interfaces/upload.interface';

@Service()
export class UploadController {
  constructor(
    @Inject() private uploadService: UploadService
  ) {}

  /**
   * @method upload
   * @instance
   * @async
   * @param {Request} req
   * @param {Response} res
   */
  upload = async (req: Request, res: Response) => {
    try {
      const uploadData = req.body as IUploadDto;
      const resp = await this.uploadService.upload(uploadData);
      
      res.status(200).json(resp);
    } catch (e: any) {
      res.status(500).json({ message: e?.data?.message || e.message || 'Internal Server Error' });
    }
  };
}
