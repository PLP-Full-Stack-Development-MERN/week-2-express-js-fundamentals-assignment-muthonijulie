const mongodb_connection=require('mongoose');
const UserSchema=new mongodb_connection.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    
},{timestamps:true})
module.exports=mongodb_connection.model("User",UserSchema)