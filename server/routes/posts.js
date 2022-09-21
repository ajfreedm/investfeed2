import express from 'express';
import cors from 'cors';

// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world')
  })

export default router;