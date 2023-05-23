import { Body, Controller, Post } from "@nestjs/common";
import { TransactionService } from "./transaction.service";
import { AddTransactionDto, CompleteTransactionDto } from "./dto/transaction.dto";
import { RequireAuth } from "src/auth/decorators/auth.decorator";
import { Transaction } from "@prisma/client";

@Controller("/transactions")
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post("/create")
  @RequireAuth()
  createTransaction(@Body() createTransactionDto: AddTransactionDto) {
    return this.transactionService.createPendingTransaction(createTransactionDto);
  }

  @Post("/complete")
  @RequireAuth()
  completeBuyTransaction(@Body() completeTransactionDto: CompleteTransactionDto) {
    return this.transactionService.completePendingTransaction(completeTransactionDto);
  }
}
