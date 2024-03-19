import mongoose from 'mongoose'

// first create schema , then create model
const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        unique : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    password : {
        type : String ,
        required : true ,
    }
}, {timestamps : true});

// now createing model
const User = mongoose.model('User' , userSchema);

export default User;