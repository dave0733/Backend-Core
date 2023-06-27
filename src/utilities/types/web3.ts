import { BigNumber, providers } from "ethers";

export interface TransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  root?: string;
  gasUsed: BigNumber;
  logsBloom: string;
  blockHash: string;
  transactionHash: string;
  logs: Array<TransactionReceiptLog>;
  blockNumber: number;
  confirmations: number;
  cumulativeGasUsed: BigNumber;
  effectiveGasPrice: BigNumber;
  byzantium: boolean;
  type: number;
  status?: number;
}

export interface TransactionReceiptLog {
  topics: Array<string>;
}

export interface SendTransactionResult {
  hash: providers.TransactionResponse["hash"];
  wait: providers.TransactionResponse["wait"];
}
