import { ModelDefinition } from "@nestjs/mongoose";
import { Resume, ResumeSchema } from "./resume.model";

export * from "./resume.model";

export const models: ModelDefinition[] = [
  { name: Resume.name, schema: ResumeSchema },
];
