import express from 'express';
//import Post from '../models/Post.js';
import { createPost, updatePost, deletePost, getPost, getPosts } from '../controllers/post.js';

const router = express.Router();

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.get("/:id", getPost);

router.get("/", getPosts);

export default router;