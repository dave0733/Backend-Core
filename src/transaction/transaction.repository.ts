import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrsimaService } from "src/prisma/prisma.service";

@Injectable()
export class TransactionRepository {
  constructor(private prisma: PrsimaService) {}

  createTransaction(createTransactionInput: Prisma.TransactionCreateInput) {
    return this.prisma.transaction.create({ data: createTransactionInput });
  }

  updateTransaction(updateTransactionInput: Prisma.TransactionUpdateArgs) {
    return this.prisma.transaction.update(updateTransactionInput);
  }

  getTransactions(findManyArgs: Prisma.TransactionFindManyArgs) {
    return this.prisma.transaction.findMany(findManyArgs);
  }

  getTransaction(findUniqueArgs: Prisma.TransactionFindUniqueArgs) {
    return this.prisma.transaction.findUnique(findUniqueArgs);
  }
}
