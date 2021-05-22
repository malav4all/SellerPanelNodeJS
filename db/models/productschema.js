const connection=require('../models/connect')
const {Schema}=require('mongoose');
const Productschema=new Schema({
     imgname:{type:Schema.Types.String},
    pcode:{type:Schema.Types.String,unique:true,required:true},
    pname:{type:Schema.Types.String,required:true},
    pprice:{type:Schema.Types.Number,required:true},
    pdescription:{type:Schema.Types.String,required:true}
    
},{timestamps:true});
const productmodel=connection.model('products',Productschema);
module.exports=productmodel;