import { FilterQuery, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CustomError, RESUME_NOT_FOUND } from "@bright-resume/errors";
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

  async getList(
    paginationArgs: PaginationArgs,
    args: GetResumesResumeArgs
  ): Promise<PaginatedResume> {
    const { name } = args;
    const { limit, page } = paginationArgs;

    const queryBuilder: FilterQuery<Resume> = {};

    if (name) {
      queryBuilder.name = name;
    }

    return paginate(this.resumeModel, queryBuilder, page, limit);
  }

  async getById(args: GetResumeByIdResumeArgs): Promise<Resume> {
    const { resumeId } = args;

    const resume = await this.resumeModel.findById(resumeId);

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    return resume;
  }

  async update(inputs: UpdateResumeResumeInputs): Promise<Resume> {
    const { resumeId } = inputs;

    let resume = await this.resumeModel.findById(resumeId);

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    resume = await this.resumeModel.findOneAndUpdate({ id: resumeId }, inputs);

    return resume;
  }

  async delete(inputs: DeleteResumeResumeInputs): Promise<Resume> {
    const { resumeId } = inputs;

    const resume = await this.resumeModel.findById(resumeId);

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    await resume.deleteOne();

    return resume;
  }

  async create(inputs: CreateResumeResumeInputs): Promise<Resume> {
    const resume = await this.resumeModel.create({
      userId: "userId",
      ...inputs,
    });

    return resume;
  }
}
