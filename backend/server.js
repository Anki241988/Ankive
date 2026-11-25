import express from "express";
import pool from "./config/db.js"
const app=express();

app.use(express.json())
app.get('/api/health',(req,res)=>{
    res.status(200).json({message:'Ankive backend is running'})
})

let server

async function startServer(){
    try {
       await pool.query('SELECT 1')
        console.log('Supabase PostgreSQL connected successfully')

      server=    app.listen(process.env.PORT,()=>{
    console.log("Ankive backend is running on port 8080")
})
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

}
startServer()

async function shutdown(){


}