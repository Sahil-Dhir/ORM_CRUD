const router=require('express').Router();
const {CreatePerson,findAll,findById,updatePerson,deletePerson}=require("./PersonController")
router.post("/create",CreatePerson);
router.get("/getAll",findAll);
router.get("/getById/:id",findById);
router.put("/update/:id",updatePerson);
router.delete("/delete/:id",deletePerson)
module.exports={router}