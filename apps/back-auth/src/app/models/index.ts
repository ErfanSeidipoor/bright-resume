import { ModelDefinition } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.model";

export * from "./user.model";

export const models: ModelDefinition[] = [
  { name: User.name, schema: UserSchema },
];
