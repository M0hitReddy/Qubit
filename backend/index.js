import express from "express";
import route from "./routes/Route.js";

const app=express();
const PORT=8000

app.listen(PORT,()=>console.log(`running on ${PORT}`));
app.use('/', route);