import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './style';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";


//get the current id. We'll need to click on the 3 dots at the top of the post to edit. That'll be the edit button
//then we'll need to pass the id in order to edit the post to the form component
//then the form is going to change form "creating a memory" to "editing a memory"



const Form = ( {currentId, setCurrentId} ) => { 
    const [postData, setPostData] = useState({
        creator: '',
        title: "",
        message: "", 
        tags: "", 
        selectedFile: ""

    })

    //we only want the data from the updated posts. 
    //in the function we'll do a ternary: If we have a current id, then we want to loop over state.posts and call a find method
    //we want to find the post (p in this case) that has the same id as the current id. If they match the in puts will be put on the form
    //if not, then it's null
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);
    const classes = useStyles(); 
    const dispatch = useDispatch(); 
    
    useEffect (()=> {
        if(post) setPostData(post);
    }, [post])
    
    const handleSubmit = (e) => {
        //not to get the refresh in the browser
        e.preventDefault();
        //
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
        //dispatch an action
        dispatch(createPost(postData))
    };
        //clears form after submit
        clear();
    };
    const clear = () => {
        setCurrentId(null);
        //set data to empty string
        setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: ""});
    };
    return (
      
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography>
            <TextField 
            name='creator' 
            variant="outlined" 
            label='Creator' 
            // all of the data of our posts will be held in the postdata object
            fullWidth 
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value  })}
            />
            <TextField 
            name='title' 
            variant="outlined" 
            label='Title' 
            fullWidth 
            // all of the data of our posts will be held in the postdata object
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value  })}
            />
            <TextField 
            name='message' 
            variant="outlined" 
            label='Message' 
            fullWidth 
            // all of the data of our posts will be held in the postdata object
            value={postData.message}
            onChange={(e) => setPostData({ ...postData, message: e.target.value  })}
            />
            <TextField 
            name='tags' 
            variant="outlined" 
            label='Tags' 
            fullWidth 
            // all of the data of our posts will be held in the postdata object
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')  })}
            />
            <div className={classes.fileInput}>
                <FileBase
                type = "file"
                multiple={false}
                onDone={({base64}) => setPostData({ ... postData, selectedFile: base64})}
                />
            </div>
            <Button className={classes.buttonSubmit} variant='contained' color="primary" size="large" type='submit' fullWidth>
            Submit
            </Button>
            <Button variant='contained' color="secondary" size="small" onClick={clear} fullWidth>
            Clear
            </Button>
            </form>
        </Paper>
    )
}

export default Form; 