import express from 'express';
import { getCryptos, getCryptoDetails } from '../api/controller/cryptoController';

const router = express.Router();

router.get('/', getCryptos);
router.get('/:id', getCryptoDetails);

export default router;