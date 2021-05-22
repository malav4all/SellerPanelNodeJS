const express=require('express');
const dotenv=require('dotenv');
const upload=require('express-fileupload');
const path=require('path')
const app=express();
const viewpath=path.join(__dirname,'views');



dotenv.config();
app.use(upload());
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',viewpath);
app.use('/public',express.static('public'));
app.use('/',require('./router/usersrouter'));
app.use('/',require('./router/productrouter'));


app.listen(1111,(request,respons)=>{});