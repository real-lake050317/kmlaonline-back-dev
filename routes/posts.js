import express from 'express';
import { getPost, getPosts } from '../controllers/post.js';

const router = express.Router();

router.get("/:id", getPost);

router.get("/", getPosts);

export default router;