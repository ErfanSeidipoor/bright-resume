export const assignDefinedProps = <T>(obj: T, props: Partial<T>) => {
  for (const key in props) {
    const value = props[key];
    if (typeof value !== "undefined") {
      obj[key] = value!;
    }
  }
  return obj;
};

export const assignProps = <T>(obj: T, props: Partial<T>) => {
  for (const key in props) {
    console.log({ key, value: props[key] });

    const value = props[key];
    obj[key] = value!;
  }
  return obj;
};

export const toCamelCase = (value: string): string =>
  value.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = { [key: string]: any };

export const removeKeyFromObject = <T extends AnyObject>(
  obj: T,
  keyToRemove: string
): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Base case: Not an object or null, return as is
  }

  const result: AnyObject = Array.isArray(obj) ? [] : {};

  for (const [key, value] of Object.entries(obj)) {
    if (key !== keyToRemove) {
      result[key] =
        typeof value === "object" && value !== null
          ? removeKeyFromObject(value, keyToRemove)
          : value;
    }
  }

  return result as T;
};

export const getNestedValue = <T extends AnyObject>(
  obj: T,
  key: string
): string | undefined => {
  if (typeof obj !== "object" || obj === null) {
    return undefined;
  }

  if (key in obj) {
    return obj[key];
  }

  for (const childKey in obj) {
    const value = getNestedValue(obj[childKey], key);
    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
};
