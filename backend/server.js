const mysql = require('mysql2');
const cors = require("cors");
const express = require('express');
const app = express();

app.use(express.json());

app.use(cors());

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Fl@sh123",
    database:"college",
})
connection.connect((err,res)=>{
    if(err){
        console.log("error connecting");
        return;
    }
    console.log('connected');
});
app.get("/", (req,res)=>{
    const sql = "SELECT * FROM student";
    connection.query(sql, (err,data)=>{
        res.json(data);
    })
})
app.post("/create", (req,res)=>{
    const sql = "INSERT INTO student VALUES (?, ?)";
    const values = [
        req.body.id,
        req.body.name
    ]
    connection.query(sql, values, (err,data)=>{
        res.json({
            msg: "user created!!"
        })
    })
})
app.put("/update/:id", (req,res)=>{
    const sql = "UPDATE student id = ?, name = ? WHERE id = ?";
    const values = [
        req.body.newId,
        req.body.newName
    ]
    const id = req.params.id;
    connection.query(sql, [...values, id], (err,data)=>{
        res.json({
            msg: "user updated!!"
        })
    })
})
app.delete("/data/:id", (req,res)=>{
    const sql = "DELETE FROM student WHERE id = ?";

    const id = req.params.id;

    connection.query(sql, id, (err,data)=>{
        res.json({
            msg: "user deleted!!"
        })
    })
})

app.listen(3000);



