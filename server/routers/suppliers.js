import express from 'express';
import { getSuppliers, createSupplier, updateSupplier } from '../controllers/suppliers.js';

const router = express.Router();
//http://localhost:5000/suppliers

router.get('/', getSuppliers);

router.post('/', createSupplier);

router.post('/update', updateSupplier);

export default router;
