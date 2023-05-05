import { Injectable } from "@nestjs/common";
import { TxStatus } from "src/utilities/constants/transaction";
import { getTransactionStatus } from "src/utilities/utils/web3";
import { AddTransactionDto, CompleteTransactionDto } from "./dto/transaction.dto";
import { TransactionRepository } from "./transaction.repository";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class TransactionService {
  constructor(private transactionRep: TransactionRepository) {}

  createPendingTransaction(createTransactionDto: AddTransactionDto) {
    return this.transactionRep.createTransaction({
      to: createTransactionDto.to,
      from: createTransactionDto.from,
      hash: createTransactionDto.hash,
      chainId: createTransactionDto.chainId,
      status: TxStatus.PENDING,
      type: createTransactionDto.type,
    });
  }

  async completePendingTransaction(completeTransactionDto: CompleteTransactionDto) {
    const status = await getTransactionStatus(
      completeTransactionDto.chainId,
      completeTransactionDto.hash,
    );
    if (status === TxStatus.PENDING) return null;
    return this.transactionRep.updateTransaction({
      where: { hash: completeTransactionDto.hash },
      data: { status: TxStatus.SUCCESS },
    });
  }

  @Cron("0 0 0 * * *")
  async completeTransactionsCron() {
    console.log("Checking pending transactions");
    const pendingTransaction = await this.transactionRep.getTransactions({
      where: { status: TxStatus.PENDING },
      take: 20,
    });
    console.log(`Found ${pendingTransaction.length} pending transactions`);
    try {
      await Promise.all(
        pendingTransaction.map(tx => {
          return this.completePendingTransaction({ hash: tx.hash, chainId: tx.chainId });
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }
}
