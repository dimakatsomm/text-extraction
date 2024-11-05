import { NextFunction, Request, Response } from "express";
import { FILE_TYPE } from "../constants/file-type.const";

export const setFileType = () => async (req: Request, res: Response, next: NextFunction) => {
  const { file } = req;

  if (!file) {
    res.status(400).json({ message: 'File is required' });
    return;
  }

  const type = file?.mimetype.split('/') || [];
  let fileType = FILE_TYPE.IMAGE;

  if (type[0].toUpperCase() === FILE_TYPE.IMAGE) {
    fileType = FILE_TYPE.IMAGE
  } else if (type[1].toUpperCase() === FILE_TYPE.PDF) {
    fileType = FILE_TYPE.PDF
  } else {
    res.status(400).json({ message: 'Invalid file type'});
    return;
  }

  req.body = {
    ...req.body,
    file,
    fileType
  }

  next();
}