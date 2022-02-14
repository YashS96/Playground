import User from '../model/user.js'
import jwt from 'jsonwebtoken'
//import 

export const userSignup = async (req,res)=>{
        try{
            const body=req.body;
            const exist = await User.findOne({username: body.username });
            if(exist){
                return  res.status(401).json(`User already exists!`);
            }
            else{                
                const newUser = new User(user);
                //const newEntry = await User.insertOne(user);
                await newUser.save();
                if(newEntry){
                    res.status(200).json('User registered successfully!')
                }
            } 
        }
        catch(err){
            console.log(`err`)
        }
}

export const userLogin = async (req,res)=>{
    try{
        const body=req.body;
        const user=await User.findOne({username: body.username, password: body.password});
        if(user){
            const token= jwt.sign({
                name: user.username,
                email: user.email
            },'secret1234')
            return res.status(200).json(`login successful!!`)
        }
        else{
            return res.status(401).json(`user doesn't exist!`)
        }

    }
    catch(err){
        console.log(err)
    }
}