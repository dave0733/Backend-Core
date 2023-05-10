import {
  Body,
  Controller,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserService } from "./user.service";
import { AddUserDto } from "./dto/user.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/upload")
  @UseInterceptors(FileInterceptor("file"))
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1000 })],
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    return this.userService.uploadImage(files);
  }

  @Post("/profile/initialize")
  initializeProfile(@Body() address: string, @Body() addUserDto: AddUserDto) {
    return this.userService.initalizeUserProfile(address, addUserDto);
  }

  @Get("/list")
  listUsers(@Query("first") first: number, @Query("skip") skip: number) {
    return this.userService.listUsers(first, skip);
  }

  @Post("/test")
  test() {
    return "Ok";
  }
}
