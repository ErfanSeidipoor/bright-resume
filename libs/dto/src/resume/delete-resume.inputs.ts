import { IsString } from "class-validator";

export class DeleteResumeResumeInputs {
  @IsString()
  resumeId: string;
}
