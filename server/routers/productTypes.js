import express from 'express';
import { getProductTypes, createProductType, updateProductType } from '../controllers/productTypes.js';

const router = express.Router();
//http://localhost:5000/productType

router.get('/', getProductTypes);

router.post('/', createProductType);

router.post('/update', updateProductType);

export default router;
