import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { TransactionModule } from "./transaction/transaction.module";
import { ScheduleModule } from "@nestjs/schedule";
import { AdminModule } from "./admin/admin.module";
import { EmailModule } from "./email/email.module";
// import { GraphQLModule } from "@nestjs/graphql";
// import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    // }),
    PrismaModule,
    AuthModule,
    UserModule,
    TransactionModule,
    AdminModule,
    EmailModule,
  ],
})
export class AppModule {}
