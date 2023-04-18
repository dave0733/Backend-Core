import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { AddUserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private userRep: UserRepository) {}

  async getUserByAddress(address: string) {
    return this.userRep.searchUser({ address });
  }

  async getUserByEmail(email: string) {
    return this.userRep.searchUser({ email });
  }

  async getUser(where: Prisma.UserWhereUniqueInput) {
    return this.userRep.searchUser(where);
  }

  async addUser(addUserDto: AddUserDto) {
    return this.userRep.addUser({
      address: addUserDto.address,
      email: addUserDto.email,
      notifications: ["BUY", "SELL", "SPEND"],
      publicProfile: {
        create: {
          address: addUserDto.address,
          ens: addUserDto.ens,
          username: addUserDto.username,
          description: addUserDto.description,
          pfp: addUserDto.pfp,
          cover: addUserDto.cover,
          metoken: {
            address: addUserDto.metokenAddress,
            name: addUserDto.metokenName,
            symbol: addUserDto.metokenSymbol,
          },
        },
      },
    });
  }

  async getUserPublicProfile(where: Prisma.UserWhereUniqueInput) {
    return this.userRep.getPublicProfile(where);
  }
}
