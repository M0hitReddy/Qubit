import mysql from "mysql2";
import { userName, host, password, database} from "../constants/constants.js";

const dbConnection = mysql.createConnection({
  user: userName,
  host: host,
  password: password,
  database: database,
});

dbConnection.connect((err)=>{
    if(err)console.log(err);
    else console.log("database connected successfully")
});

export default dbConnection;
