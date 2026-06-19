const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"mysql",
  user:"root",
  password:"root",
  database:"hospitaldb"
});

db.connect((err)=>{
  if(err){
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.post("/api/patient",(req,res)=>{

  const {name, department} = req.body;

  const sql = "INSERT INTO patients(name,department) VALUES (?,?)";

  db.query(sql,[name,department],(err,result)=>{
    if(err){
      res.send(err);
    } else {
      res.send("Patient Added");
    }
  });

});

app.listen(5000,()=>{
  console.log("Backend Running on Port 5000");
});
