//makes use of the CRUD operations
const User=require("../Models/User");

const createUser=async(req,res)=>{
    try{
        const newUser=await User.create(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(400).json({error:"Bad request"});
    }
}
const getUser=async(req,res)=>{
    const users=await User.find();
    res.json(users);
};

const getUserId=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:"User not found"});
        res.json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateUser=async(req,res)=>{
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateUser){
            return res.status(404).json({message:"User not found"});
        }
        res.json(updateUser);
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

const deleteUser=async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted")
};

module.exports={getUser,getUserId,createUser,updateUser,deleteUser};