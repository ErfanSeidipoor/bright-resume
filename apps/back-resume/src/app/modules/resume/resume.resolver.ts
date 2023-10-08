import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PaginationArgsGQL } from "@bright-resume/back-common/dto";

import { ResumeService } from "./resume.service";
import { UpdateResumeInputsGQL } from "./dto/update-resume.inputs";

import { PaginatedResume, Resume } from "../../models";
import {
  CreateResumeInputsGQL,
  DeleteResumeInputsGQL,
  GetResumeByIdArgsGQL,
  GetResumesArgsGQL,
} from "./dto";

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @Query(() => PaginatedResume, { nullable: false })
  async getResumes(
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getResumesArgs") args: GetResumesArgsGQL
  ) {
    return this.resumeService.getList(paginationArgs, args);
  }

  @Mutation(() => Resume)
  async deleteResume(
    @Args("deleteResumeInputs")
    inputs: DeleteResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.delete(inputs);
  }

  @Mutation(() => Resume)
  async createResume(
    @Args("createResumeInputs")
    inputs: CreateResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.create(inputs);
  }

  @Mutation(() => Resume)
  async updateResume(
    @Args("updateResumeInputs")
    inputs: UpdateResumeInputsGQL
  ): Promise<Resume> {
    return await this.resumeService.update(inputs);
  }

  @Query(() => Resume, { nullable: false })
  async getResumeById(@Args() getProductByIdArgs: GetResumeByIdArgsGQL) {
    return this.resumeService.getById(getProductByIdArgs);
  }
}
