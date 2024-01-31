require('dotenv').config();
const express=require('express')
const {router}=require('./Controllers/routes.js')

const app=express();
app.use(express.json());

app.use('/ORM',router);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is listening to the port ${port}`)
})