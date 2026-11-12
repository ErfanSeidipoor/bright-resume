import { IsOptional, IsString } from "class-validator";

export class GetResumesResumeArgs {
  @IsOptional()
  @IsString()
  title?: string;
}
