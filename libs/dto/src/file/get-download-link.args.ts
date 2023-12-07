import { IsMongoId } from "class-validator";

export class GetDownloadLinkFileArgs {
  @IsMongoId()
  fileId: string;
}
