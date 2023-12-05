import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PaginationArgsGQL } from "@bright-resume/back-common/dto";
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
  async getResumes(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("GetResumesResumeArgs") args: GetResumesResumeArgsGQL
  ) {
    return this.resumeService.getList(paginationArgs, args);
  }

  @Mutation(() => Resume)
  async deleteResume(
    @Args("DeleteResumeResumeInputs")
    inputs: DeleteResumeResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.delete(inputs);
  }

  @Mutation(() => Resume)
  async createResume(
    @Args("CreateResumeResumeInputs")
    inputs: CreateResumeResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.create(inputs);
  }

  @Mutation(() => Resume)
  async updateResume(
    @Args("UpdateResumeResumeInputs")
    inputs: UpdateResumeResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.update(inputs);
  }

  @Query(() => Resume, { nullable: false })
  async getResumeById(@Args() getProductByIdArgs: GetResumeByIdResumeArgsGQL) {
    return this.resumeService.getById(getProductByIdArgs);
  }
}
