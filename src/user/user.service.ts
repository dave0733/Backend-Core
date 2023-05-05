import { BadRequestException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { pinFileToIPFS } from "src/utilities/utils/web3";
import { Readable } from "stream";
import { AddUserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import { Cron } from "@nestjs/schedule";
import { PrsimaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private userRep: UserRepository, private prisma: PrsimaService) {}

  async getUserByAddress(address: string) {
    return this.userRep.searchUser({ address });
  }

  // async getUserByEmail(email: string) {
  //   return this.userRep.searchUser({ email });
  // }

  async getUser(where: Prisma.UserWhereUniqueInput) {
    return this.userRep.searchUser(where);
  }

  async addUser(addUserDto: AddUserDto) {
    return this.userRep.addUser({
      address: addUserDto.address,
      email: addUserDto.email,
      notifications: ["BUY", "SELL", "SPEND"],
      oneTimeKey: "temporary-message",
      role: addUserDto.role,
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

  async initalizeUserProfile(address: string, addUserDto: AddUserDto) {
    return this.userRep.updateUser({
      where: { address },
      data: {
        address: addUserDto.address,
        email: addUserDto.email,
        notifications: ["BUY", "SELL", "SPEND"],
        role: addUserDto.role,
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
      },
    });
  }

  async getUserPublicProfile(where: Prisma.UserWhereUniqueInput) {
    return this.userRep.getPublicProfile(where);
  }

  async uploadImage(files: Express.Multer.File[]) {
    const values = Object.values(files);
    const uploadFile = async (file: Express.Multer.File) => {
      const stream = Readable.from(file.buffer);
      const fileName = file.originalname;
      return pinFileToIPFS(stream, fileName);
    };
    try {
      const response = await Promise.all(values.map(file => uploadFile(file)));
      return response;
    } catch (error) {
      throw new BadRequestException("Failed to upload files");
    }
  }

  async getOneTimeKey(address: string) {
    const user = await this.getUserByAddress(address);
    if (!user) return "";
    const { oneTimeKey } = user;
    return oneTimeKey;
  }
}
