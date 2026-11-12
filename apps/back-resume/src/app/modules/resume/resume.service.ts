import { FilterQuery, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import {
  A_RESUME_WITH_THE_GIVEN_TITLE_ALREADY_EXISTS,
  CustomError,
  RESUME_NOT_FOUND,
} from "@bright-resume/errors";
import {
  CreateResumeResumeInputs,
  DeleteResumeResumeInputs,
  GetResumeByIdResumeArgs,
  GetResumesResumeArgs,
  PaginationArgs,
  UpdateResumeResumeInputs,
} from "@dto";
import { paginate } from "@bright-resume/back-common/pagination";

import { PaginatedResume, Resume } from "../../models/resume.model";

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<Resume>) {}

  async getResumes(
    userId: string,
    paginationArgs: PaginationArgs,
    args: GetResumesResumeArgs
  ): Promise<PaginatedResume> {
    const { title } = args;
    const { limit, page } = paginationArgs;

    const queryBuilder: FilterQuery<Resume> = {};

    queryBuilder.userId = userId;

    if (title) {
      queryBuilder.title = { $regex: title, $options: "i" };
    }

    return paginate(
      this.resumeModel,
      queryBuilder,
      page,
      limit,
      "updatedAt",
      "desc"
    );
  }

  async getById(
    userId: string,
    args: GetResumeByIdResumeArgs
  ): Promise<Resume> {
    const { resumeId } = args;

    const resume = await this.resumeModel.findOne({ userId, id: resumeId });

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    return resume;
  }

  async update(
    userId: string,
    inputs: UpdateResumeResumeInputs
  ): Promise<Resume> {
    const { resumeId } = inputs;

    const resume = await this.resumeModel.findOne({ id: resumeId, userId });

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    await this.resumeModel.findOneAndUpdate({ id: resumeId }, inputs);

    return await this.resumeModel.findOne({ userId, id: resumeId });
  }

  async delete(
    userId: string,
    inputs: DeleteResumeResumeInputs
  ): Promise<Resume> {
    const { resumeId } = inputs;

    const resume = await this.resumeModel.findOne({ id: resumeId, userId });

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    await resume.deleteOne();

    return resume;
  }

  async create(
    userId: string,
    inputs: CreateResumeResumeInputs
  ): Promise<Resume> {
    const nameDuplication = await this.resumeModel.findOne({
      title: inputs.title,
      userId,
    });

    if (nameDuplication) {
      throw new CustomError(A_RESUME_WITH_THE_GIVEN_TITLE_ALREADY_EXISTS);
    }

    const resume = await this.resumeModel.create({
      userId,
      ...inputs,
    });

    return resume;
  }
}
