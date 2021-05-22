window.addEventListener('load',initEvent);

function initEvent(){

document.querySelector('#product').addEventListener("click",toggle);
document.querySelector("#dashboard").addEventListener("click",toggle)
document.querySelector("#Search_Product").addEventListener("click",toggle2);
}

function toggle(){
    const productbutton=document.querySelector('#product');
    const dashbutton=document.querySelector('#dashboard');
   const productdash =document.querySelector('#product_Dash');
   const dashboard= document.querySelector("#form_dash");
   const searchdashboard=document.querySelector("#search-dashboard");
   if(dashboard.style.display==="none"){
    dashboard.style.display="block"; 
    dashbutton.style.background="#D78402";  
    productdash.style.display="none"
    productbutton.style.background="none";
    searchdashboard.style.display='none' ;
}
else
{
    dashbutton.style.background="none"
    dashboard.style.display="none"; 
    productdash.style.display="block"    
    productbutton.style.background="#D78402"
    searchdashboard.style.display='none' ;
}
  

}


