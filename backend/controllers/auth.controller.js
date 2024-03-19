import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req , res , next) => {
    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password , 10); // 10 = no of times salt to be added, 
                                                             // use hashSync , so need to use await
    const newUser = new User({username , email , password: hashedPassword});
    try{
        await newUser.save();
    res.status(201).json('user created succesfully');  // 201 = something is created
    }catch(error){
        next(error);
    }
    
};

// next(errorHandler(550 , 'error from the function'));