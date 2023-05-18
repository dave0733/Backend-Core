import {
  Body,
  Controller,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserService } from "./user.service";
import { AddUserDto } from "./dto/user.dto";
import { GetUser } from "src/auth/decorators/getUser.decorator";
import { User } from "@prisma/client";
import { RequireAuth } from "src/auth/decorators/auth.decorator";
import { IUserWithPublicProfile } from "src/utilities/types.ts/auth";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/upload")
  @RequireAuth()
  @UseInterceptors(FileInterceptor("file"))
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 100000 })],
      }),
    )
    files: Express.Multer.File,
  ) {
    return this.userService.uploadImage(files);
  }

  @Post("/profile/initialize")
  @RequireAuth()
  initializeProfile(@GetUser() user: IUserWithPublicProfile, @Body() addUserDto: AddUserDto) {
    const { address } = user;
    return this.userService.initalizeUserProfile(address, addUserDto);
  }

  @Get("/list")
  listUsers(@Query("first") first: number, @Query("skip") skip: number) {
    return this.userService.listUsers(first, skip);
  }

  @Post("/test")
  test(@Body() testInput: { address: string; key: string; value: string }) {
    const { address, key, value } = testInput;
    return this.userService.addUserAttribute(key, value, address);
  }

  @Get("/attribute")
  @RequireAuth()
  userAttribute(
    @GetUser() user: IUserWithPublicProfile,
    @Query("attributeName") attributeName: string,
  ) {
    const { address } = user;
    return this.userService.getUserAttribute(address, attributeName);
  }

  @Patch("/attribute")
  setAttribute(@GetUser() user: IUserWithPublicProfile, @Body() body: any) {
    const { address } = user;
    const { key, value } = body;
    return this.userService.addUserAttribute(key, value, address);
  }
}
