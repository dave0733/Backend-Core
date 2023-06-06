import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { LoginDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
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
}
