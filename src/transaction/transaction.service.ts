import { Injectable } from "@nestjs/common";
import { TxStatus } from "src/utilities/constants/transaction";
import { getTransactionStatus } from "src/utilities/utils/web3";
import { AddTransactionDto, CompleteTransactionDto } from "./dto/transaction.dto";
import { TransactionRepository } from "./transaction.repository";

@Injectable()
export class TransactionService {
  constructor(private transactionRep: TransactionRepository) {}

  createPendingTransaction(createTransactionDto: AddTransactionDto) {
    return this.transactionRep.createTransaction({
      to: createTransactionDto.to,
      from: createTransactionDto.from,
      hash: createTransactionDto.hash,
      chainId: createTransactionDto.chainId,
      status: "PENDING",
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
}
