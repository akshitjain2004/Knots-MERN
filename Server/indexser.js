const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
app.use(express.json())

const PORT= process.env.PORT||8080

const schemaData=mongoose.Schema({
    name: String,
    email:String,
    vendorsname:String,
    numberofguests:Number,
    Foodtype:String,
    Date:String,
    otherrequirements:String

},{
    timestamps:true
})

const userModel=mongoose.model("user",schemaData)
//CRUD Operations
app.get("/",async(req,res)=>{
    const data=await userModel.find({})
    res.json({success:true,data:data})
})

app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data=new userModel(req.body)
    await data.save()
    res.send({success:true,message:"Data saved successfully",data:data})
})



app.put("/update",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest}=req.body
    console.log(rest)
    const data=await userModel.updateOne({_id:_id},rest)
    res.send({success:true,message:"Data updated succesfully",data:data})
})


app.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
console.log(id)
const data=await userModel.deleteOne({_id:id})
res.send({success:true,message:"Data deleted succesfully",data:data})
})

//locally connecting mongo, can connect atlas if we want to use cloud
mongoose.connect("mongodb://127.0.0.1:27017/wed")
.then(()=>{console.log("connect DB")
app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))




