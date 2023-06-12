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
import { RequireAuth } from "src/auth/decorators/auth.decorator";
import { IUserWithPublicProfile } from "src/utilities/types.ts/auth";
import { revalidatePage } from "src/utilities/utils/auth";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/profile")
  @RequireAuth()
  getProfile(@GetUser() user: IUserWithPublicProfile) {
    return user;
  }

  @Get("/search")
  search(@Query("item") item: string) {
    return this.userService.search(item);
  }

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

  @Patch("/profile")
  @RequireAuth()
  initializeProfile(@GetUser() user: IUserWithPublicProfile, @Body() addUserDto: AddUserDto) {
    const { address } = user;
    return this.userService.updateProfile(address, addUserDto);
  }

  // @Patch("/profile-public")
  // initializeProfilePub(@Body() addUserDto: UpdateUserDto) {
  //   const { address } = addUserDto;
  //   return this.userService.updateProfile(address, addUserDto);
  // }

  @Get("/list")
  listUsers(@Query("first") first: number, @Query("skip") skip: number) {
    return this.userService.listUsers(first, skip);
  }

  @Post("/test")
  test(@Body() testInput: { address: string; key: string; value: string }) {
    const { address, key, value } = testInput;
    return revalidatePage("hello");
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
  @RequireAuth()
  setAttribute(@GetUser() user: IUserWithPublicProfile, @Body() body: any) {
    const { address } = user;
    const { key, value } = body;
    return this.userService.addUserAttribute(key, value, address);
  }

  @Get("/public-profile/:address")
  getPublicProfile(@Param("address") address: string) {
    return this.userService.getUserPublicProfile({ address });
  }

  @Get("/migration-status/:address")
  migrationStatus(@Param("address") address: string) {
    return this.userService.getUserAttribute(address, "hasMigrated");
  }

  @Get("/message-threshold/:address")
  messageThreshold(@Param("address") address: string) {
    return this.userService.messageThreshold(address);
  }
}
