import express from "express";
import userRouter from "./routes/userRouter.js";
import userDataRouter from "./routes/userDataRouter.js";

// import bodyParser from 'body-parser';

import { Server } from 'socket.io';
import { createServer } from 'http';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import cors from 'cors';
import dbConnection from './database/db.js';

import { authenticateToken } from './middlewares/middleware.js';

const app = express();
// const router = express.Router();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Allow all origins
        methods: ["GET", "POST"] // Allow GET and POST methods
    }
});
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Allow cookies
}));
// router.use(cookieParser());
app.use('/api/user', userRouter);
app.use(authenticateToken);
app.use('/', userDataRouter);
// router.get('/', (req, res) => {
//     res.send('Hello World');
// });
// router.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     console.log(username, password);
//     // const hashedPassword = await bcrypt.hash(password, 10);
//     try {
//         // Check if the username already exists
//         const [existingUsers] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

//         if (existingUsers.length > 0) {
//             return res.status(400).json({ message: 'Username already exists' });
//         }

//         // Hash the password
//         // const hashedPassword = await bcrypt.hash(password, 10);

//         // Insert the user into the database
//         await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);

//         // Generate JWT token
//         const token = jwt.sign({ username }, 'mohit6663', { expiresIn: '1h' });

//         // Set the JWT token as a cookie
//         res.cookie('token', token, { httpOnly: true });

//         // Return success message
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
// app.
io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


server.listen(8080, () => {
    console.log('Server is running on port 8080');
});