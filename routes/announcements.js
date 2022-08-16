import express from 'express';
import { createPost, updatePost, deletePost, getPost, getPosts } from '../controllers/announcements.js';

const router = express.Router();

router.post("/", createPost);

router.put("/:type/:id", updatePost);

router.delete("/:id", deletePost);

//router.get("/:id", getPost);

router.get("/:page", getPosts);

export default router;