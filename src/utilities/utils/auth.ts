import { generateRandomString } from "./generics";

export function generateOneTimeKey() {
  return `${generateRandomString(8)}-${generateRandomString(6)}-${generateRandomString(8)}`;
}

export const constructRawMessage = (oneTimeKey: string) => {
  return `You are signing this message to login to meTokens. Here is a one-time key for your login -> ${oneTimeKey}`;
};
