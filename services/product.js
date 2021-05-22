const productschema=require('../db/models/productschema')
const productoperation={
    add(obj){
        const promise=productschema.create(obj);
        // const result=productschema.find();
    return promise;
    }
   ,display(){
        
        const result=productschema.find();
        return result;
  }
    ,delete(id){
        const result=productschema.deleteOne({_id :id });
        return result;
    }
    ,
    update(id,obj){
        console.log("id in update",id);
        const result=productschema.updateOne({_id :id },obj);
        return result;
    }   
    ,getproduct(id){
    const result=productschema.find({_id :id });
    return result;
},
    search(id){
        console.log("id",id);
        const result=productschema.find({pcode:id }); 
    return result;
    }
}
module.exports=productoperation;