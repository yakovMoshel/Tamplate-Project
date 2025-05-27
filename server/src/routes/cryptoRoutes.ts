import express from 'express';
import { getCryptos, getCryptoDetails } from '../api/controller/cryptoController';

const router = express.Router();

/**
 * @route GET /api/crypto
 * @description Returns a list of cryptocurrencies
 * @access Public
 */
router.get('/', getCryptos);

/**
 * @route GET /api/crypto/:id
 * @description Returns details of a specific cryptocurrency by ID
 * @param {string} id - The ID of the cryptocurrency
 * @access Public
 */
router.get('/:id', getCryptoDetails);

export default router;
