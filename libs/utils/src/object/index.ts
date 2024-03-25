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
