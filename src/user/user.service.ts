import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { pinFileToIPFS } from "src/utilities/utils/web3";
import { Readable } from "stream";
import { AddUserDto, UpdateUserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import { PrsimaService } from "src/prisma/prisma.service";
import { generateOneTimeKey } from "src/utilities/utils/auth";

@Injectable()
export class UserService {
  constructor(private userRep: UserRepository, private prisma: PrsimaService) {}

  async getUserByAddress(address: string) {
    return this.userRep.searchUser({ address: address.toLowerCase() });
  }

  async search(item: string) {
    return this.userRep.getUsers({
      include: { publicProfile: true },
      where: {
        OR: [
          { address: { contains: item, mode: "insensitive" } },
          { publicProfile: { username: { contains: item, mode: "insensitive" } } },
          { publicProfile: { ens: { contains: item, mode: "insensitive" } } },
        ],
      },
    });
  }

  async getUser(where: Prisma.UserWhereUniqueInput) {
    return this.userRep.searchUser(where);
  }

  async listUsers(first: number, skip: number) {
    const where: Prisma.UserFindManyArgs = {
      select: { address: true, publicProfile: true, attributes: true },
      orderBy: { priorityRank: "desc" },
      take: first,
      skip,
    };
    return this.userRep.getUsers(where);
  }

  async addUser(addUserDto: AddUserDto) {
    return this.userRep.addUser({
      address: addUserDto.address.toLowerCase(),
      email: addUserDto.email,
      notifications: ["BUY", "SELL", "SPEND"],
      oneTimeKey: "temporary-message",
      role: addUserDto.role,
      publicProfile: {
        create: {
          address: addUserDto.address.toLowerCase(),
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

  async updateProfile(address: string, updateUserDto: UpdateUserDto) {
    return this.userRep.updateUser({
      where: { address },
      data: {
        notifications: ["BUY", "SELL", "SPEND"],
        role: updateUserDto.role,
        publicProfile: {
          update: {
            ens: updateUserDto.ens,
            username: updateUserDto.username,
            description: updateUserDto.description,
            pfp: updateUserDto.pfp,
            cover: updateUserDto.cover,
            metoken: {
              address: updateUserDto.metokenAddress,
              name: updateUserDto.metokenName,
              symbol: updateUserDto.metokenSymbol,
            },
          },
        },
      },
    });
  }

  async getUserPublicProfile(where: Prisma.UserWhereUniqueInput) {
    return this.userRep.getPublicProfile(where);
  }

  async uploadImage(files: Express.Multer.File) {
    const values = Object.values(files);
    const uploadFile = async (file: Express.Multer.File) => {
      const stream = Readable.from(file.buffer);
      const fileName = file.originalname;
      return pinFileToIPFS(stream, fileName);
    };
    try {
      const response = await uploadFile(files);
      return response;
    } catch (error) {
      console.log(error);
      throw new BadRequestException("Failed to upload files");
    }
  }

  async getOneTimeKey(address: string) {
    const user = await this.getUserByAddress(address);
    if (!user) return "";
    const { oneTimeKey } = user;
    return oneTimeKey;
  }

  async updateOneTimeKey(address: string) {
    await this.userRep.updateUser({
      where: { address: address.toLowerCase() },
      data: { oneTimeKey: generateOneTimeKey() },
    });
  }

  async addUserAttribute(key: string, value: string, address: string) {
    const user = await this.userRep.getUser({ where: { address: address.toLowerCase() } });
    if (!user) throw new NotFoundException("User not found with this address");
    const { attributes } = user;
    const newAttributes = {};
    for (const existingKey of Object.keys(attributes)) {
      newAttributes[existingKey] = attributes[key];
    }
    newAttributes[key] = value;
    const updatedUser = await this.userRep.updateUser({
      where: { address: address.toLowerCase() },
      data: { attributes: newAttributes },
    });
    return updatedUser;
  }

  async getUserAttribute(address: string, key: string) {
    const user = await this.userRep.getUser({ where: { address: address.toLowerCase() } });
    if (!user) throw new NotFoundException("User not found with this address");
    const { attributes } = user;
    const value = attributes[key];
    return value;
  }
}
