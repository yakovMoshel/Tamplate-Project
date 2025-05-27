import { CryptoInfo } from "./CryptoInfo";

export interface CryptoDetail {
  detail: CryptoInfo;
  history: [number, number][];
}
