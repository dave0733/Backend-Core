export function generateRandomString(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const getShortenedAddress = (address: string, len = 6): string => {
  const shortenedAddress =
    address.substring(0, len + 2) + "..." + address.substring(address.length - len - 1);
  return shortenedAddress;
};
