import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  signedMessage: string;
}

export class LoginDto2 {
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  signature: string;
}
