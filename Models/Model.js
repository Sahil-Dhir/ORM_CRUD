const sequelize=require("../Database/db");
const Sequelize=require('sequelize');


const Person = sequelize.define('Person', {
    firstName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  });
  
Person.sync().then(()=>{
  console.log(`Table Created`)
}).catch((error)=>{
  console.log(error)
})


module.exports=Person