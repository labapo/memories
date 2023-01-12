import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes from post.js
import postRoutes from './routes/posts.js';

//initialize the express 
const app = express();

//middleware
//use express middleware to connect to the application
app.use('/posts', postRoutes); 
//general setup so you can send requests
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

//connections
const CONNECTION_URL = 'mongodb+srv://labapo:Missy217!@sei.xkd1rlx.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen (PORT, ()=> console.log (`Server running on port: ${PORT}`) ))
    .catch((error)=> console.log(error.message));

//mongoose.set('useFindAndModify', false);
mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})


