import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class AdminService {
  constructor(private userRep: UserRepository) {}

  async getAllAdmins() {
    return this.userRep.getUsers({
      where: {
        role: "ADMIN",
      },
    });
  }

  async getAdmin(address: string) {
    return this.userRep.getUser({
      where: {
        address,
        role: "ADMIN",
      },
    });
  }

  async addAdmin(address: string) {
    return this.userRep.updateUser({
      where: { address },
      data: { role: "ADMIN", updatedAt: new Date() },
    });
  }

  async removeAdmin(address: string) {
    return this.userRep.updateUser({
      where: { address },
      data: { role: "USER", updatedAt: new Date() },
    });
  }

  async verifyAdmin() {
    return { verified: true, message: "User is admin" };
  }

  async getPriorityUsers() {
    return this.userRep.getUsers({
      where: { isPriorityUser: true },
      orderBy: { priorityRank: "desc" },
    });
  }

  async addPriorityUser(address: string) {
    const priorityUsers = await this.getPriorityUsers();
    const availableRank = priorityUsers.length;
    return this.userRep.updateUser({
      where: { address },
      data: { isPriorityUser: true, priorityRank: availableRank, updatedAt: new Date() },
    });
  }

  async removePriorityUser(address: string) {
    await this.userRep.updateUser({
      where: { address },
      data: { isPriorityUser: false, priorityRank: null, updatedAt: new Date() },
    });
    return this.updatePriorityUsers();
  }

  async updatePriorityUsers() {
    const priorityUsers = await this.getPriorityUsers();
    const initial: [(string | number)[], Prisma.UserUpdateInput[]] = [[], []];
    const [uniqueIds, updateUserData] = priorityUsers.reduce(
      (acc: [(string | number)[], Prisma.UserUpdateInput[]], curr: User, index: number) => {
        const { address } = curr;
        acc[0].push(address);
        acc[1].push({ priorityRank: index });
        return acc;
      },
      initial,
    );
    return this.userRep.updateManyDifferentData("address", uniqueIds, updateUserData);
  }
}
