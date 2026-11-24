import express from "express";
import pool from "./config/db"
const app=express();

app.use(express.json())
app.get('/api/health',(req,res)=>{
    res.status(200).json({message:'Ankive backend is running'})
})

app.listen(process.env.PORT,()=>{
    console.log("Ankive backend is running on port 8080")
})
