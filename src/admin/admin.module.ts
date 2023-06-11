import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
