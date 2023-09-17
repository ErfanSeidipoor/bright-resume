import { Mutation, Query, Resolver } from "@nestjs/graphql";

import { ResumeService } from "./resume.service";
import { Resume } from "../../models";

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @Query(() => [Resume], { nullable: false })
  async getResumes() {
    return this.resumeService.getList();
  }

  @Mutation(() => Resume)
  async createResume(): Promise<Resume> {
    return await this.resumeService.create();
  }
}
