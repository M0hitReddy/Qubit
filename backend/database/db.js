import mysql from "mysql2";
import { userName, host, password, database} from "../constants/constants.js";

const db = mysql.createConnection({
  user: userName,
  host: host,
  password: password,
  database: database,
});

db.connect((err)=>{
    if(err)console.log(err);
    else console.log("database connected successfully")
});

export default db;
