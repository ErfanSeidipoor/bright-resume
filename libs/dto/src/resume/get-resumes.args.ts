import { IsOptional, IsString } from "class-validator";

export class GetResumesResumeArgs {
  @IsOptional()
  @IsString()
  name?: string;
}
