import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PaginationArgsGQL } from "@bright-resume/back-common/dto";
import { UseGuards } from "@nestjs/common";
import { UserId } from "@back-common/decorators";
import { GqlAuthGuard } from "@back-common/guards";
import { ResumeService } from "./resume.service";
import { PaginatedResume, Resume } from "../../models";

import {
  CreateResumeResumeInputsGQL,
  DeleteResumeResumeInputsGQL,
  GetResumeByIdResumeArgsGQL,
  GetResumesResumeArgsGQL,
  UpdateResumeResumeInputsGQL,
} from "@back-common/dto";

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @Query(() => PaginatedResume, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getResumes(
    @UserId() userId: string,
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getResumesResumeArgs") args: GetResumesResumeArgsGQL
  ) {
    return this.resumeService.getResumes(userId, paginationArgs, args);
  }

  @Mutation(() => Resume)
  @UseGuards(GqlAuthGuard)
  async deleteResume(
    @UserId() userId: string,
    @Args("deleteResumeResumeInputs")
    inputs: DeleteResumeResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.delete(userId, inputs);
  }

  @Mutation(() => Resume)
  @UseGuards(GqlAuthGuard)
  async createResume(
    @UserId() userId: string,
    @Args("createResumeResumeInputs")
    inputs: CreateResumeResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.create(userId, inputs);
  }

  @Mutation(() => Resume)
  @UseGuards(GqlAuthGuard)
  async updateResume(
    @UserId() userId: string,
    @Args("updateResumeResumeInputs")
    inputs: UpdateResumeResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.update(userId, inputs);
  }

  @Query(() => Resume, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getResumeById(
    @UserId() userId: string,
    @Args() getResumeByIdArgs: GetResumeByIdResumeArgsGQL
  ) {
    return this.resumeService.getById(userId, getResumeByIdArgs);
  }
}
