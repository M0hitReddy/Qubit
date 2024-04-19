import db from "../database/db.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
const signup = (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    // console.log(req.body);
    const id = uuidv4();
    const query = "INSERT INTO users (id,first_name,last_name,username,password) VALUES (?,?,?,?,?)";
    // const query="SELECT * FROM members WHERE email=? and password=?";
    db.query(query, [id, firstname, lastname, username, password], (err, result) => {
        if (err) {
            console.log(err, 'already exists');
            res.status(500).send({message:'email already exists!'});
        }
        else {
            console.log(result);
            const token = jwt.sign({ id: id }, "mohit6663", {
                expiresIn: "1hr"
            });
            // res.header('Authorization', `Bearer ${token}`).send(token);
            // res.send({ user: id });
            res.header('Access-Control-Expose-Headers', 'Authorization');

            res.header('Authorization', `Bearer ${token}`).send({ token: token, user: id, message: 'User created successfully' });
        }
    })
}
const login = (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username=? AND password=?";
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            if (result.length > 0) {
                const token = jwt.sign({ id: result[0].id }, "mohit6663", {
                    expiresIn: "10d"
                });
                res.header('Authorization', `Bearer ${token}`).send({ token: token, user: result[0].id, message: 'User logged in successfully' });
            }
            else {
                console.log('Invalid credentials');
                res.status(401).send({ message: 'Invalid credentials' });
            }
        }
    })
}


export { signup,login };