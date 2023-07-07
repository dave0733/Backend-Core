import { Role } from "@prisma/client";

export interface IAddUser {
  address: string;
  email: string;
  username: string;
  metokenAddress: string;
  metokenName: string;
  metokenSymbol: string;
  ens: string;
  description: string;
  pfp: string;
  cover: string;
  github: string;
  twitter: string;
  role: Role;
}
