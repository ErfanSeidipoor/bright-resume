import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateResumeInputs {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;
}
