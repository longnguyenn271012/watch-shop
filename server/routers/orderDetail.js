import express from 'express';
import { getOrderDetail, createOrderDetail, updateOrderDetail } from '../controllers/orderDetail.js';

const router = express.Router();
//http://localhost:5000/orderDetail

router.get('/', getOrderDetail);

router.post('/', createOrderDetail);

router.post('/update', updateOrderDetail);

export default router;
