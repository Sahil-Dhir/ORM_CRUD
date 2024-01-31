const Person=require('../Models/Model');


const CreatePerson=async(req,res)=>{
    try{
        const body=req.body
        if(body.age<25){
            res.status(400).json({
                message:"U are under age"
            })
        }
        else{
 const person1  =  await Person.create(body);
 

    res.status(200).json({
        message:"User Created"
    })
    console.log(person1);
}
    }
catch(error){
    console.log(error)
    res.status(500).json({
        message:"Failed to Create the user"
    })
}
}

const findAll=async(req,res)=>{
try{
    const findAl=await Person.findAll();
    console.log(findAl)
    res.status(201).json({
        data:findAl
    })
}
catch(error){
console.log(error)
res.status(501).json({
    message:"Failed to find users"
})
}
}

const findById=async(req,res)=>{
const byId = await Person.findByPk(req.params.id)
if(!byId){
    res.json({
        Message:"User Not Found"
    })
}
else{
    res.json({
        data:byId
    })
}
}

const updatePerson=async(req,res)=>{
    try{
const update=await Person.update(req.body,{where:{id:req.params.id}})
if(update===0){
    res.json({
       message:"User Not found" 
    })
}
else{
   res.json({
    mesage:"User Updated succesfully"
   })
}
    }
    catch(error){
console.log(error);
res.json({
    message:"Failed to Update the User"
})
    }
}

const deletePerson=async(req,res)=>{
    try{
    const delete1=Person.destroy({
        where:{id:req.params.id}
    })
    if(delete1===0){
res.json(
    {
        message:"User Not Found"
    }
)
    }
    else{
        res.json({
            message:"User Deleted Succesfully"
        })
    }
    }
    catch(error){
console.log(error)
res.json({
    mesaage:"Failed to Delete the User"
})
    }
}
module.exports={CreatePerson,findAll,findById,updatePerson,deletePerson}