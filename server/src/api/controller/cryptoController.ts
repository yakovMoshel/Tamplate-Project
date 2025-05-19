import { Request, Response } from 'express';
import {fetchCryptoById,fetchCryptos}  from '../services/crypto.Service';

export const getCryptos = async (req: Request, res: Response) => {
  try {
    const data = await fetchCryptos();
    res.json(data);
  } catch (err) {
    console.error('Error in getCryptos:', err);
    res.status(500).json({ message: 'Error fetching cryptocurrency data' });
  }
};

export const getCryptoDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await fetchCryptoById(id);
    res.json(data);
  } catch (err) {
    console.error('Error in getCryptoDetails:', err);
    res.status(500).json({ message: 'Error fetching crypto detail' });
  }
};
