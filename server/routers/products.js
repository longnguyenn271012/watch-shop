import express from 'express';
import { getProducts, createProduct, updateProduct } from '../controllers/products.js';

const router = express.Router();
//http://localhost:5000/products

router.get('/', getProducts);

router.post('/', createProduct);

router.post('/update', updateProduct);

export default router;
