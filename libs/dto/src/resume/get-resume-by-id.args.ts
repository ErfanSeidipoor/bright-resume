import { IsString } from "class-validator";

export class GetResumeByIdArgs {
  @IsString()
  resumeId: string;
}
