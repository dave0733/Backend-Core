import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrsimaService } from "src/prisma/prisma.service";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrsimaService) {}

  getUsers(where: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(where);
  }

  getUser(where: Prisma.UserFindFirstArgs) {
    return this.prisma.user.findFirst(where);
  }

  getAdmins() {
    return this.prisma.user.findMany({
      where: {
        role: "ADMIN",
      },
    });
  }

  searchUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where, include: { publicProfile: true } });
  }

  addUser(userCreateInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: userCreateInput });
  }

  async getPublicProfile(where: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findFirst({ where, include: { publicProfile: true } });
    return user?.publicProfile;
  }

  updateUser(updateUserInput: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(updateUserInput);
  }

  updateManyDifferentData(
    uniqueIdName: keyof Prisma.UserWhereUniqueInput,
    uniqueIds: (string | number)[],
    updateUserData: Prisma.UserUpdateInput[],
  ) {
    return this.prisma.$transaction(
      uniqueIds.map((key, index) => {
        return this.prisma.user.update({
          where: { [uniqueIdName]: key },
          data: updateUserData[index],
        });
      }),
    );
  }
}
