import { FileReasonEnum } from "@enums";
import { IsEnum, IsMongoId, IsOptional, ValidateIf } from "class-validator";

export class GetFilesFileInputs {
  @ValidateIf((_, value) => value !== "")
  @IsOptional()
  @IsMongoId()
  resumeId?: string;

  @IsOptional()
  @IsEnum(FileReasonEnum)
  reason?: FileReasonEnum;
}
