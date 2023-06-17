import { Module } from "@nestjs/common";
import { TransactionController } from "./transaction.controller";
import { TransactionService } from "./transaction.service";
import { TransactionRepository } from "./transaction.repository";
import { UserModule } from "src/user/user.module";
import { EmailModule } from "src/email/email.module";

@Module({
  imports: [UserModule, EmailModule],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionRepository],
})
export class TransactionModule {}
