import React from "react";
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './style'
//import grid to use
import { Grid, CircularProgress } from '@material-ui/core'; 

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();  
    console.log(posts);
    return (
        //if there are no posts, then show the spinning wheel, or else show the grid
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {/* here we're going to map through all the posts, put each post in a grid, and render each post component.  */}
                {/* Each component will have a key of the post id  */}
                {posts.map((post)=> (
                    <Grid key={post._id} item xs={12} small={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts; 