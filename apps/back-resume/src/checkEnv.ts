export const checkEnv = () => {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be Defined");
  }

  if (!process.env.DATABASE_NAME) {
    throw new Error("DATABASE_NAME must be Defined");
  }

  if (!process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET must be Defined");
  }
};
