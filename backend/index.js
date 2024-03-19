import express from 'express';
const app = express()
app.use(express.json());
const port = 4000;
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config(); // initialising 

mongoose.connect('mongodb://localhost:27017/real-estate').then(()=>{
    console.log("mongo db connected");
}).catch((err) => {
    console.log(err);
})

app.listen(port , () => {
    console.log('backend is running');
})

app.use('/backend/user' , userRouter);
app.use('/backend/auth' , authRouter);

// creating middleware
app.use((err , req , res , next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false ,
        statusCode ,
        message
    })
})