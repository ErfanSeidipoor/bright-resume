import { FilterQuery, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import {
  A_RESUME_WITH_THE_GIVEN_NAME_ALREADY_EXISTS,
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
import { Experience } from "../../models";

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name) private resumeModel: Model<Resume>,
    @InjectModel(Experience.name) private experienceModel: Model<Experience>
  ) {}

  async getResumes(
    userId: string,
    paginationArgs: PaginationArgs,
    args: GetResumesResumeArgs
  ): Promise<PaginatedResume> {
    const { name } = args;
    const { limit, page } = paginationArgs;

    const queryBuilder: FilterQuery<Resume> = {};

    queryBuilder.userId = userId;

    if (name) {
      queryBuilder.name = name;
    }

    return paginate(this.resumeModel, queryBuilder, page, limit);
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

    return await this.resumeModel.findOneAndUpdate({ id: resumeId }, inputs);
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
      name: inputs.name,
    });

    if (nameDuplication) {
      throw new CustomError(A_RESUME_WITH_THE_GIVEN_NAME_ALREADY_EXISTS);
    }

    const resume = await this.resumeModel.create({
      userId,
      ...inputs,
    });

    return resume;
  }
}
