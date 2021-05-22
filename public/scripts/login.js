window.addEventListener('load',initEvent);
function initEvent(){
    document.querySelector("#register").addEventListener('click',toggle);
    document.querySelector("#login").addEventListener('click',toggle);
}

function toggle(){
    const registerbtn= document.querySelector("#register");
    const loginbtn= document.querySelector("#login");
const register=document.querySelector('.register');
const login= document.querySelector('.login');
registerbtn.disabled=false;
loginbtn.disabled=false;
console.log(registerbtn.value)
if(registerbtn.value==='true')
{
    register.style.display='block';
    login.style.display='none';
    registerbtn.disabled=true;
    registerbtn.value=false;
}
else{
    register.style.display='none';
    login.style.display='block';
    registerbtn.value=true;
   
    loginbtn.disabled=true;

}

    
}