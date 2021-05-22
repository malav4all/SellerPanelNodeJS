const connect=require('./connect');
const {Schema}=require('mongoose');
const userschema=new Schema({
name:{type:Schema.Types.String},
gander:{type:Schema.Types.String},
email:{type:Schema.Types.String,unique:true},
phonenum:{type:Schema.Types.Number,unique:true},
password:{type:Schema.Types.String}

},{timestamps:true});
const usermodule= connect.model("users",userschema);
module.exports=usermodule;