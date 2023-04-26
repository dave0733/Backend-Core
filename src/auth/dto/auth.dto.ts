import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  signedMessage: string;
}
