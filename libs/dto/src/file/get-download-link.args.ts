import { IsMongoId } from "class-validator";

export class GetDownloadLinkFileInputs {
  @IsMongoId()
  fileId: string;
}
