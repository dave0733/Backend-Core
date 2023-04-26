import { generateRandomString } from "./generics";

export function generateOneTimeKey() {
  return `${generateRandomString(8)}-${generateRandomString(6)}-${generateRandomString(8)}`;
}
