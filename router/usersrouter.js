const usercontroller=require('../controller/usercontroller')

const express=require('express');
const router=express.Router();

router.get('/',usercontroller.loginpage)

router.post('/login',usercontroller.login);
router.post('/register',usercontroller.register);
module.exports=router;