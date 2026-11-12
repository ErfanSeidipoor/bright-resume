import { ModelDefinition } from "@nestjs/mongoose";
import { File, FileSchema } from "./file.model";

export * from "./file.model";

export const models: ModelDefinition[] = [
  { name: File.name, schema: FileSchema },
];
