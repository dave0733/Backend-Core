import { Role } from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddUserDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  metokenAddress: string;

  @IsNotEmpty()
  @IsString()
  metokenName: string;

  @IsNotEmpty()
  @IsString()
  metokenSymbol: string;

  @IsString()
  @IsOptional()
  ens: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  pfp: string;

  @IsString()
  @IsOptional()
  cover: string;

  @IsOptional()
  role: Role;
}

export class UpdateUserDto {
  // @IsNotEmpty()
  // @IsString()
  // email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  metokenAddress: string;

  @IsNotEmpty()
  @IsString()
  metokenName: string;

  @IsNotEmpty()
  @IsString()
  metokenSymbol: string;

  @IsString()
  @IsOptional()
  ens: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  pfp: string;

  @IsString()
  @IsOptional()
  cover: string;

  @IsOptional()
  role: Role;
}

export class AddAttributePublicDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  value: any;
}
