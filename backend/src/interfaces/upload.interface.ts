import { FILE_TYPE } from "../constants/file-type.const";

export interface IUploadDto extends IUploadFileData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface IUploadFileData {
  file: Express.Multer.File;
  fileType: FILE_TYPE;
}

export interface IUploadResult {
  fullName: string;
  age: number;
  extractedText: string;
  metadata?: string;
}

