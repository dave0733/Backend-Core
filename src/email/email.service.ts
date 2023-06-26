import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Transaction, TransactionType } from "@prisma/client";
import { IUserWithPublicProfile } from "src/utilities/types.ts/auth";
import { getShortenedAddress } from "src/utilities/utils/generics";
import * as SendGrid from "@sendgrid/mail";

@Injectable()
export class EmailService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>("SENDGRID_API"));
  }

  async handleTransactionEmail(
    transaction: Transaction,
    buyerOrSeller: IUserWithPublicProfile,
    metokenOwner: IUserWithPublicProfile,
  ) {
    if (!metokenOwner.email) return;
    const isBuyEmail =
      transaction.type === TransactionType.BUY && metokenOwner.notifications.includes("BUY");
    const isSellEmail =
      transaction.type === TransactionType.SELL && metokenOwner.notifications.includes("SELL");
    try {
      if (isBuyEmail)
        return await this.sendBuyEmail(
          metokenOwner.email,
          metokenOwner.publicProfile.username,
          buyerOrSeller.publicProfile?.username || getShortenedAddress(buyerOrSeller.address),
          metokenOwner.address,
        );
      if (isSellEmail)
        return await this.sendSellEmail(
          metokenOwner.email,
          metokenOwner.publicProfile.username,
          buyerOrSeller.publicProfile.username || getShortenedAddress(buyerOrSeller.address),
          metokenOwner.address,
        );
    } catch (error) {
      console.log(error);
    }
  }

  private async sendBuyEmail(
    toEmail: string,
    toName: string,
    fromName: string,
    fromAddress: string,
  ) {
    const buyMail: SendGrid.MailDataRequired = {
      to: toEmail,
      from: {
        email: "james@metokens.com",
        name: "James from meTokens",
      },
      dynamicTemplateData: {
        first_name: toName,
        buyer: fromName,
        address: fromAddress,
      },
      templateId: this.configService.get<string>("SENDGRID_BUY_TEMPLATE"),
    };
    try {
      const transport = await SendGrid.send(buyMail);
      return transport;
    } catch (error) {
      console.log("Error sending buy email");
      console.log(error);
    }
  }

  private async sendSellEmail(
    toEmail: string,
    toName: string,
    fromName: string,
    fromAddress: string,
  ) {
    const sellMail: SendGrid.MailDataRequired = {
      to: toEmail,
      from: {
        email: "james@metokens.com",
        name: "James from meTokens",
      },
      dynamicTemplateData: {
        first_name: toName,
        buyer: fromName,
        address: fromAddress,
      },
      templateId: this.configService.get<string>("SENDGRID_SELL_TEMPLATE"),
    };
    try {
      const transport = await SendGrid.send(sellMail);
      return transport;
    } catch (error) {
      console.log("Error sending sell email");
      console.log(error);
    }
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    return transport;
  }
}
