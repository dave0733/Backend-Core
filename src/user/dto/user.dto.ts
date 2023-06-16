import { Role } from "@prisma/client";
import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

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

export class UpdatePublicProfileDto {
  @IsOptional()
  username: string;

  @IsOptional()
  ens: string;

  @IsOptional()
  description: string;

  @IsOptional()
  pfp: string;

  @IsOptional()
  cover: string;

  @ValidateNested({ each: true })
  @Type(() => ServiceInput)
  services: ServiceInput[];
}

class ServiceInput {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @IsNotEmpty()
  @IsString()
  token: string;
}

export class InitializeUserDto {
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

  @IsOptional()
  ens: string;

  @IsOptional()
  description: string;

  @IsOptional()
  pfp: string;

  @IsOptional()
  cover: string;

  @IsOptional()
  notifications: string[];
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

export class UpdateSettingsDto {
  @IsOptional()
  @IsString()
  gateToken: string;

  @IsOptional()
  @IsNumber()
  messageThreshold: number;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  notifications: string[];
}
