import express from 'express';
import { getPosts, createPosts, updatePost, deletePost, likePost } from "../controllers/posts.js"

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
//patch is for updating existing documents
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router; 