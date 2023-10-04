import { IsString } from "class-validator";

export class DeleteResumeInputs {
  @IsString()
  resumeId: string;
}
