import { IsString } from "class-validator";
import { CreateResumeInputs } from "./create-resume.inputs";

export class UpdateResumeInputs extends CreateResumeInputs {
  @IsString()
  resumeId: string;
}
