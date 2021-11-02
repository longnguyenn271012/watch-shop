import express from 'express';
import { getVouchers, createVoucher, updateVoucher } from '../controllers/vouchers.js';

const router = express.Router();
//http://localhost:5000/vouchers

router.get('/', getVouchers);

router.post('/', createVoucher);

router.post('/update', updateVoucher);

export default router;
