import { HttpService } from "@nestjs/axios";
import { generateRandomString } from "./generics";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";
import { UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

export function generateOneTimeKey() {
  return `${generateRandomString(8)}-${generateRandomString(6)}-${generateRandomString(8)}`;
}

export const constructRawMessage = (oneTimeKey: string) => {
  return `You are signing this message to login to meTokens. Here is a one-time key for your login -> ${oneTimeKey}`;
};

export const revalidatePage = async (path: string) => {
  const frontendUrl = configService.get("FRONTEND_URL");
  const httpService = new HttpService();
  const response = await firstValueFrom(
    httpService
      .get(`${frontendUrl}/api/revalidate/?secret=this-is-revalidation-token&path=${path}`)
      .pipe(
        catchError((error: AxiosError) => {
          if (error.response.status === 401) {
            throw new UnauthorizedException("Invalid token");
          }
          throw "An error happened!";
        }),
      ),
  );
  return response.data;
  // const response = await fetch(
  //   "http://localhost:3000/api/revalidate/?secret=this-is-revalidation-token&path=some-path",
  // );
  // const data = await response.json();
  // console.log(data);
};
