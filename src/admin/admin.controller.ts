import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Role } from "@prisma/client";
import { RequireAuth } from "src/auth/decorators/auth.decorator";
import { AdminService } from "./admin.service";
import { UpdateRanksDto } from "./dto/admin.dto";

@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get("/list")
  @RequireAuth(Role.ADMIN)
  getAdminList() {
    return this.adminService.getAllAdmins();
  }

  @Post("/:address")
  @RequireAuth(Role.ADMIN)
  addAdmin(@Param("address") address: string) {
    return this.adminService.addAdmin(address);
  }

  @Delete("/:address")
  @RequireAuth(Role.ADMIN)
  removeAdmin(@Param("address") address: string) {
    return this.adminService.removeAdmin(address);
  }

  @Get("/priorityOwners/list")
  @RequireAuth(Role.ADMIN)
  getPriorityOwners() {
    return this.adminService.getPriorityUsers();
  }

  @Patch("/priorityOwners/list")
  @RequireAuth(Role.ADMIN)
  reOrderPriorityOwners(@Body() updateRanksDto: any) {
    const { newList } = updateRanksDto;
    return this.adminService.reorderPriorityUsers(newList);
  }

  @Post("/priorityOwners/:address")
  @RequireAuth(Role.ADMIN)
  addPriorityOwner(@Param("address") address: string) {
    return this.adminService.addPriorityUser(address);
  }

  @Delete("/priorityOwners/:address")
  @RequireAuth(Role.ADMIN)
  removePriorityOwners(@Param("address") address: string) {
    return this.adminService.removePriorityUser(address);
  }
}
