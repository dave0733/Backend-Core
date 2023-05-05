import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "@prisma/client";
import { IUserWithPublicProfile } from "src/utilities/types.ts/auth";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();
    const user: IUserWithPublicProfile = request.user;
    // Get roles passed from guard argument.
    const roles = this.reflector.get<string[]>("roles", ctx.getHandler());
    if (!roles || roles.length === 0) return true; // No roles or empty roles array means method is open for all.
    const requiredRole = roles[0];

    // If required role is Admin, user.role should be admin.
    if (requiredRole === Role.ADMIN) return user.role === Role.ADMIN;
    if (requiredRole === Role.USER) return user.role === Role.USER;

    // If required role is not Admin i.e. is User than it is open for all.
    return true;
  }
}
