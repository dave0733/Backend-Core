import { ConfigService } from "@nestjs/config";
import { providers, utils } from "ethers";
const pinataSDK = require("@pinata/sdk");
import { TxStatus } from "../constants/transaction";
import { constructRawMessage } from "./auth";
import { ITypedData } from "../types/auth";

const configService = new ConfigService();

export const SUPPORTED_CHAINS = [1, 5];

export const CHAIN_RPC_MAP = {
  1: "MAINNET_RPC_URL",
  5: "GOERLI_RPC_URL",
};

export const getTransactionStatus = async (chainId: number, txHash: string) => {
  try {
    if (!SUPPORTED_CHAINS.includes(chainId)) return TxStatus.PENDING;
    const providerUrl = configService.get(CHAIN_RPC_MAP[chainId]);
    const provider = new providers.JsonRpcProvider(providerUrl);
    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt || ![0, 1].includes(receipt.status)) {
      return TxStatus.PENDING;
    }
    if (receipt.status === 1) {
      return TxStatus.SUCCESS;
    }
    return TxStatus.FAIL;
  } catch (error) {
    return TxStatus.PENDING;
  }
};

export const getPinataInstance = () => {
  const pinataApiKey = configService.get("PINATA_API_KEY");
  const pinataApiSecret = configService.get("PINATA_API_SECRET");
  return new pinataSDK(pinataApiKey, pinataApiSecret);
};

export const pinFileToIPFS = async (readableStreamForFile: any, name: string) => {
  const pinata = getPinataInstance();

  const options = {
    pinataMetadata: {
      name,
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  const res = await pinata.pinFileToIPFS(readableStreamForFile, options);

  return {
    ...res,
    ipfsUri: `ipfs://${res.IpfsHash}`,
    path: name,
    size: res.PinSize,
    timestamp: res.Timestamp,
  };
};

export const verifySignedMessage = (
  address: string,
  signedMessage: string,
  typedData: ITypedData,
) => {
  const { domain, types, value } = typedData;
  const rcoveredAddress = utils.verifyTypedData(domain, types, value, signedMessage);
  return rcoveredAddress.toLowerCase() === address.toLowerCase();
};

export const constructTypedData = (oneTimeKey: string) => {
  const domain = { chainId: process.env.CHAIN_ID, name: "MeTokens App" };
  const types = { "MeTokens Login Message": [{ name: "message", type: "string" }] };
  const rawMessage = constructRawMessage(oneTimeKey);
  const value = { message: rawMessage };
  return { domain, types, value };
};
