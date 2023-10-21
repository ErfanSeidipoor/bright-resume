export const checkEnv = () => {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be Defined");
  }

  if (!process.env.DATABASE_NAME) {
    throw new Error("DATABASE_NAME must be Defined");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be Defined");
  }
};
