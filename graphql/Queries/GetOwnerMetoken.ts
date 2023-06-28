import { execute, GetOwnerMetokenDocument } from "../../.graphclient";

export const getOwnerMetoken = async (ownerAddress: string) => {
  const {
    data: { meTokens },
  } = await execute(GetOwnerMetokenDocument, {
    ownerAddress: ownerAddress,
  });
  return meTokens;
};
