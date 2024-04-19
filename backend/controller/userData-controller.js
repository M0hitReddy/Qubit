import db from "../database/db.js";
const getUserDetails = async (req, res) => {
    // console.log(JSON.stringify(req.user)+" req");
    // res.send(req.user);
    // try {
    //     // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
    //     const [rows] = await db.query('SELECT username, first_name FROM users WHERE id = ?', [req.user.id]);
    //     if (rows.length === 0) {
    //         return res.status(404).json({ message: 'User not found' });
    //     }
    //     res.json({ username: rows[0].username, name: rows[0].name });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Server error' });
    // }
    // console.log(req.body);
    const { username, password } = req.body;
    const query = "SELECT username, first_name FROM users WHERE id = ?";
    db.query(query, [req.user.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            console.log(JSON.stringify(result));
            if (result.length > 0) {
                res.json({ username: result[0].username, first_name: result[0].first_name });
            }
            else {
                console.log('Invalid credentials');
                res.status(401).send({ message: 'Invalid credentials' });
            }
        }
    })
}
export { getUserDetails };