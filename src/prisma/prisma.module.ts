import { Global, Module } from "@nestjs/common";
import { PrsimaService } from "./prisma.service";

@Global()
@Module({
  providers: [PrsimaService],
  exports: [PrsimaService],
})
export class PrismaModule {}
