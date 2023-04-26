import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { LoginDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get("/user-key/:address")
  getKey(@Param("address") address: string) {
    return this.authService.getOneTimeKey(address);
  }
}
