import axios from 'axios'; 

//backend data url
const url = 'http://localhost:3000/posts';

export const fetchPosts =  () => axios.get(url);
//take in 1 param which is the entire "new post"
//axios.post(need to specify url, then specify data send which is newPOst )
export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);