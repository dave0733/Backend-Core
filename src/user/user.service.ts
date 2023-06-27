import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Role } from "@prisma/client";
import { pinFileToIPFS } from "src/utilities/utils/web3";
import { Readable } from "stream";
import { InitializeUserDto, UpdatePublicProfileDto, UpdateSettingsDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import { PrsimaService } from "src/prisma/prisma.service";
import { generateOneTimeKey, revalidatePage } from "src/utilities/utils/auth";
import { IAddUser } from "src/utilities/types/user";

@Injectable()
export class UserService {
  constructor(private userRep: UserRepository, private prisma: PrsimaService) {}

  async testMethod() {
    // 0x791deaa46a54ab16939b889c74e4cccbb4ab095d
    // 0x8321926c8aae281ef9d8520a772eb1d94a9ec6dd with pp
    // 0x58f34948748c828fc9ae530fb225e10547997758 without pp
    // txHash 0x79379ee8980e29e6bd069a21830f7c35511750f2247c0a2f5767f5d0e9ddc9c3
  }

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

  async addUser(addUserDto: IAddUser) {
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

  async updateProfile(address: string, updateUserDto: UpdatePublicProfileDto) {
    try {
      revalidatePage(`/profile/$${address.toLowerCase()}`);
    } catch (error) {
      console.log(error);
    }
    const newServices: Prisma.ServiceCreateInput[] = updateUserDto.services.map(item => {
      return {
        orbisId: item.id,
        name: item.name,
        description: item.description,
        cost: item.cost,
        token: item.token,
      };
    });
    const updatedUser = await this.userRep.updateUser({
      where: { address },
      data: {
        publicProfile: {
          update: {
            ens: updateUserDto.ens,
            username: updateUserDto.username,
            description: updateUserDto.description,
            pfp: updateUserDto.pfp,
            cover: updateUserDto.cover,
            services: newServices,
            updatedAt: new Date(),
          },
        },
      },
    });
    return updatedUser;
  }

  async initializeProfile(address: string, initializeProfileDto: InitializeUserDto) {
    try {
      revalidatePage(`/profile/$${address.toLowerCase()}`);
    } catch (error) {
      console.log(error);
    }
    return this.userRep.updateUser({
      where: { address },
      data: {
        notifications: ["BUY", "SELL"],
        role: Role.USER,
        publicProfile: {
          update: {
            address,
            ens: initializeProfileDto.ens,
            username: initializeProfileDto.username,
            description: initializeProfileDto.description,
            pfp: initializeProfileDto.pfp,
            cover: initializeProfileDto.cover,
            services: [],
            metoken: {
              update: {
                address: initializeProfileDto.metoken.address,
                name: initializeProfileDto.metoken.name,
                symbol: initializeProfileDto.metoken.symbol,
              },
            },
            updatedAt: new Date(),
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
    if (!user) return true;
    const { attributes } = user;
    const value = attributes[key];
    return value;
  }

  async getMessageSettings(address: string) {
    const user = await this.userRep.getUser({ where: { address: address.toLowerCase() } });
    if (!user) return { gateToken: "DAI", messageThreshold: 0 };
    return { gateToken: user.gateToken, messageThreshold: user.messageThreshold };
  }

  async getSettings(address: string) {
    const user = await this.userRep.getUser({ where: { address: address.toLowerCase() } });
    if (!user) return { gateToken: "DAI", messageThreshold: 0 };
    return {
      email: user.email,
      notifications: user.notifications,
      gateToken: user.gateToken,
      messageThreshold: user.messageThreshold,
    };
  }

  async updateSettings(address: string, updateSettingsDto: UpdateSettingsDto) {
    const user = await this.userRep.updateUser({
      where: { address: address.toLowerCase() },
      data: {
        email: updateSettingsDto.email,
        notifications: updateSettingsDto.notifications,
        gateToken: updateSettingsDto.gateToken,
        messageThreshold: updateSettingsDto.messageThreshold,
      },
    });
    return {
      gateToken: user.gateToken,
      messageThreshold: user.messageThreshold,
      email: user.email,
      notifications: user.notifications,
    };
  }
}
