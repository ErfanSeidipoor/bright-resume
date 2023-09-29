import { Model } from "mongoose";
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

import { Resume } from "../../models/resume.model";

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<Resume>) {}

  async getList(
    paginationArgs: PaginationArgs,
    args: GetResumesArgs
  ): Promise<Resume[]> {
    const { name } = args;
    const { limit, page } = paginationArgs;

    return await this.resumeModel
      .find()
      .limit(limit)
      .skip((page - 1) * limit);
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
    console.log({ inputs });

    const resume = await this.resumeModel.create({
      userId: "userId",
      ...inputs,
    });

    await resume.save();

    return resume;
  }
}
