import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from '../models/user.js';
import userLog from '../models/userLog.js';

// register

export const register = async(req,res)=>{
    try {
        const {
            userName,
            email,
            password,
            picture
        }=req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(password, salt);

        const newUser=new User({
            userName,
            email,
            password:passwordHash,
            picture
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
       res.status(500).json({error:error.message})
    }
};

// login

export const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email:email});
        if(!user) return res.status(400).json({msg:"User does not exist."});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg:"Wrong password."});

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        const logUser=new userLog({
            email:user.email,
            status:"login"
        });
        const savedLog = await logUser.save();
        delete user.password;
        res.status(200).json({token, user,savedLog});


    } catch (err) {
        
    }
};

export const logout = async(req,res)=>{
    try {
        const {email}=req.body;
        
        const logUser=new userLog({
            email:email,
            status:"logout"
        });
        const savedLog = await logUser.save();
        res.status(201).json({savedLog});


    } catch (err) {
        
    }
};
