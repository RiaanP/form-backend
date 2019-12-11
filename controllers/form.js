//required a valdation module to check for any errors
const {validationResult}=require('express-validator/check');
const User= require('../model/user');


//function to add data to the database
exports.postData=(req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    const error= new Error('Validation failed');
    error.statusCode=422;
    error.data=errors.array();
    throw error;
}


//requesting all fileds from the form front-end
const name = req.body.name;
const email= req.body.email;
const number= req.body.number;
const startDate= req.body.date;
const enddate= req.body.endDate;

// Create a new user with in mySql database
User.create({ 
Name: name,
email: email,
number:number,
startDate:startDate,
endDate:enddate
 })
.then(res => {
res.status(200).json({
    message:"Information collected"
})
})
.catch(err=>{
    console.log(err)
});



}

//this is a function to get form data
exports.getForm=(req,res,next)=>{
//Search through database for the form information
 // Find all users
User.findAll()
.then(users => {
    //sending response back to the front-end
    res.status(200).json({
        message:'information fetched succesfully',
        user:users
    })

})
.catch(err=>{
    console.log(err)
});  
}
