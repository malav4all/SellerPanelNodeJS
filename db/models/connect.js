const mongoose=require('mongoose');
 const dbOptions = {
    useNewUrlParser : true,
    poolSize:process.env.POOL_SIZE
};
mongoose.connect(process.env.DBURL,dbOptions,(err)=>{
    if(err){
        console.log("Connection Not Stablished");
    }
    else{
        console.log("Connection Stablished");
    }
})

module.exports=mongoose;