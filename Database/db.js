const Sequelize=require('sequelize');

const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:'localhost',
    dialect:'mysql'
});

sequelize.sync().then(()=>{
    console.log(`Connected to the database`);
}).catch((error)=>{
    console.log(error)
})
module.exports=sequelize