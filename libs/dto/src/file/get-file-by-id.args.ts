import { IsMongoId } from "class-validator";

export class GetFileByIdFileArgs {
  @IsMongoId()
  fileId: string;
}
