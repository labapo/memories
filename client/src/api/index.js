import axios from 'axios'; 

//backend data url
const url = 'http://localhost:3000/posts';

export const fetchPosts =  () => axios.get(url);