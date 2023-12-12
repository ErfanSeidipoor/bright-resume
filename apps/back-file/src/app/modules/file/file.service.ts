import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { File, PaginatedFile } from "@@back-file/app/models";
import { DbService } from "@@back-file/app/modules/db/db.service";
import { MinioService } from "@@back-file/app/modules/minio/minio.service";
import { paginate } from "@back-common/pagination";
import {
  GeneratePdfOfResumeFileInputs,
  GetDownloadLinkFileInputs,
  GetFileByIdFileInputs,
  GetFilesFileInputs,
  GetUploadLinkForProfileImageFileInputs,
  PaginationArgs,
  VerifyUploadedFileFileInputs,
} from "@dto";
import { FileReasonEnum, FileStatusEnum, FileTypeEnum } from "@enums";
import {
  CustomError,
  FILE_NOT_FOUND,
  THE_FILE_HAS_ALREADY_BEEN_APPROVED,
  THE_FILE_HAS_NOT_BEEN_UPLOADED_YET,
} from "@errors";
import { BullService } from "../bull/bull.service";

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File.name) private fileModel: Model<File>,
    private minioService: MinioService,
    private dbService: DbService,
    private bullService: BullService
  ) {}

  async getUploadLinkForProfileImage(
    userId: string,
    inputs: GetUploadLinkForProfileImageFileInputs
  ): Promise<File> {
    const { resumeId } = inputs;

    let file = await this.fileModel.findOne({
      resumeId,
      userId,
      isVerified: false,
      type: FileTypeEnum.image,
      reason: FileReasonEnum.resume_profile_image,
    });

    if (!file) {
      file = await this.fileModel.create({
        resumeId,
        userId,
        isVerified: false,
        type: FileTypeEnum.image,
        reason: FileReasonEnum.resume_profile_image,
      });
    }

    let uploadLink = "";
    await this.dbService.transaction(async () => {
      await file.save();
      uploadLink = await this.minioService.getUploadLink(file.id);
    });

    file.uploadLink = uploadLink;
    return file;
  }

  async verifyUploadedFile(
    userId: string,
    inputs: VerifyUploadedFileFileInputs
  ): Promise<File> {
    const { fileId } = inputs;

    const file = await this.fileModel.findOne({
      userId,
      id: fileId,
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    if (file.isVerified) {
      throw new CustomError(THE_FILE_HAS_ALREADY_BEEN_APPROVED);
    }

    const status = await this.minioService.getStatus(fileId);

    if (!status) {
      throw new CustomError(THE_FILE_HAS_NOT_BEEN_UPLOADED_YET);
    }

    file.isVerified = true;
    file.size = status.size;
    file.status = FileStatusEnum.uploaded;

    await file.save();

    return file;
  }

  async generatePdfOfResume(
    userId: string,
    inputs: GeneratePdfOfResumeFileInputs
  ): Promise<string> {
    const { resumeId } = inputs;

    await this.dbService.transaction(async () => {
      const file = await this.fileModel.create({
        resumeId,
        userId,
        isVerified: false,
        type: FileTypeEnum.PDF,
        reason: FileReasonEnum.resume_PDF,
        status: FileStatusEnum.waiting,
      });

      await this.bullService.addToGeneratePdfOfResumeQueue({
        fileId: file.id,
        inputs,
      });
    });

    return "";
  }

  async getDownloadLink(
    userId: string,
    args: GetDownloadLinkFileInputs
  ): Promise<string> {
    const { fileId } = args;

    const file = await this.fileModel.findOne({
      id: fileId,
      userId,
      isVerified: true,
      status: FileStatusEnum.uploaded,
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return await this.minioService.getDownloadLink(fileId);
  }

  async getList(
    userId: string,
    args: GetFilesFileInputs,
    paginationArgs: PaginationArgs
  ): Promise<PaginatedFile> {
    const { resumeId, reason } = args;
    const { limit, page } = paginationArgs;

    const queryBuilder: FilterQuery<File> = {
      userId,
      isVerified: true,
    };

    if (resumeId) {
      queryBuilder.resumeId = resumeId;
    }

    if (reason) {
      queryBuilder.reason = reason;
    }

    return paginate(this.fileModel, queryBuilder, page, limit);
  }

  async getById(userId: string, args: GetFileByIdFileInputs): Promise<File> {
    const { fileId } = args;

    const file = await this.fileModel.findOne({
      userId,
      id: fileId,
      isVerified: true,
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return file;
  }
}
