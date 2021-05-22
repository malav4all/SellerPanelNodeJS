const dto=require('../dto/productdto');
const productoperation=require('../services/product');
const path=require('path');

productController={

  addProduct(request,response){
    
    if(request.files.imgname.mimetype==='image/jpeg'|| request.files.imgname.mimetype==='image/png'){  
        const file=request.files.imgname;//get the file obj
        const imgname=request.files.imgname.name;
        
        const parent=path.normalize(__dirname+'/..');
        
        const fullpath=path.join(parent,'public/images/');
        
        file.mv(fullpath+imgname,(err)=>{
            if(err){
            response.send("File is not uploaded fully");
            }

        })

        const pcode=request.body.pcode.toUpperCase();
        
    const obj=new dto(imgname,pcode,request.body.pname,request.body.pprice,request.body.pdescription,)
    const promise=productoperation.add(obj);

        promise.then(data=>{
            response.redirect('/panel');
        }).catch(err=>{
            response.send("Not Send Successfull",err.message);
        })
  
}
else{
    response.send("File type is not reqogonised pls upload png and jpg file");
}

},
    showProduct(request,response){
         
        if(request.body.id!=undefined){
            
            const result= productoperation.getproduct(request.body.id);
            const result2= productoperation.display();
          
         result.then(product=>{
                    result2.then(products=>{
                    
              response.render('index',{product:product,products:products});
          }).catch(err=>{
              console.log(err.message);
          })
         })  
    .catch(err=>{
           console.log(err.message);
       })
    } 
     
        else{
        const result= productoperation.display();
        const product=[{_id:' ',imgname:'Enter Image',pcode: 'Enter ProductCode ',pname:'Enter Product Name ',pprice:'Enter Price ',pdescription:'Enter Description '}];
        result.then(data=>{
          response.render('index',{products: data,product:product,searchproduct:product});
          
      }).catch(err=>{
          response.render("Cantnot Find Data");
      })
    }
   
    },
    deleteProduct(request,response){
        
        const result=productoperation.delete(request.body.id);
        result.then(data=>{
            response.redirect('/panel');
        }).catch(err=>{
            response.render(err);
        })
    },
    editProduct(request,response){
        if(request.files.imgname.mimetype==='image/jpeg'|| request.files.imgname.mimetype==='image/png'){  
            const file=request.files.imgname;//get the file obj
            const imgname=request.files.imgname.name;
            
            const parent=path.normalize(__dirname+'/..');
            
            const fullpath=path.join(parent,'public/images/');
            
            file.mv(fullpath+imgname,(err)=>{
                if(err){
                response.send("File is not uploaded fully");
                }
    
            })
            const pcode=request.body.pcode.toUpperCase();
        const obj=new dto(imgname,pcode,request.body.pname,request.body.pprice,request.body.pdescription,)
        const result=productoperation.update(request.body.id,obj);
        
        result.then(data=>{
            response.redirect('/panel');
        }).catch(err=>{
            response.send(err);
        });
    }
    },
    searchProduct(request,response){
        
        const pcode=request.body.pcode;
        
        
        const result=productoperation.search(pcode);
      
        //  const sampledata=[{_id:' ',imgname:'Enter Image',pcode:'Enter ProductCode ',pname:'Enter Product Name ',pprice:'Enter Price ',pdescription:'Enter Description '}];
            result.then(data=>{
                console.log(data);
                if(data.length===0)
                {   data=true
                    response.render('searchproduct',{searchproduct:data});
                }else{
                response.render('searchproduct',{searchproduct:data});}
            }).catch(err=>{
                if(err){    
                    response.status(404).send("404 Error");
                }
            })
    


    }

}
module.exports=productController;