import dbConnection from "../database/db.js";

export const addUser=(request,response)=>{
    const query="SELECT * FROM members WHERE email=? and password=?";
    dbConnection.query(query,["ahujaronit321@gmail.com","ronit"],(err,result)=>{
        if(err){
            console.log(err);
            response.status(500).send("Error while authenticating user");
        }
        else{
            response.send("found user");
        }
    })
}