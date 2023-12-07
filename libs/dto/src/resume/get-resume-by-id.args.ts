import { IsString } from "class-validator";

export class GetResumeByIdResumeArgs {
  @IsString()
  resumeId: string;
}
