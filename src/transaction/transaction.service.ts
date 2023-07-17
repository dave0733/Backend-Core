import { Injectable } from "@nestjs/common";
import { TxStatus } from "src/utilities/constants/transaction";
import { getTransactionStatus } from "src/utilities/utils/web3";
import { AddTransactionDto, CompleteTransactionDto } from "./dto/transaction.dto";
import { TransactionRepository } from "./transaction.repository";
import { Cron } from "@nestjs/schedule";
import { revalidatePage } from "src/utilities/utils/auth";
import { EmailService } from "src/email/email.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class TransactionService {
  constructor(
    private transactionRep: TransactionRepository,
    private emailService: EmailService,
    private userService: UserService,
  ) {}

  async test() {
    // 0x791deaa46a54ab16939b889c74e4cccbb4ab095d
    // 0x8321926c8aae281ef9d8520a772eb1d94a9ec6dd with pp
    // 0x58f34948748c828fc9ae530fb225e10547997758 without pp
    // SELL txHash 0x79379ee8980e29e6bd069a21830f7c35511750f2247c0a2f5767f5d0e9ddc9c3
    // BUY txHash 0x12ca759b56bc20810abc05997c02cdf00f039eacf180baeddb7ee43ba6c45a92
    const tx = await this.transactionRep.getTransaction({
      where: { hash: "0x12ca759b56bc20810abc05997c02cdf00f039eacf180baeddb7ee43ba6c45a92" },
    });
    const metokenOwner = await this.userService.getUser({
      address: "0x791deaa46a54ab16939b889c74e4cccbb4ab095d",
    });
    const buyerOrSeller = await this.userService.getUser({
      address: "0x8321926c8aae281ef9d8520a772eb1d94a9ec6dd",
    });
    const resp = await this.emailService.handleTransactionEmail(tx, buyerOrSeller, metokenOwner);
    return resp;
  }

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
        revalidatePage(`/profile/${transaction.to.toLowerCase()}`);
      } catch (error) {
        console.log(error);
      }
    }
    const updatedTransaction = await this.transactionRep.updateTransaction({
      where: { hash },
      data: { status: TxStatus.SUCCESS },
    });
    // In both buy/sell transaction, to is the metoken owner.
    const metokenOwner = await this.userService.getUser({ address: transaction.to });
    // In both buy/sell transaction, from is the buyer/receiver.
    const buyerOrSeller = await this.userService.getUser({ address: transaction.from });
    await this.emailService.handleTransactionEmail(updatedTransaction, metokenOwner, buyerOrSeller);
    return updatedTransaction;
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
