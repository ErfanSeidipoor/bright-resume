import { User } from "src/entities";

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
