import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { File, PaginatedFile } from "@@back-file/app/models";
import { UserId } from "@back-common/decorators";
import {
  GetDownloadLinkFileInputsGQL,
  GetFileByIdFileInputsGQL,
  GetFilesFileInputsGQL,
  GetUploadLinkForProfileImageFileInputsGQL,
  VerifyUploadedFileFileInputsGQL,
  PaginationArgsGQL,
  GeneratePdfOfResumeFileInputsGQL,
} from "@back-common/dto";
import { GqlAuthGuard } from "@back-common/guards";
import { UseGuards } from "@nestjs/common";
import { FileService } from "./file.service";

@Resolver(() => File)
export class FileResolver {
  constructor(private fileService: FileService) {}

  @Query(() => PaginatedFile, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getFiles(
    @UserId() userId: string,
    @Args("paginationArgs") paginationArgs: PaginationArgsGQL,
    @Args("getFilesFileInputs") args: GetFilesFileInputsGQL
  ) {
    return this.fileService.getList(userId, args, paginationArgs);
  }

  @Query(() => File, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getFileById(
    @UserId() userId: string,
    @Args("getFileByIdFileInputs") args: GetFileByIdFileInputsGQL
  ) {
    return this.fileService.getById(userId, args);
  }

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async verifyUploadedFile(
    @UserId() userId: string,
    @Args("verifyUploadedFileFileInputs")
    inputs: VerifyUploadedFileFileInputsGQL
  ): Promise<File> {
    return this.fileService.verifyUploadedFile(userId, inputs);
  }

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async getUploadLinkForProfileImage(
    @UserId() userId: string,
    @Args("getUploadLinkForProfileImageFileInputs")
    inputs: GetUploadLinkForProfileImageFileInputsGQL
  ): Promise<File> {
    return this.fileService.getUploadLinkForProfileImage(userId, inputs);
  }

  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async generatePdfOfResume(
    @UserId() userId: string,
    @Args("generatePdfOfResumeFileInputs")
    inputs: GeneratePdfOfResumeFileInputsGQL
  ): Promise<string> {
    return this.fileService.generatePdfOfResume(userId, inputs);
  }

  @Query(() => String)
  @UseGuards(GqlAuthGuard)
  async getDownloadLink(
    @UserId() userId: string,
    @Args("getDownloadLinkFileInputs")
    args: GetDownloadLinkFileInputsGQL
  ): Promise<string> {
    return this.fileService.getDownloadLink(userId, args);
  }
}
