const tasks = require('./rootes/tasks');
const connection = require('./db');
const cors=require("cors");
const express = require("express");
const app = express();
connection();
app.use(express.json());
app.use(cors());

app.use("/api/tasks",tasks);
const port = 8080 ;
 app.listen(port,()=>(
    console.log(`serveur lancer sur port ${port}`)
 ))