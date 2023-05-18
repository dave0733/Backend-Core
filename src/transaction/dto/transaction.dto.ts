import { TransactionType } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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
  @IsNumber()
  chainId: number;

  @IsNotEmpty()
  @IsString()
  type: TransactionType;
}

export class CompleteTransactionDto {
  @IsNotEmpty()
  @IsString()
  hash: string;

  @IsNotEmpty()
  @IsNumber()
  chainId: number;
}