import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        //retrieve all the posts that's in the database
        //since finding information can take time, we'll need to make it
        //an async function. 
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        //make the function return something, so if all goes well this will happen
        //it'll send the postMessage data (the array of post messages) back a status of 200 in json
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try{ 
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    //post is coming from the req.body
    const post = req.body; 
    //extract id from req.params
    //for the id, we're renaming the id after the colon's to '_id' because of that's how it shows in our database
    const { id:_id } = req.params;

    //create a check to see if the id is a mongo id. If it's not valid, then return a 404 message
    if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id');

    //if there is a post with the id then do this
    //passing post and specifying that new = true so that we can receive the updated version of that post
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, { new: true});
    //since the right side of the = sign is an asyc action, we have to put in await
    res.json(updatedPost)
    
}