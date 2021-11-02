import express from 'express';
import { getOrders, createOrder, updateOrder } from '../controllers/orders.js';

const router = express.Router();
//http://localhost:5000/orderDetail

router.get('/', getOrders);

router.post('/', createOrder);

router.post('/update', updateOrder);

export default router;
