const loginServices=require("../services/login.services");

async function addUser(req,resp){
    try{
        const user=await loginServices.saveUser(req.body);
        resp.status(201).json(user);
    }catch(error){
         resp.status(500).json({"error":error});
      }    
}

module.exports={addUser};