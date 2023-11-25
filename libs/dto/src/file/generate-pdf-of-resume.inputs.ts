import { IsMongoId, IsString } from "class-validator";

// export class GeneratePdfOfResumeFileInputs extends CreateResumeExperienceItemResumeInputs {}
export class GeneratePdfOfResumeFileInputs {
  // @IsMongoId()
  @IsString()
  resumeId: string;
}
