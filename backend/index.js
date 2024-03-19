const express = require('express')
const app = express()
const port = 4000;
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config(); // initialising 

mongoose.connect('mongodb://localhost:27017/real-estate').then(()=>{
    console.log("mongo db connected");
}).catch((err) => {
    console.log(err);
})

// console.log('MongoDB URI:', process.env.MONGO);

app.listen(port , () => {
    console.log('backend is running');
})






