import { IsMongoId } from "class-validator";

export class GetFileByIdFileInputs {
  @IsMongoId()
  fileId: string;
}
