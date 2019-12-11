const express= require('express');

const router=express.Router();

const formController=require('../controllers/form');


//posting all user information routes
router.post('/submit',formController.getForm);


//
router.get('/form',formController.postData);




module.exports=router;