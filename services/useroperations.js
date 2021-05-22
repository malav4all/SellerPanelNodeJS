const users=require('../db/models/userschema');
useroperations={
    register(obj){
        const promise=users.create(obj);
        return promise;
    },
    login(id,password){
        console.log()
        const promise=new Promise((resolve,reject)=>{
            users.find({email:id,password:password},(err,doc)=>{
                if(err){
                    reject(err.message,"massege rejected");
                }
                else{
                    console.log("here in else")
                    resolve(doc);
                }

            })
        })
        return promise
    }

}
module.exports=useroperations;