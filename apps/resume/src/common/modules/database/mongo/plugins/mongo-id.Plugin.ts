export const IdPlugin = (schema) => {
  const transform = function (document, returnValue) {
    if (schema.options.toJSON.translate)
      schema.options.toJSON.translate(document, returnValue);
    returnValue.id = returnValue?._id?.toString();

    delete returnValue?._id;
    delete returnValue?.__v;
  };

  // schema.options.versionKey = false;

  schema.options.toJSON = schema.options.toJSON || {};
  schema.options.toJSON.virtuals = true;
  schema.options.toJSON.transform = transform;
  schema.set("toJSON", schema.options.toJSON);
};
