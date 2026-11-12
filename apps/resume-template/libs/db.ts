import mongoose from "mongoose";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
  var mongoose: any;
}

const MONGO_URL = process.env.MONGO_URL!;
const DATABASE_NAME = process.env.DATABASE_NAME!;

if (!MONGO_URL) {
  throw new Error("Please define the MONGO_URL environment variable");
}

if (!DATABASE_NAME) {
  throw new Error("Please define the MONGO_URL environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: DATABASE_NAME,
    };
    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
