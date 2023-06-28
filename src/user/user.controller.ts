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
import { InitializeUserDto, UpdatePublicProfileDto, UpdateSettingsDto } from "./dto/user.dto";
import { GetUser } from "src/auth/decorators/getUser.decorator";
import { RequireAuth } from "src/auth/decorators/auth.decorator";
import { IUserWithPublicProfile } from "src/utilities/types/auth";

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
        validators: [new MaxFileSizeValidator({ maxSize: 10000000 })],
      }),
    )
    files: Express.Multer.File,
  ) {
    return this.userService.uploadImage(files);
  }

  @Patch("/initialize-profile")
  @RequireAuth()
  initializeProfile(
    @GetUser() user: IUserWithPublicProfile,
    @Body() initializeUserDto: InitializeUserDto,
  ) {
    const { address } = user;
    return this.userService.initializeProfile(address, initializeUserDto);
  }

  @Patch("/update-profile")
  @RequireAuth()
  updateProfile(
    @GetUser() user: IUserWithPublicProfile,
    @Body() updateUserDto: UpdatePublicProfileDto,
  ) {
    const { address } = user;
    return this.userService.updateProfile(address, updateUserDto);
  }

  @Get("/list")
  listUsers(@Query("first") first: number, @Query("skip") skip: number) {
    return this.userService.listUsers(first, skip);
  }

  @Post("/test")
  async test() {
    return "Test endpoint";
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

  @Patch("/settings")
  @RequireAuth()
  settings(@GetUser() user: IUserWithPublicProfile, @Body() updateSettingsDto: UpdateSettingsDto) {
    const { address } = user;
    return this.userService.updateSettings(address, updateSettingsDto);
  }

  @Get("/message-settings/:address")
  getMessageSettings(@Param("address") address: string) {
    return this.userService.getMessageSettings(address);
  }

  @Get("/settings/:address")
  @RequireAuth()
  getSettings(@Param("address") address: string) {
    return this.userService.getSettings(address);
  }
}
