export function lowercaseFirstChar(str: string) {
  return `${str[0]!.toLowerCase()}${str.substring(1)}`;
}
