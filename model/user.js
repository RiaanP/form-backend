const Sequelize= require('sequelize');

const sequelize=require('../util/database');

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoINcrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    number:{
        type:Sequelize.INTEGER
    },
    startDate:{
        type:Sequelize.INTEGER
    },
    endDate:{
        type:Sequelize.INTEGER
    }
});

module.exports=User;