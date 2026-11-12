export function isNumeric(input: string): boolean {
  if (typeof input != "string") return false;
  return !isNaN(parseFloat(input));
}

export function convertToNumber(input: string): number | undefined {
  if (typeof input !== "string") return undefined;
  const number = parseFloat(input);
  return isNaN(number) ? undefined : number;
}

export function convertToInteger(input: string): number | undefined {
  if (typeof input !== "string") return undefined;
  const integer = parseInt(input, 10);
  return isNaN(integer) ? undefined : integer;
}
