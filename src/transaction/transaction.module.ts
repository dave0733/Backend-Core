import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [PrismaModule, UserModule],
  providers: [],
})
export class AdminModule {}
