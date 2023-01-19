export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE': 
        //because like and update are the same thing, if we have 2 cases, the return applies to both
        case 'LIKE':
        //action.paylod=newly updated memory
            return posts.map((post) => post._id===action.payload._id ? action.payload : post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [... posts, action.payload];   
    
        default:
            return posts;
    }

}