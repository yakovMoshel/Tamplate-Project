import { cryptoSchema } from "../models/cryptoSchema";

export async function getCryptosFromDB() {
    const cryptos = await cryptoSchema.find().lean(); // הופך למסמכים רגילים

    return cryptos;
}