import * as api from '../api';


//action creators - functions that return actions
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error)
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        // returning updated memory or the post
        const {data} = await api.updatePost(id, post);
        dispatch({type: ' UPDATE', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}