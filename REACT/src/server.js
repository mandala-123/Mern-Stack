const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 5000;
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
const MONGO_URL=process.env.MONGO_URL ||  'mongodb://127.0.0.1:27017/'
mongoose.connect(MONGO_URL)
.then(()=>console.log("Database Connected."))
.catch((err)=>console.error(err.message));
const  ContactSchema=new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    email:{type:String,require:true,trim:true},
    message:{type:String,require:true,trim:true},},{timestamps:true}

);

const Contact=mongoose.model("Contact",ContactSchema);
app.post('/api/contacts',async(requestAnimationFrame,res)=>
{
    try
    {
        const{name,email,message}=req.body;
        if(!name || !email || !message)

    }
    catch(err)
    {
        res.status
    }
}
)