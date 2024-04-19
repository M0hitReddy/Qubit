// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
function authenticateToken(req, res, next) {
    // console.log(req);
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    const token=req.body.token;
    console.log(token+" token");
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'mohit6663', (err, user) => {
        if (err) return res.sendStatus(403);
        console.log(user);
        req.user = user;
        next();
    });
}

export { authenticateToken };