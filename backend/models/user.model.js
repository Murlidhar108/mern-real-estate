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
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIo5vLF-x4PhTzKYSJe_DcaE8z_cfRDKRiQ&usqp=CAU"
    }
}, {timestamps : true});

// now createing model
const User = mongoose.model('User' , userSchema);

export default User;