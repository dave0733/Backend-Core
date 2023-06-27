import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { UserRepository } from "src/user/user.repository";
import { IUserWithPublicProfile } from "src/utilities/types/auth";
import { revalidatePage } from "src/utilities/utils/auth";

@Injectable()
export class AdminService {
  constructor(private userRep: UserRepository) {}

  async getAllAdmins() {
    return this.userRep.getUsers({
      where: { role: "ADMIN" },
      include: { publicProfile: true },
    });
  }

  async getAdmin(address: string) {
    return this.userRep.getUser({
      include: { publicProfile: true },
      where: {
        address,
        role: "ADMIN",
      },
    });
  }

  async addAdmin(address: string) {
    const user = await this.userRep.getUser({ where: { address } });
    if (!user) throw new NotFoundException("User not found with this address");
    return this.userRep.updateUser({
      include: { publicProfile: true },
      where: { address },
      data: { role: "ADMIN", updatedAt: new Date() },
    });
  }

  async removeAdmin(address: string) {
    const user = await this.userRep.getUser({ where: { address } });
    if (!user) throw new NotFoundException("User not found with this address");
    return this.userRep.updateUser({
      include: { publicProfile: true },
      where: { address },
      data: { role: "USER", updatedAt: new Date() },
    });
  }

  async verifyAdmin() {
    return { verified: true, message: "User is admin" };
  }

  async getPriorityUsers() {
    return this.userRep.getUsers({
      include: { publicProfile: true },
      where: { isPriorityUser: true },
      orderBy: { priorityRank: "desc" },
    });
  }

  async addPriorityUser(address: string) {
    const user = await this.userRep.getUser({ where: { address } });
    if (!user) throw new NotFoundException("User not found with this address");
    try {
      revalidatePage(`/discover`);
    } catch (error) {
      console.log(error);
    }
    const priorityUsers = await this.getPriorityUsers();
    const availableRank = priorityUsers.length;
    return this.userRep.updateUser({
      where: { address },
      data: { isPriorityUser: true, priorityRank: availableRank, updatedAt: new Date() },
    });
  }

  async removePriorityUser(address: string) {
    const user = await this.userRep.getUser({ where: { address } });
    if (!user) throw new NotFoundException("User not found with this address");
    try {
      revalidatePage(`/discover`);
    } catch (error) {
      console.log(error);
    }
    await this.userRep.updateUser({
      where: { address },
      data: { isPriorityUser: false, priorityRank: -1, updatedAt: new Date() },
    });
    return this.updatePriorityUsers();
  }

  async reorderPriorityUsers(newList: IUserWithPublicProfile[]) {
    try {
      revalidatePage(`/discover`);
    } catch (error) {
      console.log(error);
    }
    const initial: [(string | number)[], Prisma.UserUpdateInput[]] = [[], []];
    const [uniqueIds, updateUserData] = newList.reduce(
      (acc: [(string | number)[], Prisma.UserUpdateInput[]], curr: User) => {
        const { address } = curr;
        acc[0].push(address);
        acc[1].push({ priorityRank: curr.priorityRank });
        return acc;
      },
      initial,
    );
    return this.userRep.updateManyDifferentData("address", uniqueIds, updateUserData);
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
