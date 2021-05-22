const productController=require('../controller/productcontroller');
const express=require('express');
const router=express.Router();

router.get('/panel',productController.showProduct);
router.post('/searchproduct',productController.searchProduct);
router.post('/editproduct',productController.showProduct);
router.post('/deleteproduct',productController.deleteProduct);
router.post('/updateproduct',productController.editProduct);
router.post('/addproduct',productController.addProduct);
module.exports=router;