import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

const jwtSecret = 'murlidhar108';

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

export const signin = async (req , res , next) => {
    const {email , password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandlerdler(404 , 'User not found'));
        const validPassword = await bcryptjs.compareSync(password , validUser.password);
        if(!validPassword) return next(errorHandler(401 , 'Wrong credentials'));
        const token = jwt.sign({id: validUser._id} , jwtSecret);
        const {password: pass , ...rest} = validUser._doc;  // removing the password
        res.cookie('access_token' , token , {httpOnly: true}).status(200).json(rest);
    }catch(error){
        next(error);
    }
}

export const google = async(req , res , next) => {
    try {
        const user = await USer.findOne({email: req.body.email})
        if(user)
        {
            const token = jwt.sign({id: user._id}, 'murlidhar108');
            const {password: pass , ...rest} = user._doc;
            res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
        }
        else{
            const generatedpassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedpassword , 10);
            const newUser = new User({username: req.body.name.split(" ").join("").toLowerCase() 
            + Math.random().toString(36).slice(-4), email: req.body.email, password: hashedPassword, 
            avatar: req.body.photo});
            await newUser.save();
            const token = jwt.sign({id: newUser._id} , 'murlidhar108');
            const {password: pass , ...rest} = newUser._doc;
            res.cookie('access_token' , token , {httpOnly: true}).status(200).json(rest);
        }
    }catch(error) {
        next(error);
    }
}

// next(errorHandler(550 , 'error from the function'));
