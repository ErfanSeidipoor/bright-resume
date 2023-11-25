import { IsMongoId } from "class-validator";

export class VerifyUploadedFileFileInputs {
  @IsMongoId()
  fileId: string;
}
