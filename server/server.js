const express=require('express');
const app=express();
const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Anime-World');
const Account=mongoose.model('Account',{"email": String,"mobile": String,"username":String,"password":String,"feed":String});
app.use(express.json());
var cors = require('cors');
app.use(cors());
// register server
app.post("/Register",async(req,res)=>{
let body=req['body'];
let email=body['email'];
let mobile= body['mobile'];
let username= body['username'];
let password = body['password'];

const userToInsert=new Account(
    {"email":email,"mobile":mobile,"username":username,"password":password}) ;
    userToInsert.save();
    console.log(email,mobile,username,password);
    res.set("content-type","application/json");
    res.send({"message":"account-created"});

} );
// login server
app.post("/Login",async(req,res)=>{
    let body= req['body'];
    let email= body ['email'];
    let password= body['password'];
    const result = await Account.find({"email":email,"password":password});
    console.log(result);
    res.set("content-type","application/json");

    if(result.length ==1){
    res.send({"message":" LOGIN SUCCESSFULLY"}); 
    }else{
      res.send({"message":" LOGIN failure"});
    }
    console.log(email,password)
})
// feedback server
app.post("/Feedback",async(req,res)=>{
  let body=req['body'];
  let username= body['username'];
  let email=body['email'];
  let  feed= body['feed'];
  
  const userToInsert= new Account(
      {"email":email,"username":username,"feed":feed}) ;
      userToInsert.save();
      console.log(email,username,feed);
      res.set("content-type","application/json");
      res.send({"message":"feed- send"});
  
  } )
  //Get user
  app.get('/getuser', async (req, res) => {
    const result = await Account.find({});
    console.log(result);
    res.set("content-type","application/json");
    res.send(JSON.stringify(result));
  })
  // delete user
  app.post('/deleteUser', async (req, res) => {
    let body= req['body'];
    let id=body['id'];
    const result = await Account.findByIdAndDelete([id])
    console.log(result);
    res.set("content-type","application/json");
    res.send({"message":"deleted"});
  })
  // Admin login server
app.post("/adminlogin",async(req,res)=>{
    let body= req['body'];
    let email= body ['email'];
    let password= body['password'];
    const result = await Account.find({"email":email,"password":password});
    console.log(result);
    res.set("content-type","application/json");

    if(result.length==1){
    res.send({"message":" LOGIN SUCCESSFULLY"}); 
    }else{
      res.send({"message":" LOGIN failure"});
    }
    console.log(email,password)
})

app.listen(8051);