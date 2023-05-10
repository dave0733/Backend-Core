import { PublicProfile, User } from "@prisma/client";

export interface IUserWithPublicProfile extends User {
  publicProfile?: PublicProfile;
}

export type ITokens = {
  accessToken: string;
  refreshToken: string;
};

export interface ITypedData {
  domain: {
    chainId: string;
    name: string;
  };
  types: {
    "MeTokens Login Message": {
      name: string;
      type: string;
    }[];
  };
  value: {
    message: string;
  };
}
