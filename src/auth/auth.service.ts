import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { verifySignedMessage } from "src/utilities/utils/web3";
import { LoginDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import { ITokens, IUserWithPublicProfile } from "src/utilities/types.ts/auth";
import {
  ACCESS_TOKEN_EXP,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXP,
  REFRESH_TOKEN_SECRET,
} from "src/utilities/constants/auth";
import { Role } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { address, signedMessage } = loginDto;
    // const rawMessage = await this.userService.getOneTimeKey(address);
    const rawMessage = "temporary-message";
    const isVerified = verifySignedMessage(address, rawMessage, signedMessage);
    if (!isVerified) throw new UnauthorizedException("Message signature could not be verified");
    const user = await this.userService.getUser({ address });
    if (!user) throw new UnauthorizedException("User not found");
    const tokens = await this.getTokens(user);
    return {
      user,
      tokens,
    };
  }

  async getOneTimeKey(address: string) {
    const oneTimeKey = await this.userService.getOneTimeKey(address);
    if (oneTimeKey !== "") return oneTimeKey;
    const guest = await this.userService.addUser({
      address: address,
      email: "",
      ens: "",
      username: "",
      description: "",
      pfp: "",
      cover: "",
      metokenAddress: "",
      metokenName: "",
      metokenSymbol: "",
      role: Role.GUEST,
    });
    return guest.oneTimeKey;
  }

  async getTokens(user: IUserWithPublicProfile): Promise<ITokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(user, {
        secret: ACCESS_TOKEN_SECRET,
        expiresIn: ACCESS_TOKEN_EXP,
      }),
      this.jwtService.signAsync(user, {
        secret: REFRESH_TOKEN_SECRET,
        expiresIn: REFRESH_TOKEN_EXP,
      }),
    ]);
    return { accessToken: at, refreshToken: rt };
  }
}
