import { IsMongoId } from "class-validator";
import { CreateResumeResumeInputs } from "../resume";

export class GeneratePdfOfResumeFileInputs extends CreateResumeResumeInputs {
  @IsMongoId()
  resumeId: string;
}
