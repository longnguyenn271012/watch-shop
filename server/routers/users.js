import express from 'express';
import { getUsers, createUser, updateUser } from '../controllers/users.js';

const router = express.Router();
//http://localhost:5000/users

router.get('/', getUsers);

router.post('/', createUser);

router.post('/update', updateUser);

export default router;
