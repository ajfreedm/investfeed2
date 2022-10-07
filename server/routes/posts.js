import express from 'express';

// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';


const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

/*
router.post('/', createPost);
router.get('/:id', getPost);

router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
*/

export default router;