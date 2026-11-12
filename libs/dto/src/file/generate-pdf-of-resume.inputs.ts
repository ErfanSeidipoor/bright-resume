import { IsMongoId } from "class-validator";

export class GeneratePdfOfResumeFileInputs {
  @IsMongoId()
  resumeId: string;
}
