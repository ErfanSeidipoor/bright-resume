import { ModelDefinition } from "@nestjs/mongoose";
import { Resume, ResumeSchema } from "./resume.model";
import { Experience, ExperienceSchema } from "./experience.model";

export * from "./resume.model";
export * from "./certification.model";
export * from "./course-work.model";
export * from "./education.model";
export * from "./experience.model";
export * from "./involvement.model";
export * from "./language.model";
export * from "./project.model";
export * from "./resume.model";

export const models: ModelDefinition[] = [
  { name: Resume.name, schema: ResumeSchema },
  { name: Experience.name, schema: ExperienceSchema },
];
