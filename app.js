const express=require('express');
const bodyParser= require('body-parser');
const sequelize = require('./util/database');

const app=express();

const formRoutes=require('./routes/form');

app.use(bodyParser.json()); // application/json

app.use(formRoutes)

sequelize
.sync()
.then(result=>{
    console.log(result)
    app.listen(8080)
})
