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