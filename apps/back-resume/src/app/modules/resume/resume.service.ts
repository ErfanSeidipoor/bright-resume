import { FilterQuery, Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CustomError, RESUME_NOT_FOUND } from "@bright-resume/errors";
import {
  CreateResumeInputs,
  DeleteResumeInputs,
  GetResumeByIdArgs,
  GetResumesArgs,
  PaginationArgs,
  UpdateResumeInputs,
} from "@bright-resume/dto";
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
    args: GetResumesArgs
  ): Promise<PaginatedResume> {
    const { name } = args;
    const { limit, page } = paginationArgs;

    const queryBuilder: FilterQuery<Resume> = {};

    if (name) {
      queryBuilder.name = name;
    }

    return paginate(this.resumeModel, queryBuilder, page, limit);
  }

  async getById(args: GetResumeByIdArgs): Promise<Resume> {
    const { resumeId } = args;

    const resume = await this.resumeModel.findById(resumeId);

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    return resume;
  }

  async update(inputs: UpdateResumeInputs): Promise<Resume> {
    const { resumeId } = inputs;

    let resume = await this.resumeModel.findById(resumeId);

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    resume = await this.resumeModel.findOneAndUpdate({ id: resumeId }, inputs);

    return resume;
  }

  async delete(inputs: DeleteResumeInputs): Promise<Resume> {
    const { resumeId } = inputs;

    const resume = await this.resumeModel.findById(resumeId);

    if (!resume) {
      throw new CustomError(RESUME_NOT_FOUND);
    }

    await resume.deleteOne();

    return resume;
  }

  async create(inputs: CreateResumeInputs): Promise<Resume> {
    const resume = new this.resumeModel({
      userId: "userId",
      name: inputs.name,
    });
    resume.experiences.push(new this.experienceModel(inputs.experiences[0]));
    resume.experiences.push(new this.experienceModel(inputs.experiences[0]));
    resume.experiences.splice(0, resume.experiences.length);
    resume.experiences.push(new this.experienceModel(inputs.experiences[0]));

    await resume.save();

    return resume;
  }
}
