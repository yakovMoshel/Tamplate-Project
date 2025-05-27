import { Request, Response } from 'express';
import { fetchAndStoreCryptos, fetchCryptoById } from '../services/crypto.Service';

export const getCryptos = async (req: Request, res: Response) => {
  const data = await fetchAndStoreCryptos();
  res.json(data);
};

export const getCryptoDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const days = req.query.days || 7;

  const data = await fetchCryptoById(id, Number(days));
  res.json(data);

};

