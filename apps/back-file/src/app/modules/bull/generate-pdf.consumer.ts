import { Process, Processor } from "@nestjs/bull";
import fs from "fs";
import { Logger } from "@nestjs/common";
import { Job } from "bull";
import { GENERATE_PDF_OF_RESUME_QUEUE } from "./constants";
import { AddToGeneratePdfOfResumeQueueBullRequest } from "./dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DbService } from "../db/db.service";
import { PdfService } from "../pdf/pdf.service";
import { MinioService } from "../minio/minio.service";
import { CustomError, FILE_NOT_FOUND } from "@bright-resume/errors";
import { File } from "@@back-file/app/models";
import { FileStatusEnum } from "@enums";

@Processor(GENERATE_PDF_OF_RESUME_QUEUE)
export class GeneratePdfOfResumeConsumer {
  constructor(
    @InjectModel(File.name) private fileModel: Model<File>,
    private minioService: MinioService,
    private pdfService: PdfService,
    private dbService: DbService
  ) {}

  private readonly logger = new Logger(GeneratePdfOfResumeConsumer.name);

  @Process()
  async generatePdfOfResume(
    job: Job<AddToGeneratePdfOfResumeQueueBullRequest>
  ) {
    const {
      data: { fileId, resumeId },
    } = job;

    this.logger.log("start: jobId:", job.id, " fileId:", fileId);

    const file = await this.fileModel.findById(fileId);

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    file.isVerified = true;
    file.status = FileStatusEnum.Uploaded;

    await this.dbService.transaction(async () => {
      const path = await this.pdfService.generatePdf(fileId, resumeId);
      await this.minioService.uploadFile({
        fileId,
        path,
      });
      await file.save();
      await removeFile(path);
    });

    this.logger.log("end: jobId:", job.id);
  }
}

function removeFile(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
