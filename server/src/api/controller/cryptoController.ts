import { Request, Response } from 'express';
import {fetchAndStoreCryptos, fetchCryptoById}  from '../services/crypto.Service';

export const getCryptos = async (req: Request, res: Response) => {
  try {
    const data = await fetchAndStoreCryptos();
    res.json(data);
  } catch (err) {
    console.error('Error in getCryptos:', err);
    res.status(500).json({ message: 'Error fetching cryptocurrency data' });
  }
};

export const getCryptoDetails = async (req: Request, res: Response) => {
   const { id } = req.params;
  const days = req.query.days || 7;

  try {
    const data = await fetchCryptoById(id, Number(days));
    res.json(data); 
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch full crypto data' });
  }
};

