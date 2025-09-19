const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LoginModel = require('./models/Loginuser');

const app = express();
 app.use(express.json());
 app.use(cors());

 mongoose.connect("mongodb://127.0.0.1:27017/test");

 app.post('/signup',(req,res) => {
    LoginModel.create(req.body)                                     
    .then(loginusers => res.json(loginusers))
    .catch(err => res.json(err))
 })

 app.post('/login',(req,res) => {
    const {email, password} = req.body;
    LoginModel.findOne({email : email})
    .then(user => {
        if(user)
        {
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Inorrect Username or Password!");
            }
        }
        else
        {
            res.json("No record existed"); 
        }
    })
 })

 app.listen(5000, () => {
    console.log("server is running");
 })



 