import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req , res) => {
    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password , 10); // 10 = no of times salt to be added, 
                                                             // use hashSync , so need to use await
    const newUser = new User({username , email , password: hashedPassword});
    try{
        await newUser.save();
    res.status(201).json('user created succesfully');  // 201 = something is created
    }catch(error){
        res.status(500).json(error.message)  // 500 = error coming
    }
    
};