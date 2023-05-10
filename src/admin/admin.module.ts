import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";
import { AdminService } from "./admin.service";

@Module({
  imports: [PrismaModule, UserModule],
  providers: [AdminService],
})
export class AdminModule {}
