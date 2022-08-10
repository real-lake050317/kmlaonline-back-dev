import express from 'express';

import { updateUser, deleteUser, getUser, getUsers, getUserBySchoolId } from '../controllers/user.js';
import { verifyUser, verifyToken, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

//router.get("/:id", verifyUser, getUser);

router.get("/:schoolId", getUserBySchoolId);

router.get("/", verifyAdmin, getUsers);

export default router;