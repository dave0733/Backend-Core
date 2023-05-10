import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { LoginDto, LoginDto2 } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { SiweMessage, generateNonce } from "siwe";
import { constructTypedData } from "src/utilities/utils/web3";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get("/user-key/:address")
  async getKey(@Param("address") address: string) {
    const oneTimeKey = await this.authService.getOneTimeKey(address);
    const typedData = constructTypedData(oneTimeKey);
    return typedData;
  }

  @Get("/nonce")
  async getNonce() {
    const nonce = generateNonce();
    console.log({ nonce });
    return nonce;
  }

  @Post("/verify-login")
  async verifyLogin(@Body() loginDto: LoginDto2) {
    const { message, signature } = loginDto;
    const siweMessage = new SiweMessage(message);
    console.log({ message, signature });
    try {
      const resp = await siweMessage.verify({ signature });
      console.log({ resp });
      return true;
    } catch (error) {
      return false;
    }
  }
}
