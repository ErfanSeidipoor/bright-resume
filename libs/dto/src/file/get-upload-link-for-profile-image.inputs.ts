import { IsMongoId, IsString } from "class-validator";

export class GetUploadLinkForProfileImageFileInputs {
  @IsString()
  // @IsMongoId()
  resumeId: string;
}
