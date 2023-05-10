import { Role } from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddUserDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  ens: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  description: string;

  @IsString()
  pfp: string;

  @IsString()
  cover: string;

  @IsNotEmpty()
  @IsString()
  metokenAddress: string;

  @IsNotEmpty()
  @IsString()
  metokenName: string;

  @IsNotEmpty()
  @IsString()
  metokenSymbol: string;

  @IsOptional()
  role: Role;
}
