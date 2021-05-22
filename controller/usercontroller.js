const userdto=require('../dto/userdto');
const useroperations=require('../services/useroperations');

pagescontroller={
    loginpage(request,response){
        response.render('login');
    },
    login(request,response){
       
        console.log(request.body.email,request.body.password);
     const promise=useroperations.login(request.body.email,request.body.password);   
    
     promise.then(data=>{
         if(data.length===0){
            response.send("Worng Id and  password");    
         }else{
         response.redirect('panel');}
     }).catch(err=>{
         if(err){
         response.send("Worng Id and  password");
         }
        })

    },
    register(request,response){
        
    const dto=new userdto(request.body.name,request.body.gender,request.body.email,request.body.phonenum,request.body.password);        
    const promise=useroperations.register(dto);
    promise.then(data=>{
        response.redirect('/');
    }).catch(err=>{
        if(err){
            response.send("Not succesfully Register");
        }

    });
}

}
module.exports=pagescontroller;