import { IsMongoId } from "class-validator";
import { CreateResumeResumeInputs } from "./create-resume.inputs";

export class UpdateResumeResumeInputs extends CreateResumeResumeInputs {
  @IsMongoId()
  resumeId: string;
}
