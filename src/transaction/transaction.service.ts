import { Injectable } from "@nestjs/common";
import { TxStatus } from "src/utilities/constants/transaction";
import { getTransactionStatus } from "src/utilities/utils/web3";
import { AddTransactionDto, CompleteTransactionDto } from "./dto/transaction.dto";
import { TransactionRepository } from "./transaction.repository";
import { Cron } from "@nestjs/schedule";
import { revalidatePage } from "src/utilities/utils/auth";

@Injectable()
export class TransactionService {
  constructor(private transactionRep: TransactionRepository) {}

  createPendingTransaction(createTransactionDto: AddTransactionDto) {
    return this.transactionRep.createTransaction({
      to: createTransactionDto.to,
      from: createTransactionDto.from,
      hash: createTransactionDto.hash,
      chainId: Number(createTransactionDto.chainId),
      status: TxStatus.PENDING,
      type: createTransactionDto.type,
    });
  }

  async completePendingTransaction(completeTransactionDto: CompleteTransactionDto) {
    const { hash } = completeTransactionDto;
    const status = await getTransactionStatus(
      Number(completeTransactionDto.chainId),
      completeTransactionDto.hash,
    );
    if (status === TxStatus.PENDING) return null;
    const transaction = await this.transactionRep.getTransaction({ where: { hash } });
    if (transaction) {
      try {
        revalidatePage(`/profile/$${transaction.to.toLowerCase()}`);
      } catch (error) {
        console.log(error);
      }
    }
    return this.transactionRep.updateTransaction({
      where: { hash },
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
          return this.completePendingTransaction({ hash: tx.hash, chainId: tx.chainId.toString() });
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }
}
