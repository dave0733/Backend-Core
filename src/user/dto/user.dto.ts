import { Role } from "@prisma/client";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

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

  @IsOptional()
  role: Role;

  @ValidateNested({ each: true })
  @Type(() => ServiceInput)
  services: ServiceInput[];
}

class MetokenInput {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  symbol: string;
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
  description: string;

  @ValidateNested()
  @Type(() => MetokenInput)
  metoken: MetokenInput;

  @IsOptional()
  ens: string;

  @IsOptional()
  pfp: string;

  @IsOptional()
  cover: string;
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
