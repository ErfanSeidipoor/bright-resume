export const TimestampPlugin = (schema) => {
  schema.options.timestamps = true;
  schema.set("timestamps", schema.options.timestamps);
};
