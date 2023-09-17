import { Model } from "mongoose";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Resume } from "../../models/resume.model";

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<Resume>) {}

  async getList(): Promise<Resume[]> {
    return await this.resumeModel.find();
  }

  async create(): Promise<Resume> {
    return await this.resumeModel.create({
      userId: "userId",
      names: [
        {
          firstName: "firstName",
          lastName: "lastName",
        },
      ],
    });
  }
}
