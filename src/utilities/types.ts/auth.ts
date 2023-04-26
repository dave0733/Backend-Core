import { PublicProfile, User } from "@prisma/client";

export interface IUserWithPublicProfile extends User {
  publicProfile?: PublicProfile;
}

export type ITokens = {
  accessToken: string;
  refreshToken: string;
};
