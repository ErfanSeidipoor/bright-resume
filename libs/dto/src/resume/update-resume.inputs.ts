import { IsUUID } from "class-validator";
import { CreateResumeInputs } from "./create-resume.inputs";

export class UpdateResumeInputs extends CreateResumeInputs {
  @IsUUID()
  resumeId: string;
}
