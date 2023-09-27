import { Model } from "mongoose";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Resume } from "../../models/resume.model";
import {
  CreateResumeInputs,
  DeleteResumeInputs,
  GetResumeByIdArgs,
  GetResumesArgs,
  PaginationArgs,
  UpdateResumeInputs,
} from "@bright-resume/dto";

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

    return resume;
  }

  async update(inputs: UpdateResumeInputs): Promise<Resume> {
    const { name, resumeId } = inputs;

    const resume = await this.resumeModel.findById(resumeId);

    resume.name = name;

    await resume.save();

    return resume;
  }

  async delete(inputs: DeleteResumeInputs): Promise<Resume> {
    const { resumeId } = inputs;

    const resume = await this.resumeModel.findById(resumeId);

    await resume.deleteOne();

    return resume;
  }

  async create(inputs: CreateResumeInputs): Promise<Resume> {
    const resume = await this.resumeModel.create({
      userId: "userId",
      ...inputs,
    });

    await resume.save();

    return resume;
  }
}
