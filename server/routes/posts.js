import express from 'express';
import { getPosts, createPosts, updatePost } from "../controllers/posts.js"

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
//patch is for updating existing documents
router.patch('/:id', updatePost)

export default router; 