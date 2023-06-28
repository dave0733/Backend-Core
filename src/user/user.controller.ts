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
import { revalidatePage } from "src/utilities/utils/auth";
import { PrsimaService } from "src/prisma/prisma.service";
import { Role } from "@prisma/client";
import { getOwnerMetoken } from "graphql/Queries/GetOwnerMetoken";

@Controller("user")
export class UserController {
  constructor(private userService: UserService, private prismaService: PrsimaService) {}

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
  async test(@Body() testInput: { address: string; key: string; value: string }) {
    const users: any = await this.prismaService.users.findRaw();
    // const APIURL = "https://api.studio.thegraph.com/query/35797/metokens-core-goerli/v0.2.0";

    const newUsers = await Promise.all(
      users.map(async (user: any) => {
        const metokensArray = await getOwnerMetoken(user.address);
        const ownerMetokenAddress = metokensArray.length > 0 ? metokensArray[0].id : "";
        const ownerMetokenName = metokensArray.length > 0 ? metokensArray[0].name : "";
        const ownerMetokenSymbol = metokensArray.length > 0 ? metokensArray[0].symbol : "";
        const item = {
          address: user.address || "",
          email: user.email || "",
          notifications: getNotifications(user),
          oneTimeKey: generateOneTimeKey(),
          isPriorityUser: !!user.isPriorityuser,
          attributes: {},
          priorityRank: !!user.isPriorityuser && !!user.rank ? user.rank : -1,
          gateToken: user.gateToken,
          role: user.isAdmin ? Role.ADMIN : ownerMetokenAddress === "" ? Role.GUEST : Role.USER,
          publicProfile: {
            address: user.address || "",
            ens: user.ens || "",
            username: user.name || "",
            description: user.description || "",
            pfp: getProfileImage(user),
            cover: getCoverImage(user),
            metoken: {
              address: ownerMetokenAddress,
              name: ownerMetokenName,
              symbol: ownerMetokenSymbol,
            },
          },
        };
        return await this.prismaService.user.create({
          data: {
            address: item.address,
            email: item.email,
            notifications: item.notifications,
            oneTimeKey: item.oneTimeKey,
            role: item.role,
            isPriorityUser: item.isPriorityUser,
            priorityRank: item.priorityRank,
            publicProfile: {
              create: {
                address: item.publicProfile.address,
                ens: item.publicProfile.ens,
                username: item.publicProfile.username,
                description: item.publicProfile.description,
                pfp: item.publicProfile.pfp,
                cover: item.publicProfile.cover,
                metoken: item.publicProfile.metoken,
              },
            },
          },
        });
      }),
    );

    // const newUsers = await Promise.all(
    //   users.map(async (user: any) => {
    //     const metokensArray = await getOwnerMetoken(user.address);
    //     const ownerMetokenAddress = metokensArray.length > 0 ? metokensArray[0].id : "";
    //     const ownerMetokenName = metokensArray.length > 0 ? metokensArray[0].name : "";
    //     const ownerMetokenSymbol = metokensArray.length > 0 ? metokensArray[0].symbol : "";
    //     return {
    //       address: user.address || "",
    //       email: user.email || "",
    //       notifications: getNotifications(user),
    //       oneTimeKey: generateOneTimeKey(),
    //       isPriorityUser: !!user.isPriorityuser,
    //       attributes: {},
    //       priorityRank: !!user.isPriorityuser && !!user.rank ? user.rank : -1,
    //       gateToken: user.gateToken,
    //       role: user.isAdmin ? Role.ADMIN : ownerMetokenAddress === "" ? Role.GUEST : Role.USER,
    //       publicProfile: {
    //         address: user.address || "",
    //         ens: user.ens || "",
    //         username: user.name || "",
    //         description: user.description || "",
    //         pfp: getProfileImage(user),
    //         cover: getCoverImage(user),
    //         metoken: {
    //           address: ownerMetokenAddress,
    //           name: ownerMetokenName,
    //           symbol: ownerMetokenSymbol,
    //         },
    //       },
    //     };
    //   }),
    // );

    return newUsers;

    // return this.prismaService.user.create({
    //   data: {
    //     address: "123",
    //     email: "123",
    //     role: Role.USER,
    //     oneTimeKey: generateOneTimeKey(),
    //   },
    // });

    // return await this.prismaService.$transaction(
    //   newUsers.map((user: any) => {
    //     return this.prismaService.user.create({
    //       data: {
    //         address: user.address,
    //         email: user.email,
    //         notifications: user.notifications,
    //         oneTimeKey: user.oneTimeKey,
    //         role: user.role,
    //         isPriorityUser: user.isPriorityuser,
    //         priorityRank: user.priorityRank,
    //         publicProfile: {
    //           create: {
    //             address: user.publicProfile.address,
    //             ens: user.publicProfile.ens,
    //             username: user.publicProfile.username,
    //             description: user.publicProfile.description,
    //             pfp: user.publicProfile.pfp,
    //             cover: user.publicProfile.cover,
    //             metoken: user.publicProfile.metoken,
    //           },
    //         },
    //       },
    //     });
    //   }),
    // );
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

//
//
//
//
// Utilities

export function generateOneTimeKey() {
  return `${generateRandomString(8)}-${generateRandomString(6)}-${generateRandomString(8)}`;
}

export function generateRandomString(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getNotifications = (user: any) => {
  if (!user.notificationPreferences) return [];
  const arr = Object.entries(user.notificationPreferences)
    .filter(([key, value]) => value)
    .map(([key, value]) => key.toUpperCase());
  return arr;
};

const getRole = (user: any) => {
  if (user.isAdmin) return Role.ADMIN;
  if (getMetokenObject(user)) return Role.USER;
  return Role.GUEST;
};

const getProfileImage = (user: any) => {
  if (user.pfp && user.pfp !== "") return user.pfp;
  if (user.image?.original?.src && user.image?.original?.src !== "") return user.image.original.src;
  return "";
};

const getCoverImage = (user: any) => {
  if (user.cover && user.cover !== "") return user.cover;
  if (user.background?.original?.src && user.background?.original?.src !== "")
    return user.background.original.src;
  return "";
};

const getMetokenObject = (user: any) => {
  return {
    address: user.metoken?.address || "",
    name: user.metoken?.name || "",
    symbol: user.metoken?.symbol || "",
  };
};
