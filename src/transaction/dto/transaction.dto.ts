import { TransactionType } from "@prisma/client";
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class AddTransactionDto {
  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  hash: string;

  @IsNotEmpty()
  @IsNumberString()
  chainId: string;

  @IsNotEmpty()
  @IsString()
  type: TransactionType;
}

export class CompleteTransactionDto {
  @IsNotEmpty()
  @IsString()
  hash: string;

  @IsNotEmpty()
  @IsNumberString()
  chainId: string;
}
