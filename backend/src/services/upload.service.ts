import { Service } from 'typedi';

import { IUploadDto, IUploadFileData, IUploadResult } from '../interfaces/upload.interface';
import { FILE_TYPE } from '../constants/file-type.const';
import { calculateAge, formatFullName } from '../utils';
import PdfParse from 'pdf-parse';
import Tesseract from 'tesseract.js';

@Service()
export class UploadService {
  /**
   * @method upload
   * @async
   * @param {IUploadData} uploadData
   * @returns {Promise<IUploadResult>}
   */
  async upload(uploadData: IUploadDto): Promise<IUploadResult> {
    const { firstName, lastName, dateOfBirth, ...fileData } = uploadData;
    const extractedText = await this.extractText(fileData);

    return {
      fullName: formatFullName(firstName, lastName),
      age: calculateAge(dateOfBirth),
      extractedText,
    } as IUploadResult;
  }

  /**
   * @method extractText
   * @async
   * @param {IUploadFileData} fileData
   * @returns {Promise<string>}
   */
   private async extractText (fileData: IUploadFileData): Promise<string> {
    const { file, fileType } = fileData;
    let extractedText: string | undefined;

    switch (fileType) {
      case FILE_TYPE.IMAGE:
        extractedText = await this.processImage(file);
        break;
      case FILE_TYPE.PDF:
        extractedText = await this.processPdf(file);
        break;
    }

    return extractedText;
  }

   /**
   * @method extractText
   * @async
   * @private
   * @param {Express.Multer.File} file
   * @returns {Promise<string>}
   */
  private async processImage (file: Express.Multer.File): Promise<string> {
    return (await Tesseract.recognize(file.buffer)).data.text;
  }

   /**
   * @method extractText
   * @async
   * @private
   * @param {Express.Multer.File} file
   * @returns {Promise<string>}
   */
  private async processPdf (file: Express.Multer.File): Promise<string> {
    return (await PdfParse(file.buffer)).text;
  }

}
