import { IsUUID } from "class-validator";
import { IsString, MaxLength, MinLength } from "class-validator";

export class UpdateResumeInputs {
  @IsUUID()
  resumeId: string;

  @IsString()
  @MinLength(10)
  @MaxLength(50)
  name: string;
}
