import express, { json } from "express"
import  cors from "cors"
import mysql2 from "mysql2"
import multer from "multer"
import path from "path"
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb) =>{
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
    }
})

const upload=multer({
    storage:storage
})
const db= mysql2.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"admin@2003",
    database:"eventcms",
    port:"3001"
})

app.get("/eventAPI",(req,res)=>{
    const  q="SELECT*FROM eventimage"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post("/eventAPI",upload.single('image'),(req,res)=>{
    const image=req.file.filename;
    const sql="INSERT INTO eventimage (`image`) VALUES(?)"
    db.query(sql,[image],(err,data)=>{
        if(err) return res.json({Message:"Error"})
        return res.json({status:'success'})
    })
})

app.get('/',(req,res)=>{
    res.json("This is backend")
})

app.listen(2005,()=>{
    console.log("backend connected")
})
